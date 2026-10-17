import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(rootDir, 'public');

// IndexNow 基础配置（与 src/config/indexnow.ts 严格一致）
const INDEXNOW_KEY = 'd9452cd9711928e37afd10002997d50e';
const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
const SITE_URL = 'https://yinxingren.blog';
const INDEXNOW_HOST = new URL(SITE_URL).hostname; // 'yinxingren.blog'
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY_FILE}`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// 状态持久化文件与错误日志文件路径
const stateFilePath = path.join(__dirname, 'indexnow-state.json');
const errorLogPath = path.join(__dirname, 'indexnow-error.log');

/**
 * 计算文件 SHA-256 内容指纹用于去重
 */
function computeFileHash(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf-8');
  return crypto.createHash('sha256').update(content).digest('hex');
}

/**
 * 校验待提交 URL 合规性
 * 严格排除：AFF、localhost、带Hash/Query、404.html、非本站域名
 */
function isValidSubmissionUrl(url) {
  if (!url || typeof url !== 'string') return false;
  if (!url.startsWith(`${SITE_URL}/`)) return false;
  if (url.includes('#') || url.includes('?')) return false;
  if (/localhost|127\.0\.0\.1|example\.com/i.test(url)) return false;
  if (/varnexa|invisibleaff|code=/i.test(url)) return false;
  if (url.includes('404.html')) return false;
  return true;
}

/**
 * 读取或初始化持久化状态记录
 */
function loadState() {
  if (fs.existsSync(stateFilePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(stateFilePath, 'utf-8'));
      if (data && data.apiKey === INDEXNOW_KEY) {
        return data;
      }
    } catch (e) {
      console.warn('⚠️ 读取 indexnow-state.json 异常，重新初始化状态');
    }
  }

  return {
    apiKey: INDEXNOW_KEY,
    host: INDEXNOW_HOST,
    keyLocation: INDEXNOW_KEY_LOCATION,
    lastRun: null,
    lastSubmittedAt: null,
    pages: {}, // canonical -> { hash, lastModified, lastSubmittedAt, status }
    deletedPages: [], // 记录已删除/下线的历史 URL，用于通知搜索引擎清除
  };
}

/**
 * 保存持久化状态
 */
function saveState(state) {
  state.lastRun = new Date().toISOString();
  fs.writeFileSync(stateFilePath, JSON.stringify(state, null, 2), 'utf-8');
}

/**
 * 记录错误日志
 */
function recordError(message, details) {
  const timestamp = new Date().toISOString();
  const entry = `[${timestamp}] ${message}\nDetails: ${JSON.stringify(details, null, 2)}\n\n`;
  fs.appendFileSync(errorLogPath, entry, 'utf-8');
}

/**
 * 执行 IndexNow 分析与受控提交流程
 */
async function runIndexNow() {
  const args = process.argv.slice(2);
  const shouldSubmit = args.includes('--submit');

  console.log('🔍 === IndexNow 协议配置与变更跟踪 ===');
  console.log(`主机名 (Host): ${INDEXNOW_HOST}`);
  console.log(`API Key: ${INDEXNOW_KEY} (32位十六进制)`);
  console.log(`KeyLocation: ${INDEXNOW_KEY_LOCATION}`);

  // 1. 确保 Key 文件存在于 public/ 与 dist/ 目录中
  const publicKeyPath = path.join(publicDir, INDEXNOW_KEY_FILE);
  const distKeyPath = path.join(distDir, INDEXNOW_KEY_FILE);

  fs.writeFileSync(publicKeyPath, INDEXNOW_KEY, 'utf-8');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(distKeyPath, INDEXNOW_KEY, 'utf-8');
  }
  console.log(`✓ Key 文件确认: public/${INDEXNOW_KEY_FILE} & dist/${INDEXNOW_KEY_FILE}`);

  // 2. 动态读取 10 个正式可索引页面
  const state = loadState();

  // 正式 10 路由清单
  const officialPaths = [
    '/',
    '/services/',
    '/advantages/',
    '/locations/',
    '/pricing/',
    '/help/',
    '/downloads/',
    '/contact/',
    '/terms/',
    '/privacy/',
  ];

  const currentUrls = officialPaths.map((p) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`));

  const pendingAdditions = [];
  const pendingUpdates = [];
  const unchangedPages = [];

  // 3. 计算页面指纹并比对变更
  for (const p of officialPaths) {
    const canonical = p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`;
    const relHtml = p === '/' ? 'index.html' : path.join(p.replace(/^\//, '').replace(/\/$/, ''), 'index.html');
    const htmlPath = path.join(distDir, relHtml);

    const currentHash = computeFileHash(htmlPath);
    const existing = state.pages[canonical];

    if (!existing) {
      pendingAdditions.push(canonical);
      state.pages[canonical] = {
        contentHash: currentHash,
        status: 'pending_addition',
        lastDetectedAt: new Date().toISOString(),
        lastSubmittedAt: null,
      };
    } else if (currentHash && existing.contentHash && currentHash !== existing.contentHash) {
      pendingUpdates.push(canonical);
      state.pages[canonical] = {
        ...existing,
        contentHash: currentHash,
        status: 'pending_update',
        lastDetectedAt: new Date().toISOString(),
      };
    } else {
      unchangedPages.push(canonical);
    }
  }

  // 4. 检查是否有历史页面下线/删除
  const pendingDeletions = [];
  for (const recordedUrl of Object.keys(state.pages)) {
    if (!currentUrls.includes(recordedUrl)) {
      pendingDeletions.push(recordedUrl);
      if (!state.deletedPages.includes(recordedUrl)) {
        state.deletedPages.push(recordedUrl);
      }
      delete state.pages[recordedUrl];
    }
  }

  // 5. 组装待提交清单并执行合规过滤
  const allPendingUrls = [...pendingAdditions, ...pendingUpdates, ...pendingDeletions].filter(
    isValidSubmissionUrl
  );

  console.log(`\n📋 页面变更统计:`);
  console.log(`- 新增收录页面: ${pendingAdditions.length} 个`);
  console.log(`- 内容更新页面: ${pendingUpdates.length} 个`);
  console.log(`- 页面下线通知: ${pendingDeletions.length} 个`);
  console.log(`- 指纹一致跳过 (去重): ${unchangedPages.length} 个`);
  console.log(`- 待提交合规 URL 数量: ${allPendingUrls.length} 个`);

  // 6. 执行提交或离线准备
  if (!shouldSubmit) {
    // 离线/构建阶段：只完成配置与待提交清单生成，不进行未验证的盲目提交（规范第14条）
    saveState(state);
    console.log('\n🔒 【当前模式: 离线构建与清单准备】');
    console.log('• 网站尚未部署至公网环境，线上域名尚无法通过 HTTPS 验证 Key 文件。');
    console.log('• 根据规范第 14 条：“未部署、Key文件未验证时，只完成配置和待提交清单，不谎称已经提交成功”。');
    console.log('• 待部署上线后，可通过 `npm run indexnow:submit` 执行正式推送。\n');
    return {
      configured: true,
      submitted: false,
      pendingCount: allPendingUrls.length,
      reason: 'awaiting_deployment_verification',
    };
  }

  // 若显式传入 --submit 参数，执行网络提交并记录响应
  if (allPendingUrls.length === 0) {
    console.log('\n✅ 去重机制生效：所有页面指纹与上次提交完全一致，跳过重复提交。');
    saveState(state);
    return {
      configured: true,
      submitted: false,
      pendingCount: 0,
      reason: 'no_changes_detected',
    };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList: allPendingUrls,
  };

  console.log(`\n🚀 正在向 IndexNow 官方端点发送推送通知 (${INDEXNOW_ENDPOINT})...`);

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const status = response.status;
    const responseText = await response.text();

    console.log(`HTTP 响应状态码: ${status}`);

    if (status === 200 || status === 202) {
      console.log('🎉 IndexNow 成功受理提交请求！');
      console.log('📌 提示：接口受理仅表示搜索引擎已收到 URL 变动清单，不等于已抓取、已收录或排名提升。');

      // 更新状态记录
      const nowIso = new Date().toISOString();
      state.lastSubmittedAt = nowIso;
      allPendingUrls.forEach((url) => {
        if (state.pages[url]) {
          state.pages[url].status = 'submitted';
          state.pages[url].lastSubmittedAt = nowIso;
        }
      });
      state.deletedPages = []; // 已通知删除的清空
      saveState(state);

      return {
        configured: true,
        submitted: true,
        status,
        response: responseText,
      };
    } else {
      console.warn(`⚠️ IndexNow 接口返回异常状态码: ${status} ${response.statusText}`);
      console.warn(`响应详情: ${responseText || '无返回消息'}`);
      recordError(`IndexNow API error: HTTP ${status}`, { status, responseText, payload });
      saveState(state);

      return {
        configured: true,
        submitted: false,
        status,
        error: responseText,
      };
    }
  } catch (err) {
    console.error('❌ 发送 IndexNow 请求失败 (网络故障或连接被拒绝):', err.message);
    recordError('Fetch network failure', { message: err.message, payload });
    // 规范要求：IndexNow 提交失败不得影响正常网站构建
    saveState(state);

    return {
      configured: true,
      submitted: false,
      error: err.message,
    };
  }
}

// 执行
runIndexNow().catch((err) => {
  console.error('IndexNow 运行异常:', err);
  // 保障构建不中断
  process.exit(0);
});
