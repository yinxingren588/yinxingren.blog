import { BRAND_NAME, BRAND_NAME_EN, SITE_URL } from './site';
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
    title: `${BRAND_NAME}机场官网 - ${BRAND_NAME}官网｜全球专线加速与官方控制台入口`,
    description: `${BRAND_NAME}机场（${BRAND_NAME}官网）官方直营网站。专注提供企业级全球专线网络加速、端到端流量混淆保护、官方9大订阅配套直选及全平台正版客户端接入指引。全系专线1.0x真实倍率，官方专属技术售后保障。`,
    keywords: [
      `${BRAND_NAME}机场`,
      `${BRAND_NAME}官网`,
      BRAND_NAME,
      `${BRAND_NAME}官方网站`,
      `${BRAND_NAME}专线`,
      `${BRAND_NAME}控制台`,
      `${BRAND_NAME_EN}`,
      '跨境网络专线',
      '数字游民网络加速',
      '官方正版专线',
    ],
    canonical: `${SITE_URL}/`,
    ogType: 'website',
  },
  '/services/': {
    path: '/services/',
    title: `服务架构与全球专线传输方案 - ${BRAND_NAME}官网`,
    description: `深入解析${BRAND_NAME}（${BRAND_NAME_EN}）官方专线传输架构：高强度协议混淆封装、智能动态负载容灾与精细化分流规则。协助出海团队与跨境开发者构建高速稳定的生产级网络工作流。`,
    keywords: [`${BRAND_NAME}服务`, `${BRAND_NAME}架构`, `${BRAND_NAME}官网`, '网络传输架构', '协议混淆', '专线容灾', '开发分流规则'],
    canonical: `${SITE_URL}/services/`,
    ogType: 'website',
  },
  '/advantages/': {
    path: '/advantages/',
    title: `核心专线优势与官方架构解析 - ${BRAND_NAME}官网`,
    description: `从协议深度隐匿伪装、骨干专线多路径容灾、全生态客户端无缝衔接到官方1x真实计费倍率承诺，全方位展现${BRAND_NAME}（${BRAND_NAME_EN}）作为官方正牌服务的核心技术价值。`,
    keywords: [`${BRAND_NAME}优势`, `${BRAND_NAME}专线优势`, `${BRAND_NAME}官网`, '网络指纹伪装', '专线加速', '容灾切换', '跨境办公协作'],
    canonical: `${SITE_URL}/advantages/`,
    ogType: 'website',
  },
  '/locations/': {
    path: '/locations/',
    title: `全球专线节点分布与智能调度指引 - ${BRAND_NAME}官网`,
    description: `了解${BRAND_NAME}官方全球优质专线节点的物理时延考量、骨干网络动态调度机制与分流优化方法。具体实时可用节点与延迟以官方控制台及客户端订阅列表为准。`,
    keywords: [`${BRAND_NAME}节点`, `${BRAND_NAME}线路`, `${BRAND_NAME}官网`, '专线节点分布', '网络时延优化', '域名分流策略'],
    canonical: `${SITE_URL}/locations/`,
    ogType: 'website',
  },
  '/pricing/': {
    path: '/pricing/',
    title: `官方 9 大精选配套与在线订阅中心 - ${BRAND_NAME}官网`,
    description: `${BRAND_NAME}官方直营公布的9大精选正式配套：涵盖星耀风暴、白银纪元、黄金序列、钻石穹顶、王者定制等6款循环周期订阅方案，以及3款永不过期的一次性独立买断流量包。全系专线1x真实倍率，官方在线安全激活。`,
    keywords: [`${BRAND_NAME}套餐`, `${BRAND_NAME}价格`, `${BRAND_NAME}官网订阅`, '一次性流量包', '专线套餐选型', `${BRAND_NAME}机场套餐`],
    canonical: `${SITE_URL}/pricing/`,
    ogType: 'website',
  },
  '/help/': {
    path: '/help/',
    title: `帮助中心与官方故障排查手册 - ${BRAND_NAME}官网`,
    description: `汇集${BRAND_NAME}新手三步极速接入、全平台客户端官方订阅导入、多设备协同管理及系统时钟同步等常见问题排查方案。提供官方直属知识库与一对一工单支持入口。`,
    keywords: [`${BRAND_NAME}帮助`, `${BRAND_NAME}配置教程`, `${BRAND_NAME}官网手册`, '客户端配置', '时间同步排查', '网络故障排查'],
    canonical: `${SITE_URL}/help/`,
    ogType: 'website',
  },
  '/downloads/': {
    path: '/downloads/',
    title: `官方客户端下载与订阅导入中心 - ${BRAND_NAME}官网`,
    description: `汇总Windows、macOS、iOS与Android四大主流系统的${BRAND_NAME}官方客户端获取途径与配置导入指引。认准官方正版安全校验，保障端到端数据传输加密。`,
    keywords: [`${BRAND_NAME}下载`, `${BRAND_NAME}客户端`, `${BRAND_NAME}官网下载`, '客户端获取', '多平台适配', 'Windows客户端', 'macOS配置'],
    canonical: `${SITE_URL}/downloads/`,
    ogType: 'website',
  },
  '/contact/': {
    path: '/contact/',
    title: `官方支持中心与在线客服工单 - ${BRAND_NAME}官网`,
    description: `${BRAND_NAME}官方支持渠道汇总：提供官方在线技术工单通道、官方Telegram公告频道与官方技术交流群。官方直营售后团队全天候守护您的跨国连接顺畅。`,
    keywords: [`${BRAND_NAME}联系`, `${BRAND_NAME}官网客服`, '官方工单', 'Telegram官方频道', 'Telegram交流群', '客户支持'],
    canonical: `${SITE_URL}/contact/`,
    ogType: 'website',
  },
  '/terms/': {
    path: '/terms/',
    title: `服务条款与用户使用准则 - ${BRAND_NAME}官网`,
    description: `${BRAND_NAME}官方网站服务条款。明确官方平台直营服务性质、正版用户权益保障、网络安全合规准则与合理免责边界。`,
    keywords: ['服务条款', '官方正版', '用户准则', '网络合规', `${BRAND_NAME}官网`],
    canonical: `${SITE_URL}/terms/`,
    ogType: 'article',
  },
  '/privacy/': {
    path: '/privacy/',
    title: `用户隐私保护政策与数据合规 - ${BRAND_NAME}官网`,
    description: `${BRAND_NAME}官方平台隐私政策。详细阐述0 Cookie、0 本地存储追踪、纯客户端渲染架构与官方严格的数据安全加密保护承诺。`,
    keywords: ['隐私政策', '数据合规', '源码审查', '端到端加密', '隐私保护', `${BRAND_NAME}官网`],
    canonical: `${SITE_URL}/privacy/`,
    ogType: 'article',
  },
};

// 为所有帮助中心独立文章动态注入专业 SEO TDK
HELP_ARTICLES.forEach((article) => {
  const path = `/help/${article.id}/`;
  SEO_DATA[path] = {
    path,
    title: `${article.title} - ${BRAND_NAME}帮助中心与官方排错手册`,
    description: `${article.summary} 了解更多${article.categoryName}实用技巧与${BRAND_NAME}官方专线接入指引。`,
    keywords: [
      article.keyword,
      article.title,
      ...article.tags,
      `${BRAND_NAME}机场`,
      '机场推荐',
      '为什么选择隐形人机场',
      '梯子',
      'vpn',
      '节点',
      'clash',
      `${BRAND_NAME}官网`,
    ],
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
    document.title = `404 页面未找到 - ${BRAND_NAME}官方网站`;
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
