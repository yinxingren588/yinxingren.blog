import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import ServicesPage from '@/pages/ServicesPage';
import AdvantagesPage from '@/pages/AdvantagesPage';
import LocationsPage from '@/pages/LocationsPage';
import PricingPage from '@/pages/PricingPage';
import HelpPage from '@/pages/HelpPage';
import DownloadsPage from '@/pages/DownloadsPage';
import ContactPage from '@/pages/ContactPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import NotFoundPage from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* 首页路由 */}
          <Route index element={<Home />} />

          {/* 业务核心内页 */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/" element={<ServicesPage />} />

          <Route path="advantages" element={<AdvantagesPage />} />
          <Route path="advantages/" element={<AdvantagesPage />} />

          <Route path="locations" element={<LocationsPage />} />
          <Route path="locations/" element={<LocationsPage />} />

          {/* 套餐选型独立页面 */}
          <Route path="pricing" element={<PricingPage />} />
          <Route path="pricing/" element={<PricingPage />} />

          {/* 帮助、下载与支持页面 */}
          <Route path="help" element={<HelpPage />} />
          <Route path="help/" element={<HelpPage />} />

          <Route path="downloads" element={<DownloadsPage />} />
          <Route path="downloads/" element={<DownloadsPage />} />

          <Route path="contact" element={<ContactPage />} />
          <Route path="contact/" element={<ContactPage />} />

          {/* 法律政策与合规页面（第9步正式实现） */}
          <Route path="terms" element={<TermsPage />} />
          <Route path="terms/" element={<TermsPage />} />

          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="privacy/" element={<PrivacyPage />} />

          {/* 404 通配符兜底路由 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
