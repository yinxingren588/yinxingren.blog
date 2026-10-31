import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');
const publicDir = path.resolve(rootDir, 'public');

// 导入服务器端渲染入口与统一路由、SEO、Schema 与文件生成工具
const entryServerPath = pathToFileURL(path.join(distSsrDir, 'entry-server.js')).href;
const {
  render,
  BRAND_NAME,
  SITE_URL,
  SEO_DATA,
  SHARE_IMAGE_URL,
  generateSchemaGraph,
  generateSitemapXml,
  generateRobotsTxt,
  REGISTERED_ROUTES,
  getIndexableRoutes,
} = await import(entryServerPath);

// 读取 Vite 生成的 HTML 模版
const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

console.log('🚀 开始静态全量预渲染与 SEO 文件生成流水线...');

// 1. 预渲染全站路由（从统一路由登记表动态遍历）
for (const route of REGISTERED_ROUTES) {
  if (route.id === 'not-found') {
    // 404.html 独立错误规范：严格不输出 Canonical / OG / Twitter Card / Schema，声明 noindex
    const notFoundPath = path.join(distDir, '404.html');
    const bodyHtml404 = render('/non-existent-route-404');

    let finalHtml404 = templateHtml;
    finalHtml404 = finalHtml404.replace(/<title>.*?<\/title>/s, `<title>404 页面未找到 - ${BRAND_NAME}机场官网</title>`);
    finalHtml404 = finalHtml404.replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="您访问的页面不存在或已被移除。" />\n    <meta name="robots" content="noindex, nofollow" />`
    );
    finalHtml404 = finalHtml404.replace(/<meta name="keywords" content=".*?" \/>\s*/s, '');
    finalHtml404 = finalHtml404.replace(/<link rel="canonical" href=".*?" \/>\s*/s, '');
    finalHtml404 = finalHtml404.replace(/<!-- Open Graph -->[\s\S]*?<!-- Twitter Card -->[\s\S]*?<meta name="twitter:image" content=".*?" \/>\s*/s, '');
    finalHtml404 = finalHtml404.replace('<div id="root"></div>', `<div id="root">${bodyHtml404}</div>`);

    fs.writeFileSync(notFoundPath, finalHtml404, 'utf-8');
    console.log(`✓ [404] 生成: dist/404.html (noindex, 0 Canonical, 0 OG, 0 Schema)`);
    continue;
  }

  // 正式业务页面
  const outputPath =
    route.path === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.path.replace(/^\//, '').replace(/\/$/, ''), 'index.html');

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // 渲染完整的 React DOM 正文
  const bodyHtml = render(route.path);

  // 提取对应页面的 SEO 配置
  const seo = SEO_DATA[route.path];
  if (!seo) {
    throw new Error(`未找到路径 ${route.path} 的 SEO_DATA 配置！`);
  }

  // 生成对应页面的结构化数据 JSON-LD
  const schemaGraph = generateSchemaGraph(route.path);
  const schemaScriptTag = schemaGraph
    ? `    <script id="schema-org-graph" type="application/ld+json">\n${JSON.stringify(schemaGraph, null, 2)}\n    </script>\n  `
    : '';

  let finalHtml = templateHtml;

  // 替换 Title, Description, Keywords, Canonical
  finalHtml = finalHtml.replace(/<title>.*?<\/title>/s, `<title>${seo.title}</title>`);
  finalHtml = finalHtml.replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${seo.description}" />`);
  finalHtml = finalHtml.replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${seo.keywords.join(', ')}" />`);
  finalHtml = finalHtml.replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${seo.canonical}" />`);

  // 替换 Open Graph
  finalHtml = finalHtml.replace(/<meta property="og:type" content=".*?" \/>/s, `<meta property="og:type" content="${seo.ogType}" />`);
  finalHtml = finalHtml.replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${seo.title}" />`);
  finalHtml = finalHtml.replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${seo.description}" />`);
  finalHtml = finalHtml.replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${seo.canonical}" />`);

  // 替换 Twitter Card
  finalHtml = finalHtml.replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${seo.title}" />`);
  finalHtml = finalHtml.replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${seo.description}" />`);

  // 注入唯一定位 ID 的 JSON-LD 结构化数据标签
  if (schemaScriptTag) {
    finalHtml = finalHtml.replace('</head>', `${schemaScriptTag}</head>`);
  }

  // 注入完整的 Body 正文到 <div id="root">
  finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

  fs.writeFileSync(outputPath, finalHtml, 'utf-8');
  console.log(`✓ 预渲染生成: ${path.relative(rootDir, outputPath)} (正文: ${bodyHtml.length} 字节, Schema: ${schemaGraph ? '已注入' : '无'})`);
}

// 2. 自动生成规范的 sitemap.xml
console.log('\n📄 正在基于统一路由登记生成 sitemap.xml...');
const sitemapXml = generateSitemapXml(REGISTERED_ROUTES);
const sitemapDistPath = path.join(distDir, 'sitemap.xml');
const sitemapPublicPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(sitemapDistPath, sitemapXml, 'utf-8');
fs.writeFileSync(sitemapPublicPath, sitemapXml, 'utf-8');
console.log(`✓ sitemap.xml 写入完成: dist/sitemap.xml & public/sitemap.xml`);

// 3. 自动生成规范的 robots.txt
console.log('\n🤖 正在生成符合规范的 robots.txt...');
const robotsTxt = generateRobotsTxt();
const robotsDistPath = path.join(distDir, 'robots.txt');
const robotsPublicPath = path.join(publicDir, 'robots.txt');
fs.writeFileSync(robotsDistPath, robotsTxt, 'utf-8');
fs.writeFileSync(robotsPublicPath, robotsTxt, 'utf-8');
console.log(`✓ robots.txt 写入完成: dist/robots.txt & public/robots.txt`);

// 4. 同步写入 IndexNow 验证 Key 文件
const INDEXNOW_KEY = 'd9452cd9711928e37afd10002997d50e';
const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
fs.writeFileSync(path.join(publicDir, INDEXNOW_KEY_FILE), INDEXNOW_KEY, 'utf-8');
fs.writeFileSync(path.join(distDir, INDEXNOW_KEY_FILE), INDEXNOW_KEY, 'utf-8');
console.log(`✓ IndexNow Key 文件已同步写入: public/${INDEXNOW_KEY_FILE} & dist/${INDEXNOW_KEY_FILE}`);

// 5. 统计与核验报告输出
const indexableRoutes = getIndexableRoutes(REGISTERED_ROUTES);
const excludedRoutes = REGISTERED_ROUTES.filter((r) => !indexableRoutes.some((idx) => idx.id === r.id));

console.log('\n📊 === SEO 与结构化数据流水线统计 ===');
console.log(`总登记路由数: ${REGISTERED_ROUTES.length}`);
console.log(`实际可索引页面数 (Sitemap URL 数): ${indexableRoutes.length}`);
console.log(`被排除页面数: ${excludedRoutes.length} (${excludedRoutes.map((r) => `${r.id}: ${r.path}`).join(', ')})`);
console.log(`Sitemap lastmod 状态:`);
indexableRoutes.forEach((r) => {
  console.log(`  - ${r.canonical}: ${r.lastmod ? `已记录 (${r.lastmod})` : '已省略 (无确切修改戳)'}`);
});
console.log('🎉 预渲染、JSON-LD、Sitemap 与 Robots 全量生成成功！\n');
