import { SITE_URL, BRAND_NAME } from './site';
import { SEO_DATA } from './seo';
import { FAQ_DATA } from '../data/faqData';
import { REGISTERED_ROUTES } from './routes';

/**
 * 结构化数据 (JSON-LD) 生成器
 * 
 * 严格遵循规范约束：
 * 1. 首页输出：WebSite + WebPage + FAQPage（与可见 8 项 FAQ 一致）
 * 2. 内页输出：WebPage 或 CollectionPage + 与可见面包屑一致的 BreadcrumbList
 * 3. 首页不输出无意义 BreadcrumbList
 * 4. 严禁虚构：Organization 主体、SoftwareApplication、SearchAction、AggregateRating、Review、Offer、sameAs
 * 5. 严禁包含：AFF、localhost、Markdown 链接、不存在的路由
 * 6. 所有 URL 与 @id 统一由 SITE_URL 与实际路径生成
 */
export function generateSchemaGraph(pathname: string): object | null {
  const cleanPath = pathname === '/' ? '/' : (pathname.endsWith('/') ? pathname : `${pathname}/`);
  const route = REGISTERED_ROUTES.find((r) => r.path === cleanPath);

  // 404 或未登记页面严格不输出 Schema
  if (!route || !route.indexable || route.id === 'not-found') {
    return null;
  }

  const seo = SEO_DATA[cleanPath];
  const pageTitle = seo?.title || `${BRAND_NAME}`;
  const pageDescription = seo?.description || '';

  // 首页：WebSite + WebPage + FAQPage
  if (cleanPath === '/') {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: `${BRAND_NAME}官网｜${BRAND_NAME}机场`,
          alternateName: [`${BRAND_NAME}机场`, `${BRAND_NAME}官网`, BRAND_NAME, `${BRAND_NAME}机场官网`, 'Invisible'],
          description: pageDescription,
          inLanguage: 'zh-CN',
        },
        {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: pageTitle,
          description: pageDescription,
          isPartOf: {
            '@id': `${SITE_URL}/#website`,
          },
          inLanguage: 'zh-CN',
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}/#faq`,
          isPartOf: {
            '@id': `${SITE_URL}/#webpage`,
          },
          mainEntity: FAQ_DATA.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };
  }

  // 业务内页：WebPage 或 CollectionPage + BreadcrumbList
  const graph: object[] = [
    {
      '@type': route.schemaType,
      '@id': `${route.canonical}#webpage`,
      url: route.canonical,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      inLanguage: 'zh-CN',
    },
  ];

  // 内页与可见面包屑完全一致的 BreadcrumbList
  if (route.breadcrumbTitle) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${route.canonical}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '首页',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: route.breadcrumbTitle,
          item: route.canonical,
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * 客户端结构化数据动态更新与去重管理
 * 使用稳定 ID "schema-org-graph" 保证客户端切换路由时更新现有标签，绝不重复追加
 */
export function updateClientSchema(pathname: string): void {
  if (typeof document === 'undefined') return;

  const scriptId = 'schema-org-graph';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
  const schema = generateSchemaGraph(pathname);

  // 若无有效 Schema（如 404 页面），清理可能存在的历史标签
  if (!schema) {
    if (scriptEl && scriptEl.parentNode) {
      scriptEl.parentNode.removeChild(scriptEl);
    }
    return;
  }

  // 若不存在则创建唯一样本
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = scriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  // 更新内容，不追加新标签
  scriptEl.textContent = JSON.stringify(schema);
}
