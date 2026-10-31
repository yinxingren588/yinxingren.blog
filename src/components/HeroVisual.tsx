import React from 'react';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import { ShieldCheck } from 'lucide-react';

/**
 * HeroVisual: 首页右侧品牌核心视觉卡片
 * 直接展示用户指定的官方正版隐形人主图，与纯白/浅灰底色完美融为一体
 */
export const HeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[460px] mx-auto select-none group"
      aria-label={`${BRAND_NAME} 官方品牌形象标识`}
    >
      {/* 极简清爽的微蓝光晕 (呼应围巾与纸飞机主色调，彻底去掉紫色) */}
      <div
        className="absolute -inset-2 bg-gradient-to-r from-blue-200/50 via-sky-200/40 to-blue-100/50 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />

      {/* 核心主图卡片：纯净白底，精致阴影，自然一体 */}
      <div className="relative rounded-3xl bg-white p-6 sm:p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200/80 flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]">
        {/* 背景微网格 */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none subtle-grid"
          aria-hidden="true"
        />

        {/* 顶部极简标记 */}
        <div className="relative z-10 w-full flex items-center justify-between pb-3 mb-2 border-b border-slate-100 text-[11px] font-mono tracking-wider">
          <span className="text-slate-500 uppercase font-semibold">
            {BRAND_NAME_EN} // OFFICIAL IDENTITY
          </span>
          <span className="text-blue-700 flex items-center gap-1.5 font-sans font-semibold text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            VERIFIED
          </span>
        </div>

        {/* 用户指定的原图直接展示 */}
        <div className="relative z-10 my-2 flex items-center justify-center">
          <img
            src="/images/hero-visual.png"
            alt={`${BRAND_NAME} 官方品牌形象`}
            className="w-full max-w-[320px] sm:max-w-[360px] h-auto object-contain select-none"
            width={512}
            height={512}
            loading="eager"
          />
        </div>

        {/* 底部官方正版认证条 */}
        <div className="relative z-10 mt-3 pt-3 border-t border-slate-100 w-full flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span className="flex items-center gap-1 font-semibold text-slate-800 font-sans">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            官方正版直营平台
          </span>
          <span className="text-emerald-600 font-bold">1.0x 真实倍率</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
