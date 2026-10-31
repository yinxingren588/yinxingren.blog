import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { updateClientSEO } from '@/config/seo';
import { updateClientSchema } from '@/config/schema';
import { CRISP_WEBSITE_ID } from '@/config/site';

/**
 * MainLayout 基础布局组件 (以官方 Logo 纯白基底与科技蓝为核心的现代 SaaS 风格)
 * 结构：Navbar -> main -> Outlet -> Footer
 * 全局采用纯净白与浅灰微质感背景，彻底告别紫色暗色系
 */
export const MainLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    updateClientSEO(location.pathname);
    updateClientSchema(location.pathname);
  }, [location.pathname]);

  // Crisp 在线客服 SDK 初始化 (当配置了 CRISP_WEBSITE_ID 时生效)
  useEffect(() => {
    if (typeof window !== 'undefined' && CRISP_WEBSITE_ID) {
      if (!(window as any).$crisp) {
        (window as any).$crisp = [];
        (window as any).CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;
        const s = document.createElement('script');
        s.src = 'https://client.crisp.chat/l.js';
        s.async = true;
        document.head.appendChild(s);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-blue-600 selection:text-white relative overflow-hidden">
      {/* 极简自然的环境柔和微光 (呼应 Logo 围巾天蓝色系) */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-gradient-to-b from-blue-50/80 via-sky-50/40 to-transparent blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-slate-100/60 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 顶部主导航栏 */}
      <Navbar />

      {/* 唯一主内容区域容器，Outlet 放在 main 内部 */}
      <main id="main-content" className="flex-1 focus:outline-none relative z-10">
        <Outlet />
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  );
};

export default MainLayout;
