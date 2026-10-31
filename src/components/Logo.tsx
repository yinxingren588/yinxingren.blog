import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * 品牌 Logo 组件 (以官方纯白与科技蓝为核心的 SaaS 视觉)
 * 官方标识与唯一官方正版门户
 */
export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1 transition-all hover:opacity-95 ${className}`}
      aria-label={`${BRAND_NAME}官网 · 官方服务平台`}
    >
      {/* 品牌 Logo 图标：纯白底座与精致浅色描边 */}
      <div className="relative w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:shadow-md transition-all overflow-hidden p-0.5">
        <img
          src="/images/logo.png"
          alt={`${BRAND_NAME}官方标识`}
          className="w-full h-full object-contain"
          width={36}
          height={36}
          loading="eager"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-base font-bold tracking-tight text-slate-900 flex items-center gap-1.5 leading-none">
          {BRAND_NAME}
          <span className="text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
            {BRAND_NAME_EN}
          </span>
        </span>
        {showSubtitle && (
          <span className="text-[11px] text-slate-500 mt-1 leading-none font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            官方正版直营 · SLA 99.9%
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
