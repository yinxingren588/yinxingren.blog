import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { updateClientSEO } from '@/config/seo';
import { updateClientSchema } from '@/config/schema';

/**
 * MainLayout 基础布局组件
 * 规则要求：
 * 1. 结构包含：Navbar -> main -> Outlet -> Footer
 * 2. Outlet 放置在 main 内部，避免嵌套多个 main
 * 3. 页头与页脚在全局维护统一样式与合规逻辑
 * 4. 路由切换时调用 updateClientSEO 同步更新 TDK、Canonical 与 Open Graph
 * 5. 路由切换时调用 updateClientSchema 同步更新 JSON-LD 结构化数据并保证全局去重
 */
export const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    updateClientSEO(location.pathname);
    updateClientSchema(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5FF] text-[#334155] selection:bg-[#E9D5FF] selection:text-[#581C87]">
      {/* 顶部主导航栏 */}
      <Navbar />

      {/* 唯一主内容区域容器，Outlet 放在 main 内部 */}
      <main id="main-content" className="flex-1 focus:outline-none">
        <Outlet />
      </main>

      {/* 真实四栏页脚 */}
      <Footer />
    </div>
  );
};

export default MainLayout;
