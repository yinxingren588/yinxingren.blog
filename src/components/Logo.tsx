import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

/**
 * 品牌 Logo 组件 (浅紫色紫罗兰主题)
 * 官方标识与唯一官方正版门户
 */
export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] rounded-lg p-1 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${BRAND_NAME}官网 · 官方服务平台`}
    >
      {/* 品牌 Logo 图标：用户定制隐形人形象 */}
      <div className="relative w-9 h-9 rounded-lg bg-white border border-[#E9D5FF] flex items-center justify-center shadow-subtle group-hover:border-[#C084FC] transition-colors overflow-hidden p-0.5">
        <img
          src="/images/logo-mascot.png"
          alt={`${BRAND_NAME}官方标识`}
          className="w-full h-full object-contain"
          width={36}
          height={36}
          loading="eager"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-base font-bold tracking-tight text-[#1E1B4B] flex items-center gap-1.5 leading-none">
          {BRAND_NAME}
          <span className="text-[10px] font-mono tracking-widest uppercase px-1.5 py-0.5 rounded bg-[#F3E8FF] border border-[#E9D5FF] text-[#7E22CE] font-semibold">
            {BRAND_NAME_EN}
          </span>
        </span>
        {showSubtitle && (
          <span className="text-[11px] text-[#7E22CE] mt-1 leading-none font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            官方正版平台
          </span>
        )}
      </div>
    </Link>
  );
};

export default Logo;
