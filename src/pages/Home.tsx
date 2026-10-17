import React, { useEffect } from 'react';
import { BRAND_NAME } from '@/config/site';
import {
  Hero,
  ServicesIntro,
  AdvantagesSection,
  WorkflowSection,
  ScenariosSection,
  PricingGuideSection,
  ScenarioCarousel,
  FAQSection,
  LocationsScopeSection,
} from '@/sections';

/**
 * 首页主页面
 * 包含依次展开的核心板块：
 * 1. Hero 区域
 * 2. 服务介绍 (ServicesIntro)
 * 3. 核心优势 (AdvantagesSection)
 * 4. 使用流程 (WorkflowSection)
 * 5. 使用场景 (ScenariosSection)
 * 6. 套餐选型指南 (PricingGuideSection)
 * 7. 场景体验走马灯 (ScenarioCarousel - 第6步新增)
 * 8. 常见问题解答 (FAQSection - 第6步新增)
 * 9. 全球线路或服务范围 (LocationsScopeSection)
 */
export const Home: React.FC = () => {
  useEffect(() => {
    document.title = `${BRAND_NAME} - 跨境网络与数字游民连接服务指引`;
  }, []);

  return (
    <div className="w-full">
      {/* 1. Hero */}
      <Hero />

      {/* 2. 服务介绍 */}
      <ServicesIntro />

      {/* 3. 核心优势 */}
      <AdvantagesSection />

      {/* 4. 使用流程 */}
      <WorkflowSection />

      {/* 5. 使用场景 */}
      <ScenariosSection />

      {/* 6. 套餐选型指南 */}
      <PricingGuideSection />

      {/* 7. 场景体验走马灯 */}
      <ScenarioCarousel />

      {/* 8. 常见问题解答 FAQ */}
      <FAQSection />

      {/* 9. 全球线路或服务范围 */}
      <LocationsScopeSection />
    </div>
  );
};

export default Home;
