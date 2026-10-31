import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, SITE_URL } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Server,
  Eye,
  Lock,
  Sparkles,
} from 'lucide-react';

/**
 * /privacy/ 隐私政策页面 (深色极客科技感暗黑紫主题)
 */
export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = `${BRAND_NAME}机场用户隐私保护政策与数据合规 - ${BRAND_NAME}机场官网`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="py-8 sm:py-16 bg-white min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-blue-600 font-semibold" aria-current="page">
              隐私政策
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>PRIVACY POLICY · 数据合规与零日志准则</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {BRAND_NAME} 隐私政策与数据合规声明
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-mono">
            <span>生效日期：2026年10月17日</span>
            <span>·</span>
            <span>最后修订：2026年10月31日</span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {BRAND_NAME}（{BRAND_NAME_EN}）深知隐私对出海人员与开发者至关重要。本隐私声明阐明我们在运营本站点（{SITE_URL}）时对数据处理的态度。我们恪守“最小必要”与“无痕浏览”准则，从代码底层杜绝任何侵犯访客隐私的隐秘追踪行为。
          </p>
        </div>

        {/* 核心隐私承诺横幅 */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-blue-50/70 border border-blue-200 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-base font-bold text-slate-900">
                纯净无痕：源码级无埋点与无 Cookie 架构承诺
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本站点作为官方正版前置门户，前端不植入任何跨站追踪 Cookie、不使用 localStorage 存储用户画像、不加载任何第三方行为分析脚本（如 Google Analytics、百度统计或 Facebook Pixel），真正实现零日志、免追踪。
              </p>
            </div>
          </div>
        </div>

        {/* 详细隐私条款章节 */}
        <div className="space-y-10 text-slate-600 text-xs sm:text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-600" />
              <span>一、浏览器客户端数据收集情况</span>
            </h2>
            <p>
              1. <strong>无 Cookie 机制</strong>：本站完全不向您的浏览器写入任何持久性或会话性 Cookie。
            </p>
            <p>
              2. <strong>无本地隐蔽存储</strong>：本站不使用 localStorage 或 IndexedDB 记录您的浏览历史、停留时长或页面点击轨迹。
            </p>
            <p>
              3. <strong>无数据主动上报</strong>：前端代码中不包含任何向远程自建服务器或第三方接口静默上报设备指纹的代码。
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-600" />
              <span>二、Web 服务器基础访问日志规范</span>
            </h2>
            <p>
              作为公开的 Web 静态门户，当您向托管服务器发起 HTTP 请求时，服务器基础网络设施（如 CDN 与 Nginx/Cloudflare）会按照网络协议自动记录标准的传输日志：
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-600 text-xs leading-relaxed space-y-1.5">
              <div>· 请求发生的时间戳（Timestamp）</div>
              <div>· 您请求的目标资源路径（Request URI）</div>
              <div>· 服务器返回的 HTTP 状态码（如 200、404）</div>
              <div>· 客户端 User-Agent 字符串（用于自适应屏幕布局）</div>
              <div>· 客户端公网 IP 地址（仅用于 DDoS 流量清洗与防刷保护）</div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
              <span>三、安全传输与防窃听机制</span>
            </h2>
            <p>
              全站强制启用基于现代 TLS 1.3 协议的 HTTPS 加密传输。当您在公共场所或不信任网络环境下访问本站时，传输信道中的所有请求内容均处于加密保护之下，杜绝了中间人篡改（MITM）与公共 Wi-Fi 嗅探风险。
            </p>
          </section>
        </div>

        {/* 底部返回 */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            阅读服务条款？请参阅{' '}
            <Link to="/terms/" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline">
              服务条款与免责声明
            </Link>
          </div>
          <Link
            to="/"
            className="text-slate-500 hover:text-blue-600 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
