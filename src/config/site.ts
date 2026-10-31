/**
 * 全局站点固定资料与官方品牌配置
 * 确立隐形人 (Invisible) 官方品牌与专线网络服务门户身份
 */

export const BRAND_NAME = '隐形人';
export const BRAND_NAME_EN = 'Invisible Network';
export const SITE_URL = 'https://yinxingren.blog';
export const OFFICIAL_URL = 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy'; // 官方控制台与订阅中心

export const PRIMARY_KEYWORD = '隐形人官网';
export const SECONDARY_KEYWORD = '隐形人机场';
export const BRAND_KEYWORDS = ['隐形人', '隐形人官网', '隐形人机场', '隐形人官方网站', '隐形人专线', 'Invisible'] as const;

export const TELEGRAM_CHANNEL_URL = 'https://t.me/+diFXhmhTx-E4Mjc1'; // 官方公告频道
export const TELEGRAM_GROUP_URL = 'https://t.me/+YnHn1D4JK7c2Yjg1'; // 官方交流群

/**
 * Crisp 在线客服系统配置
 * 可配置 Crisp Website ID (UUID 格式，例如 '12345678-1234-1234-1234-123456789abc')
 * 或配置 Crisp 专属在线聊天链接 CRISP_CHAT_URL
 */
export const CRISP_WEBSITE_ID = 'fbb79e33-e3df-4f5a-8210-ec7028286eca'; // 用户专属 Crisp Website ID
export const CRISP_CHAT_URL = 'https://go.crisp.chat/chat/embed/?website_id=fbb79e33-e3df-4f5a-8210-ec7028286eca'; // 用户专属 Crisp 在线对话直连入口

/**
 * 官方客户端安装包直链配置
 */
export const WINDOWS_CLIENT_DOWNLOAD_URL = 'https://yinxing14.oss-ap-southeast-1.aliyuncs.com/v1.0.0/yinxingren-3.0.0-windows.zip';
export const WINDOWS_CLIENT_VERSION = 'v3.0.0 官方直连版';
export const WINDOWS_CLIENT_FILENAME = 'yinxingren-3.0.0-windows.zip';

export const MACOS_CLIENT_DOWNLOAD_URL = 'https://yinxing14.oss-ap-southeast-1.aliyuncs.com/v1.0.0/yinxingren-3.0.0-macos.zip';
export const MACOS_CLIENT_VERSION = 'v3.0.0 Universal 通用版';
export const MACOS_CLIENT_FILENAME = 'yinxingren-3.0.0-macos.zip';

export const ANDROID_CLIENT_DOWNLOAD_URL = 'https://app.invisibleattt.sbs/v1.0.0/yinxingren-3.0.0-universal.apk';
export const ANDROID_CLIENT_VERSION = 'v3.0.0 官方通用版 (APK)';
export const ANDROID_CLIENT_FILENAME = 'yinxingren-3.0.0-universal.apk';

/**
 * 触发打开 Crisp 在线客服对话窗口
 */
export function openCrispChat() {
  if (typeof window !== 'undefined') {
    if ((window as any).$crisp) {
      (window as any).$crisp.push(['do', 'chat:open']);
      (window as any).$crisp.push(['do', 'chat:show']);
      return;
    }
    if (CRISP_CHAT_URL) {
      window.open(CRISP_CHAT_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    if (CRISP_WEBSITE_ID) {
      window.open(`https://go.crisp.chat/chat/embed/?website_id=${CRISP_WEBSITE_ID}`, '_blank', 'noopener,noreferrer');
      return;
    }
    window.open('https://go.crisp.chat/', '_blank', 'noopener,noreferrer');
  }
}

/**
 * 站点官方身份认定
 */
export const SITE_IDENTITY = {
  isOfficial: true,
  type: 'official_brand_portal',
  typeName: '隐形人 (Invisible) 官方网站',
  verificationDate: '2026-10-31',
  verificationSummary: '隐形人 (Invisible) 官方直营跨境专线网络服务门户，承接全系 9 大正式套餐、官方客户端下载及技术支持。',
} as const;

/**
 * 官方服务品质保障承诺
 */
export const OFFICIAL_GUARANTEE_TEXT = '隐形人官方正版保障：全线采用企业级优质跨境专线，统一 1x 真实计费倍率，提供官方技术售后与全天候连接保障。';

/**
 * 站点元数据
 */
export const SITE_CONFIG = {
  brandName: BRAND_NAME,
  brandNameEn: BRAND_NAME_EN,
  siteUrl: SITE_URL,
  officialUrl: OFFICIAL_URL,
  primaryKeyword: PRIMARY_KEYWORD,
  secondaryKeyword: SECONDARY_KEYWORD,
  telegramChannelUrl: TELEGRAM_CHANNEL_URL,
  telegramGroupUrl: TELEGRAM_GROUP_URL,
  identity: SITE_IDENTITY,
  guarantee: OFFICIAL_GUARANTEE_TEXT,
  sitemapUrl: `${SITE_URL}/sitemap.xml`,
  robotsUrl: `${SITE_URL}/robots.txt`,
} as const;
