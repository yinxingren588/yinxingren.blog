import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '@/config/site';
import {
  AlertTriangle,
  Home,
  Layers,
  HelpCircle,
  Compass,
} from 'lucide-react';

/**
 * NotFoundPage (404 页面未找到)
 * 
 * 规范要求：
 * 1. 使用 React Router 通配符承接
 * 2. 绝不执行倒计时强制自动跳转，给予用户完全控制权
 * 3. 明确提供返回首页、服务介绍、帮助中心三个站内导航链接
 * 4. 整页实际渲染结果中 AFF 数量严格为 0（导航栏与页脚已联动隐藏 AFF）
 * 5. 独立错误页标题与清晰的 404 状态说明
 */
export const NotFoundPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `404 页面未找到 - ${BRAND_NAME}`;
    // 动态添加 noindex，确保 404 状态页不被搜索引擎收录
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
    <div className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 错误徽章 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs text-amber-800 font-mono mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
          <span>HTTP 404 NOT FOUND</span>
        </div>

        {/* 独立 H1 标题 */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#1E1B4B] mb-4">
          404 页面未找到
        </h1>

        {/* 详细且友好的路径未找到说明 */}
        <p className="text-base text-slate-600 max-w-xl mx-auto mb-4 leading-relaxed">
          很抱歉，您尝试访问的路径{' '}
          <code className="px-2 py-0.5 rounded bg-white border border-[#E9D5FF] font-mono text-xs text-[#9333EA] font-semibold break-all">
            {location.pathname}
          </code>{' '}
          不存在、已被移除或拼写有误。
        </p>

        <p className="text-xs text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
          本站不会自动对您的页面进行重定向。您可以检查浏览器地址栏中的网址是否准确，或通过下方推荐的站内入口快速回到主要页面。
        </p>

        {/* 核心站内导航入口：首页、服务介绍、帮助中心（0 AFF） */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto mb-12">
          <Link
            to="/"
            className="p-4 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col items-center text-center group shadow-subtle"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] group-hover:scale-105 transition-transform mb-2">
              <Home className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E1B4B] group-hover:text-[#7E22CE]">
              返回网站首页
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5">
              浏览概览与最新资讯
            </span>
          </Link>

          <Link
            to="/services/"
            className="p-4 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col items-center text-center group shadow-subtle"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] group-hover:scale-105 transition-transform mb-2">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E1B4B] group-hover:text-[#7E22CE]">
              服务介绍方案
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5">
              查阅传输特性与架构
            </span>
          </Link>

          <Link
            to="/help/"
            className="p-4 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col items-center text-center group shadow-subtle"
          >
            <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] group-hover:scale-105 transition-transform mb-2">
              <HelpCircle className="w-5 h-5" />
            </div>
            <span className="text-xs font-bold text-[#1E1B4B] group-hover:text-[#7E22CE]">
              帮助中心手册
            </span>
            <span className="text-[10px] text-slate-500 mt-0.5">
              检索常见故障与教程
            </span>
          </Link>
        </div>

        {/* 合规说明提示 */}
        <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-500">
          <Compass className="w-3.5 h-3.5 text-[#9333EA]" />
          <span>合规纯净错误页面 · 全页不含任何商业推广外链</span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
