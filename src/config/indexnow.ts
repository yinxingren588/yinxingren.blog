import { SITE_URL } from './site';

/**
 * IndexNow 协议全局固定配置
 * 
 * 规范要求：
 * 1. 首次配置时生成符合 IndexNow 规范的 32 位十六进制随机 API Key；
 * 2. 后续构建严格复用同一 Key，严禁每次重新生成；
 * 3. 部署后应能通过 SITE_URL/Key值.txt 直接 HTTPS 访问返回 HTTP 200；
 * 4. 接口受理不等于已抓取、已收录或排名提升。
 */
export const INDEXNOW_KEY = 'd9452cd9711928e37afd10002997d50e';
export const INDEXNOW_KEY_FILE = `${INDEXNOW_KEY}.txt`;
export const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY_FILE}`;
export const INDEXNOW_HOST = new URL(SITE_URL).hostname; // 'yinxingren.blog'
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
export const INDEXNOW_BING_ENDPOINT = 'https://www.bing.com/indexnow';

export const INDEXNOW_CONFIG = {
  key: INDEXNOW_KEY,
  keyFile: INDEXNOW_KEY_FILE,
  keyLocation: INDEXNOW_KEY_LOCATION,
  host: INDEXNOW_HOST,
  endpoint: INDEXNOW_ENDPOINT,
  bingEndpoint: INDEXNOW_BING_ENDPOINT,
} as const;
