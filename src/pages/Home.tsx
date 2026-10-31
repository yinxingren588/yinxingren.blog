import React from 'react';
import {
  Hero,
  NetworkMonitorSection,
  ClientMatrixSection,
  PricingGuideSection,
  AdvantagesSection,
  ServicesIntro,
  WorkflowSection,
  ScenariosSection,
  ScenarioCarousel,
  FAQSection,
  LocationsScopeSection,
} from '@/sections';

/**
 * 首页主页面 (全新深色极客科技感 SaaS 大屏架构)
 * 核心流线：
 * 1. 官方旗舰 Hero 大屏 (含遥测指标横幅与 HUD 终端)
 * 2. 全球专线网络实时态势与节点延迟测速展示 (NetworkMonitorSection)
 * 3. 官方 9 大配套周期切换矩阵 (PricingGuideSection: 年付/月付/买断切换器)
 * 4. 全平台官方客户端下载矩阵与配置指南 (ClientMatrixSection)
 * 5. 核心架构优势 Bento Grid (AdvantagesSection)
 * 6. 专线技术架构解析 (ServicesIntro)
 * 7. 三步标准化接入流程 (WorkflowSection)
 * 8. 业务场景精准赋能 (ScenariosSection)
 * 9. 典型实践走马灯 (ScenarioCarousel)
 * 10. 全球专线拓扑覆盖与选型声明 (LocationsScopeSection)
 * 11. 常见问题解答与知识库 (FAQSection)
 */
export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. 官方旗舰 Hero 大屏 */}
      <Hero />

      {/* 2. 全球专线网络实时态势与节点测速 */}
      <NetworkMonitorSection />

      {/* 3. 官方 9 大配套与年付/月付/买断周期切换器 */}
      <PricingGuideSection />

      {/* 4. 全平台官方客户端下载矩阵 */}
      <ClientMatrixSection />

      {/* 5. 核心架构优势 Bento Grid */}
      <AdvantagesSection />

      {/* 6. 服务与架构深度解析 */}
      <ServicesIntro />

      {/* 7. 三步标准化接入流程 */}
      <WorkflowSection />

      {/* 8. 业务场景精准赋能 */}
      <ScenariosSection />

      {/* 9. 典型业务实践走马灯 */}
      <ScenarioCarousel />

      {/* 10. 全球专线拓扑覆盖与选型声明 */}
      <LocationsScopeSection />

      {/* 11. 常见问题解答 FAQ */}
      <FAQSection />
    </div>
  );
};

export default Home;
