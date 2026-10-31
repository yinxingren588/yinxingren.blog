import { SITE_URL } from '../config/site';
import { REGISTERED_ROUTES, getIndexableRoutes, RouteItem } from '../config/routes';

/**
 * 自动生成符合标准的 sitemap.xml
 * 
 * 规则要求：
 * 1. 不得写死数量为 10，必须从统一路由登记动态提取允许索引的页面
 * 2. 排除 404、noindex、AFF、带参数/Hash、测试域名及空占位页
 * 3. 真实输出 lastmod：仅对有明确修订/核验记录的页面输出，无时间记录的严格省略，不编造日期
 */
export function generateSitemapXml(routes: RouteItem[] = REGISTERED_ROUTES): string {
  const indexablePages = getIndexableRoutes(routes);

  const urlElements = indexablePages
    .map((r) => {
      const locTag = `<loc>${r.canonical}</loc>`;
      const lastmodTag = r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : '';
      return `  <url>\n    ${locTag}${lastmodTag}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>
`;
}

/**
 * 自动生成规范的 robots.txt
 * 
 * 规则要求：
 * 1. 域名严格由 SITE_URL 生成，绝不残留示例域名
 * 2. Allow: /，不得通过 robots.txt 屏蔽需要读取 noindex 的 404 页面
 * 3. 指向正式 Sitemap
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}
