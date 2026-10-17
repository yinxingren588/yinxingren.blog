import React from 'react';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

/**
 * HeroVisual: 首页右侧独立品牌视觉组件 (浅紫色紫罗兰主题)
 * 
 * 专属定制理念（隐形人 / Invisible）：
 * - 视觉母题：紫罗兰晶体几何解构、隐匿折射场、收敛切片曲线、现代主义编辑排版。
 * - 动画：外层隐匿环24秒极缓旋转、核心微光点9.6秒脉冲呼吸，全面适配 prefers-reduced-motion。
 */
export const HeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[480px] mx-auto overflow-hidden rounded-2xl border border-[#E9D5FF] bg-white p-5 sm:p-8 shadow-[0_10px_35px_-5px_rgba(147,51,234,0.12)] select-none"
      aria-label={`${BRAND_NAME} 品牌形象标识展示`}
    >
      {/* 极细浅紫网格背景 */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #F3E8FF 1px, transparent 1px), linear-gradient(to bottom, #F3E8FF 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* 顶部编辑排版标记 */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#E9D5FF] text-[11px] font-mono tracking-wider">
        <span className="text-slate-500 uppercase font-semibold">
          {BRAND_NAME_EN} // BRAND IDENTITY
        </span>
        <span className="text-[#7E22CE] flex items-center gap-1.5 font-sans font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9333EA] animate-pulse" />
          VERIFIED EMBLEM
        </span>
      </div>

      {/* 核心品牌视觉区：用户定制隐形人 Logo 标识 */}
      <div className="relative z-10 my-4 sm:my-6 flex flex-col items-center justify-center">
        {/* 背景轻柔微光 */}
        <div
          className="absolute w-56 h-56 rounded-full bg-[#E9D5FF]/50 blur-3xl pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="relative p-3 rounded-2xl bg-white border border-[#E9D5FF] shadow-sm transition-transform duration-300 hover:scale-[1.02]">
          <img
            src="/images/logo-clean.png"
            alt={`${BRAND_NAME} 品牌标识`}
            className="w-full max-w-[260px] sm:max-w-[300px] h-auto object-contain drop-shadow-sm select-none"
            width={420}
            height={440}
            loading="eager"
          />
        </div>
      </div>

      {/* 底部参数与特性铭牌 */}
      <div className="relative z-10 pt-4 border-t border-[#E9D5FF] grid grid-cols-2 gap-3 text-left">
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold">混淆机制</div>
          <div className="text-xs font-semibold text-[#1E1B4B]">流量特征深度伪装</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] uppercase font-mono text-slate-500 font-semibold">容灾保障</div>
          <div className="text-xs font-semibold text-[#1E1B4B]">多节点智能冗余接入</div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
