import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AdvantagesPage from './pages/AdvantagesPage';
import LocationsPage from './pages/LocationsPage';
import PricingPage from './pages/PricingPage';
import HelpPage from './pages/HelpPage';
import HelpArticlePage from './pages/HelpArticlePage';
import DownloadsPage from './pages/DownloadsPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * 服务器端/预渲染专属入口
 * 接收请求 URL 并通过 MemoryRouter 执行完整的 React 组件树静态渲染
 */
export function render(url: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="services" element={<ServicesPage />} />
          <Route path="services/" element={<ServicesPage />} />

          <Route path="advantages" element={<AdvantagesPage />} />
          <Route path="advantages/" element={<AdvantagesPage />} />

          <Route path="locations" element={<LocationsPage />} />
          <Route path="locations/" element={<LocationsPage />} />

          <Route path="pricing" element={<PricingPage />} />
          <Route path="pricing/" element={<PricingPage />} />

          <Route path="help" element={<HelpPage />} />
          <Route path="help/" element={<HelpPage />} />
          <Route path="help/:id" element={<HelpArticlePage />} />
          <Route path="help/:id/" element={<HelpArticlePage />} />

          <Route path="downloads" element={<DownloadsPage />} />
          <Route path="downloads/" element={<DownloadsPage />} />

          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/" element={<ContactPage />} />

          <Route path="terms" element={<TermsPage />} />
          <Route path="terms/" element={<TermsPage />} />

          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="privacy/" element={<PrivacyPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export { BRAND_NAME, SITE_URL } from './config/site';
export { SEO_DATA, SHARE_IMAGE_URL } from './config/seo';
export { generateSchemaGraph } from './config/schema';
export { generateSitemapXml, generateRobotsTxt } from './utils/seoGenerators';
export { REGISTERED_ROUTES, getIndexableRoutes } from './config/routes';
