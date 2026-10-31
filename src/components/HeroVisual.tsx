import React from 'react';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import { ShieldCheck, Cpu, Radio, Zap } from 'lucide-react';

/**
 * HeroVisual: 首页右侧独立品牌视觉组件 (深色极客科技感暗黑紫主题)
 * 
 * 核心升级理念：
 * - 视觉母题：全球专线网络中枢 HUD 终端、暗黑流光、晶体雷达扫描、多维态势监视大屏。
 * - 展现官方正版平台技术底蕴与 IEPL 骨干网实力。
 */
export const HeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto overflow-hidden rounded-2xl border border-purple-500/30 bg-[#0F121C]/90 p-5 sm:p-7 shadow-[0_0_50px_rgba(147,51,234,0.18)] select-none backdrop-blur-xl"
      aria-label={`${BRAND_NAME} 品牌官方数字中枢展示`}
    >
      {/* 极客网格与环境微光背景 */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none cyber-grid"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* 顶部 Terminal 终端状态栏 */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-purple-500/20 text-[11px] font-mono tracking-wider">
        <div className="flex items-center gap-2 text-purple-300">
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span className="font-semibold">{BRAND_NAME_EN}-OS // CORE v4.2</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-400 font-sans text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>IEPL ONLINE (1.0x)</span>
        </div>
      </div>

      {/* 核心品牌视觉区：官方正版 Logo 与雷达环绕流光 */}
      <div className="relative z-10 my-6 sm:my-8 flex flex-col items-center justify-center">
        {/* 背景动态雷达同心圆 */}
        <div
          className="absolute w-64 h-64 rounded-full border border-purple-500/20 animate-spin-slow pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute w-48 h-48 rounded-full border border-dashed border-indigo-500/30 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-600/30 to-indigo-600/20 blur-2xl pointer-events-none"
          aria-hidden="true"
        />

        {/* 官方 Logo 晶体浮岛卡片 */}
        <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#181E31]/90 to-[#0F121C]/90 border border-purple-400/40 shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-transform duration-300 hover:scale-[1.03]">
          <img
            src="/images/logo-clean.png"
            alt={`${BRAND_NAME} 官方品牌标识`}
            className="w-full max-w-[240px] sm:max-w-[270px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] select-none"
            width={420}
            height={440}
            loading="eager"
          />

          {/* 浮动官方防伪徽章 */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center gap-1.5 whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-purple-300" />
            <span className="text-[10px] font-mono font-bold text-white tracking-wide">
              OFFICIAL VERIFIED
            </span>
          </div>
        </div>
      </div>

      {/* 实时专线网络遥测参数 (4格大屏指标) */}
      <div className="relative z-10 pt-4 border-t border-purple-500/20 grid grid-cols-2 gap-3 text-left">
        <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/15">
          <div className="text-[10px] font-mono text-purple-300/70 flex items-center gap-1">
            <Radio className="w-3 h-3 text-purple-400" />
            骨干专线链路
          </div>
          <div className="text-xs font-semibold text-slate-100 mt-1">
            IEPL 内网高速专线
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/15">
          <div className="text-[10px] font-mono text-purple-300/70 flex items-center gap-1">
            <Zap className="w-3 h-3 text-emerald-400" />
            计费扣量倍率
          </div>
          <div className="text-xs font-semibold text-emerald-300 mt-1">
            1.0x 真实无虚标保证
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
