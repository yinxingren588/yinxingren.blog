import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * 品牌 Logo 组件 (深色极客科技感暗黑紫主题)
 * 官方标识与唯一官方正版门户
 */
export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1 transition-all hover:opacity-95 ${className}`}
      aria-label={`${BRAND_NAME}官网 · 官方服务平台`}
    >
      {/* 品牌 Logo 图标：深色暗黑流光底座 */}
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-purple-900/60 to-slate-900 border border-purple-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.25)] group-hover:border-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.45)] transition-all overflow-hidden p-0.5">
        <img
          src="/images/logo-mascot.png"
          alt={`${BRAND_NAME}官方标识`}
          className="w-full h-full object-contain drop-shadow"
          width={36}
          height={36}
          loading="eager"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5 leading-none">
          {BRAND_NAME}
          <span className="text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300 font-semibold">
            {BRAND_NAME_EN}
          </span>
        </span>
        {showSubtitle && (
          <span className="text-[11px] text-purple-300/80 mt-1 leading-none font-medium flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            官方正版直营 · SLA 99.9%
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
