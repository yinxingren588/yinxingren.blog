import { BRAND_NAME, SITE_URL } from './site';
import { HELP_ARTICLES } from '../data/helpData';

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
    title: '隐形人机场官网 - 隐形人官网｜官方订阅与客户端下载',
    description: '隐形人机场（Invisible Network）官方网站，提供 IEPL 专线网络服务、全球节点选择及多种订阅套餐。通过隐形人官网了解线路服务、套餐价格、客户端下载、使用教程与官方客服支持。',
    keywords: [
      '隐形人机场',
      '隐形人官网',
      '隐形人',
      '隐形人官方网站',
      'Invisible Network',
      '隐形人专线',
      'IEPL专线',
      '官方订阅',
      '客户端下载',
    ],
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/services/': {
    path: '/services/',
    title: '专线网络服务与连接方案 - 隐形人机场',
    description: '隐形人机场专线网络服务架构与连接方案：深入解析企业级 IEPL 内网专线、端到端混淆封装、智能动态负载容灾与精细化分流规则，构建高速稳定的网络工作流。',
    keywords: ['隐形人机场', '专线网络服务', '连接方案', 'IEPL专线', '协议混淆', '专线容灾', '隐形人官网'],
    canonical: `${SITE_URL}/services/`,
    ogType: 'website',
  },
  '/advantages/': {
    path: '/advantages/',
    title: '隐形人机场怎么样？IEPL 专线与服务优势介绍',
    description: '隐形人机场怎么样？从全系企业级 IEPL 内网专线、1.0x 真实倍率承诺、全生态客户端支持到 7×24 在线技术售后，深度介绍隐形人机场的核心服务优势。',
    keywords: ['隐形人机场怎么样', '隐形人机场', 'IEPL专线', '服务优势', '专线加速', '真实倍率', '隐形人官网'],
    canonical: `${SITE_URL}/advantages/`,
    ogType: 'website',
  },
  '/locations/': {
    path: '/locations/',
    title: '全球节点分布与线路介绍 - 隐形人机场',
    description: '隐形人机场全球节点分布与线路介绍：全面了解香港、日本、新加坡、美国、欧洲等核心专线节点的物理时延考量、BGP 动态调度机制及业务选型建议。',
    keywords: ['全球节点分布', '线路介绍', '隐形人机场', '香港专线', '日本专线', 'BGP调度', '隐形人官网'],
    canonical: `${SITE_URL}/locations/`,
    ogType: 'website',
  },
  '/pricing/': {
    path: '/pricing/',
    title: '隐形人机场套餐价格 - 官方订阅方案与流量说明',
    description: '隐形人机场官方套餐价格与订阅方案介绍：提供星耀风暴、白银纪元、黄金序列等多档循环订阅及永不过期的一次性独立流量包，全线 IEPL 专线 1.0x 真实倍率计费。',
    keywords: ['隐形人机场套餐', '隐形人机场价格', '隐形人机场', '官方订阅方案', '流量包', '专线套餐', '隐形人官网'],
    canonical: `${SITE_URL}/pricing/`,
    ogType: 'website',
  },
  '/help/': {
    path: '/help/',
    title: '隐形人机场帮助中心 - 使用教程与常见问题',
    description: '隐形人机场官方帮助中心与使用教程：提供新手极速接入、客户端订阅导入、IEPL 专线选型、节点延迟排查与日常故障诊断指南，助您快速掌握隐形人机场使用方法。',
    keywords: ['隐形人机场教程', '隐形人机场使用方法', '隐形人机场帮助中心', '隐形人机场', '使用教程', '常见问题', '排错手册'],
    canonical: `${SITE_URL}/help/`,
    ogType: 'website',
  },
  '/downloads/': {
    path: '/downloads/',
    title: '隐形人机场客户端下载 - 官方安装与使用指南',
    description: '隐形人机场官方客户端下载与使用指南：提供 Windows、macOS、Android 官方安装包及 iOS、Linux、软路由客户端配置指引，支持一键订阅导入与专线网络连接。',
    keywords: ['隐形人机场下载', '隐形人机场客户端', '隐形人机场', 'Windows客户端', 'macOS配置', 'Android下载', '客户端指南'],
    canonical: `${SITE_URL}/downloads/`,
    ogType: 'website',
  },
  '/contact/': {
    path: '/contact/',
    title: '隐形人机场客服 - 官方联系与技术支持',
    description: '隐形人机场官方客服与支持渠道汇总：提供 7×24 在线真人客服、官方技术工单系统、Telegram 官方公告频道与技术交流群，全天候保障专线网络连接稳定。',
    keywords: ['隐形人机场客服', '隐形人机场联系', '隐形人机场', '在线客服', '官方工单', '技术支持', '隐形人官网'],
    canonical: `${SITE_URL}/contact/`,
    ogType: 'website',
  },
  '/terms/': {
    path: '/terms/',
    title: '服务条款 - 隐形人机场',
    description: '隐形人机场官方网站服务条款与使用准则：明确官方平台直营服务性质、正版用户权益保障、网络安全合规规范与合理免责边界。',
    keywords: ['服务条款', '用户准则', '隐形人机场', '合规规范', '免责声明', '隐形人官网'],
    canonical: `${SITE_URL}/terms/`,
    ogType: 'article',
  },
  '/privacy/': {
    path: '/privacy/',
    title: '隐私政策 - 隐形人机场',
    description: '隐形人机场官方网站隐私政策：阐述严格 0 行为日志留存机制、纯客户端渲染架构及端到端数据传输加密保护准则。',
    keywords: ['隐私政策', '零日志', '数据合规', '隐形人机场', '隐私保护', '隐形人官网'],
    canonical: `${SITE_URL}/privacy/`,
    ogType: 'article',
  },
};

// 为所有帮助中心独立文章动态注入专业 SEO TDK
HELP_ARTICLES.forEach((article) => {
  const path = `/help/${article.id}/`;
  const keywordSet = new Set([
    article.keyword,
    ...article.tags,
    '隐形人机场',
    '隐形人官网',
  ]);
  SEO_DATA[path] = {
    path,
    title: article.title,
    description: `${article.summary} 了解更多${article.categoryName}实用技巧与${BRAND_NAME}官方专线接入指引。`,
    keywords: Array.from(keywordSet),
    canonical: `${SITE_URL}${path}`,
    ogType: 'article',
  };
});

/**
 * 客户端动态设置 TDK 辅助函数
 */
export function updateClientSEO(pathname: string) {
  const cleanPath = pathname === '/' ? '/' : (pathname.endsWith('/') ? pathname : `${pathname}/`);
  const seo = SEO_DATA[cleanPath];

  // 404 兜底处理
  if (!seo) {
    document.title = '页面未找到 - 隐形人机场';
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
  setMetaTag('property', 'og:site_name', `${BRAND_NAME}官网｜${BRAND_NAME}官方网站`);
  setMetaTag('property', 'og:title', seo.title);
  setMetaTag('property', 'og:description', seo.description);
  setMetaTag('property', 'og:url', seo.canonical);
  setMetaTag('property', 'og:image', SHARE_IMAGE_URL);
  setMetaTag('property', 'og:image:width', '1200');
  setMetaTag('property', 'og:image:height', '630');
  setMetaTag('property', 'og:image:alt', `${BRAND_NAME}官方网站全球高速专线服务`);
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
