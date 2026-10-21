import { BRAND_NAME, SITE_URL } from './site';

export interface PageSEO {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogType: 'website' | 'article';
}

export const SHARE_IMAGE_URL = `${SITE_URL}/images/og-share.png`;

export const SEO_DATA: Record<string, PageSEO> = {
  '/': {
    path: '/',
    title: `隐形人官网｜隐形人机场 - 官方节点服务、9大套餐选型与客户端配置指南`,
    description: `隐形人官网与隐形人机场第三方服务导航平台。集中承接隐形人品牌信息、专线节点连接特性解析、9大精选套餐选型考量与多端客户端配置教程，为跨境出海人员提供清晰客观的使用指引与最新官网直达入口。`,
    keywords: [BRAND_NAME, `${BRAND_NAME}官网`, `${BRAND_NAME}机场`, `${BRAND_NAME}机场官网`, `${BRAND_NAME}节点`, `${BRAND_NAME}套餐`, '跨境网络专线', '数字游民工具', '机场节点导航'],
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/services/': {
    path: '/services/',
    title: `隐形人机场服务介绍与专线传输架构方案解析 - 隐形人官网`,
    description: `全面介绍隐形人机场的专线协议特征混淆、多路径容灾与细粒度规则分流等核心能力，说明隐形人官网全平台客户端生态适配规范与标准接入流程，协助出海团队构建稳定工作流。`,
    keywords: [`${BRAND_NAME}服务`, `${BRAND_NAME}机场架构`, `${BRAND_NAME}官网`, '网络传输架构', '协议混淆', '多路径容灾', '开发分流规则'],
    canonical: `${SITE_URL}/services/`,
    ogType: 'website',
  },
  '/advantages/': {
    path: '/advantages/',
    title: `隐形人机场核心优势与专线架构价值客观解析 - 隐形人官网`,
    description: `深入探讨隐形人机场在深层协议指纹伪装、专线网络低时延、多路径自动容灾及全生态设备一致漫游等维度的架构特性，为出海研发与跨国办公团队提供客观真实的隐形人官网选型参考。`,
    keywords: [`${BRAND_NAME}优势`, `${BRAND_NAME}机场特色`, `${BRAND_NAME}官网`, '网络指纹伪装', '专线优势', '容灾切换', '跨境办公协作'],
    canonical: `${SITE_URL}/advantages/`,
    ogType: 'website',
  },
  '/locations/': {
    path: '/locations/',
    title: `隐形人机场服务线路范围与节点选型指引 - 隐形人官网`,
    description: `提供隐形人机场跨区域专线网络选型的物理时延规律、精细化域名分流策略与骨干网拥堵应急换线建议。具体线路、节点与可用服务以隐形人官网合作平台客户端实际显示为准。`,
    keywords: [`${BRAND_NAME}线路`, `${BRAND_NAME}机场节点`, `${BRAND_NAME}官网`, '节点选型', '网络时延规律', '域名分流策略', '线路排错'],
    canonical: `${SITE_URL}/locations/`,
    ogType: 'website',
  },
  '/pricing/': {
    path: '/pricing/',
    title: `隐形人机场套餐价格与官网订阅方案选型指南 - 隐形人官网`,
    description: `从工作负荷、设备并发数、月度流量配额及计费周期四个客观维度解析隐形人机场官方公布的9大精选订阅与买断方案（含星耀风暴、白银纪元、黄金序列、钻石穹顶、王者定制及一次性流量包）。价格与活动以隐形人官网合作平台当前结算显示为准。`,
    keywords: [`${BRAND_NAME}套餐`, `${BRAND_NAME}机场套餐`, `${BRAND_NAME}官网订阅`, `${BRAND_NAME}价格`, '一次性流量包', '专线套餐选型'],
    canonical: `${SITE_URL}/pricing/`,
    ogType: 'website',
  },
  '/help/': {
    path: '/help/',
    title: `隐形人机场使用帮助中心与故障排错手册 - 隐形人官网`,
    description: `汇集隐形人机场新手快速上手流程、订阅节点链接导入步骤、多设备协同注意事项及系统时间偏差等常见网络故障排查方法，提供结构化可检索的隐形人官网技术知识库。`,
    keywords: [`${BRAND_NAME}帮助`, `${BRAND_NAME}机场配置`, `${BRAND_NAME}官网教程`, '排错教程', '客户端配置', '时间同步排查', '节点超时'],
    canonical: `${SITE_URL}/help/`,
    ogType: 'website',
  },
  '/downloads/': {
    path: '/downloads/',
    title: `隐形人机场客户端下载与多平台配置指引 - 隐形人官网`,
    description: `汇总Windows、macOS、iOS与Android四大主流平台的隐形人机场客户端生态兼容规范与订阅配置指引。支持情况与获取方式以隐形人官网合作平台说明为准。`,
    keywords: [`${BRAND_NAME}下载`, `${BRAND_NAME}机场客户端`, `${BRAND_NAME}官网下载`, '客户端获取', '多平台适配', 'Windows客户端', 'macOS配置'],
    canonical: `${SITE_URL}/downloads/`,
    ogType: 'website',
  },
  '/contact/': {
    path: '/contact/',
    title: `隐形人机场支持中心与官方社群交流入口 - 隐形人官网`,
    description: `提供隐形人机场Telegram官方公告频道与交流群直达入口，说明技术排错指引与隐形人官网在线工单客服路径，协助用户便捷获取最新通知与备用域名。`,
    keywords: [`${BRAND_NAME}联系`, `${BRAND_NAME}官网入口`, `${BRAND_NAME}机场群`, 'Telegram官方频道', 'Telegram交流群', '客户支持', '问题反馈'],
    canonical: `${SITE_URL}/contact/`,
    ogType: 'website',
  },
  '/terms/': {
    path: '/terms/',
    title: `隐形人平台服务条款与免责合规声明 - 隐形人官网`,
    description: `说明隐形人第三方信息展示与导航站点的服务性质、推广佣金透明披露、第三方平台交易权责划分及合理的信息免责声明与用户合规准则。`,
    keywords: ['服务条款', '免责声明', '第三方导航', '佣金披露', '合规使用准则', `${BRAND_NAME}官网`],
    canonical: `${SITE_URL}/terms/`,
    ogType: 'article',
  },
  '/privacy/': {
    path: '/privacy/',
    title: `隐形人平台隐私政策与数据处理说明 - 隐形人官网`,
    description: `详细阐明隐形人平台0 Cookie、0 存储、0 追踪的代码审查事实，客观区分浏览器前端执行与服务器底层安全日志，承诺尊重用户数据权益。`,
    keywords: ['隐私政策', '数据合规', '源码审查', '服务器日志说明', '隐私保护', `${BRAND_NAME}官网`],
    canonical: `${SITE_URL}/privacy/`,
    ogType: 'article',
  },
};

