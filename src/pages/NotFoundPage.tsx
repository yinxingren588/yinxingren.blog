import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '@/config/site';
import {
  AlertTriangle,
  Home,
  Layers,
  HelpCircle,
} from 'lucide-react';

/**
 * NotFoundPage (404 页面未找到) - 深色极客科技感暗黑紫主题
 */
export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `404 页面未找到 - ${BRAND_NAME}机场官网`;
    let metaRobots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    let created = false;
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
      created = true;
    }
    const previous = metaRobots.content;
    metaRobots.content = 'noindex, nofollow';

    return () => {
      if (created && metaRobots) {
        document.head.removeChild(metaRobots);
      } else if (metaRobots) {
        metaRobots.content = previous;
      }
    };
  }, []);

  return (
    <div className="py-20 md:py-32 bg-white min-h-screen text-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* 404 错误徽章 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs text-amber-700 font-mono">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
          <span>HTTP 404 // ROUTE NOT FOUND</span>
        </div>

        {/* 独立 H1 标题 */}
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-slate-900">
          404 <span className="text-blue-600 font-mono">NOT FOUND</span>
        </h1>

        {/* 路径说明 */}
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
          抱歉，您访问的路径{' '}
          <code className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-mono text-xs text-blue-700 font-semibold break-all">
            {location.pathname}
          </code>{' '}
          不存在、已被移除或拼写有误。请使用下方导航返回。
        </p>

        {/* 核心建议导航 */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>返回官方首页</span>
          </Link>

          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all shadow-sm"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>官方 9 大配套</span>
          </Link>

          <Link
            to="/help/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>帮助手册</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
