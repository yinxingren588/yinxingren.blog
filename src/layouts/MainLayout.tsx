import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { updateClientSEO } from '@/config/seo';
import { updateClientSchema } from '@/config/schema';

/**
 * MainLayout 基础布局组件 (深色极客科技感暗黑紫主题)
 * 结构：Navbar -> main -> Outlet -> Footer
 * 全局暗色高科技背景网格与环境微光
 */
export const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    updateClientSEO(location.pathname);
    updateClientSchema(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#08090E] text-slate-200 selection:bg-purple-600 selection:text-white relative overflow-hidden">
      {/* 全局暗色极客环境光晕 */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-purple-900/20 via-indigo-950/10 to-transparent blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-fuchsia-950/15 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 顶部主导航栏 */}
      <Navbar />

      {/* 唯一主内容区域容器，Outlet 放在 main 内部 */}
      <main id="main-content" className="flex-1 focus:outline-none relative z-10">
        <Outlet />
      </main>

      {/* 四栏页脚 */}
      <Footer />
    </div>
  );
};

export default MainLayout;
