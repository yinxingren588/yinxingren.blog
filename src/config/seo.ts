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
    title: `${BRAND_NAME}｜服务介绍、套餐选型与配置使用指南`,
    description: `${BRAND_NAME}第三方服务指引与导航平台。集中承接品牌信息、连接特性解析、套餐选型考量与多端客户端配置教程，为跨境出海人员提供清晰客观的使用指引。`,
    keywords: [BRAND_NAME, `${BRAND_NAME}官网`, '跨境网络连接', '数字游民工具', '网络服务导航'],
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/services/': {
    path: '/services/',
    title: `${BRAND_NAME}服务介绍与传输架构方案解析`,
    description: `全面介绍${BRAND_NAME}的协议特征混淆、多路径容灾与细粒度规则分流等核心能力，说明全平台客户端生态适配规范与标准接入流程，协助出海团队构建稳定工作流。`,
    keywords: [`${BRAND_NAME}服务`, '网络传输架构', '协议混淆', '多路径容灾', '开发分流规则'],
    canonical: `${SITE_URL}/services/`,
    ogType: 'website',
  },
  '/advantages/': {
    path: '/advantages/',
    title: `${BRAND_NAME}核心优势与架构价值客观解析`,
    description: `深入探讨${BRAND_NAME}在深层协议指纹伪装、多路径自动容灾及全生态设备一致漫游等维度的架构特性，为出海研发与跨国办公团队提供客观真实的技术选型参考。`,
    keywords: [`${BRAND_NAME}优势`, '网络指纹伪装', '容灾切换', '跨境办公协作', '选型建议'],
    canonical: `${SITE_URL}/advantages/`,
    ogType: 'website',
  },
  '/locations/': {
    path: '/locations/',
    title: `${BRAND_NAME}服务线路范围与节点选型指引`,
    description: `提供跨区域网络选型的物理时延规律、精细化分流策略与骨干网拥堵应急换线建议。具体线路、节点与可用服务以合作平台客户端实际显示为准。`,
    keywords: [`${BRAND_NAME}线路`, '节点选型', '网络时延规律', '域名分流策略', '线路排错'],
    canonical: `${SITE_URL}/locations/`,
    ogType: 'website',
  },
  '/pricing/': {
    path: '/pricing/',
    title: `${BRAND_NAME}套餐选型与方案订阅决策指南`,
    description: `从工作负荷、设备并发数、月度流量配额及计费周期四个客观维度解析${BRAND_NAME}的订阅方案选型。套餐、价格与活动以合作平台当前结算显示为准。`,
    keywords: [`${BRAND_NAME}套餐`, '方案选型指南', '设备并发许可', '流量配额评估', '计费周期'],
    canonical: `${SITE_URL}/pricing/`,
    ogType: 'website',
  },
  '/help/': {
    path: '/help/',
    title: `${BRAND_NAME}使用帮助中心与故障排错手册`,
    description: `汇集新手使用流程、客户端导入步骤、多设备协同注意事项及系统时间偏差等常见故障排查方法，提供结构化、可即时检索的技术知识库。`,
    keywords: [`${BRAND_NAME}帮助`, '排错教程', '客户端配置', '时间同步排查', '使用知识库'],
    canonical: `${SITE_URL}/help/`,
    ogType: 'website',
  },
  '/downloads/': {
    path: '/downloads/',
    title: `${BRAND_NAME}客户端获取途径与多平台说明`,
    description: `汇总Windows、macOS、iOS与Android四大主流平台的客户端生态兼容规范与订阅配置指引。支持情况与获取方式以合作平台说明为准。`,
    keywords: [`${BRAND_NAME}下载`, '客户端获取', '多平台适配', 'Windows客户端', 'macOS配置'],
    canonical: `${SITE_URL}/downloads/`,
    ogType: 'website',
  },
  '/contact/': {
    path: '/contact/',
    title: `${BRAND_NAME}支持中心与官方社群交流入口`,
    description: `提供${BRAND_NAME}Telegram官方公告频道与交流群直达入口，说明技术排错指引与合作平台在线工单客服路径，协助用户便捷获取最新通知。`,
    keywords: [`${BRAND_NAME}联系`, 'Telegram官方频道', 'Telegram交流群', '客户支持', '问题反馈'],
    canonical: `${SITE_URL}/contact/`,
    ogType: 'website',
  },
  '/terms/': {
    path: '/terms/',
    title: `${BRAND_NAME}平台服务条款与免责合规声明`,
    description: `说明${BRAND_NAME}第三方信息展示与导航站点的服务性质、推广佣金透明披露、第三方平台交易权责划分及合理的信息免责声明与用户合规准则。`,
    keywords: ['服务条款', '免责声明', '第三方导航', '佣金披露', '合规使用准则'],
    canonical: `${SITE_URL}/terms/`,
    ogType: 'article',
  },
  '/privacy/': {
    path: '/privacy/',
    title: `${BRAND_NAME}平台隐私政策与数据处理说明`,
    description: `详细阐明${BRAND_NAME}平台0 Cookie、0 存储、0 追踪的代码审查事实，客观区分浏览器前端执行与服务器底层安全日志，承诺尊重用户数据权益。`,
    keywords: ['隐私政策', '数据合规', '源码审查', '服务器日志说明', '隐私保护'],
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
  setMetaTag('property', 'og:site_name', `${BRAND_NAME} (Invisible)`);
  setMetaTag('property', 'og:title', seo.title);
  setMetaTag('property', 'og:description', seo.description);
  setMetaTag('property', 'og:url', seo.canonical);
  setMetaTag('property', 'og:image', SHARE_IMAGE_URL);
  setMetaTag('property', 'og:image:width', '1200');
  setMetaTag('property', 'og:image:height', '630');
  setMetaTag('property', 'og:image:alt', `${BRAND_NAME} 跨境网络与数字游民连接服务指引`);
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