/**
 * 客户端动态设置 TDK 辅助函数
 * 路由切换时保持与预渲染完全一致
 */
export function updateClientSEO(pathname: string) {
  const cleanPath = pathname === '/' ? '/' : (pathname.endsWith('/') ? pathname : `${pathname}/`);
  const seo = SEO_DATA[cleanPath];

  // 404 兜底处理
  if (!seo) {
    document.title = `404 页面未找到 - ${BRAND_NAME}`;
    // 移除 Canonical 与 OG 标签，防止 404 污染
    removeMetaTag('link[rel="canonical"]');
    removeMetaTag('meta[property^="og:"]');
    removeMetaTag('meta[name^="twitter:"]');
    return;
  }

  // 设置 Document Title
  document.title = seo.title;

  // 设置 Description
  setMetaTag('name', 'description', seo.description);

  // 设置 Keywords
  setMetaTag('name', 'keywords', seo.keywords.join(', '));

  // 设置 Canonical
  setLinkTag('canonical', seo.canonical);

  // 设置 Open Graph
  setMetaTag('property', 'og:type', seo.ogType);
  setMetaTag('property', 'og:site_name', `${BRAND_NAME}官网｜${BRAND_NAME}机场`);
  setMetaTag('property', 'og:title', seo.title);
  setMetaTag('property', 'og:description', seo.description);
  setMetaTag('property', 'og:url', seo.canonical);
  setMetaTag('property', 'og:image', SHARE_IMAGE_URL);
  setMetaTag('property', 'og:image:width', '1200');
  setMetaTag('property', 'og:image:height', '630');
  setMetaTag('property', 'og:image:alt', `${BRAND_NAME}官网与${BRAND_NAME}机场跨境专线服务指引`);
  setMetaTag('property', 'og:locale', 'zh_CN');

  // 设置 Twitter Card
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', seo.title);
  setMetaTag('name', 'twitter:description', seo.description);
  setMetaTag('name', 'twitter:image', SHARE_IMAGE_URL);
}

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setLinkTag(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function removeMetaTag(selector: string) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => el.parentNode?.removeChild(el));
}
