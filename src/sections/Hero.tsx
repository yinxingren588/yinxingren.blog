import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, OFFICIAL_GUARANTEE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import HeroVisual from '@/components/HeroVisual';
import {
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

/**
 * 首页 Hero 分区组件 (浅紫色紫罗兰主题)
 * 官方正版旗舰站标准头屏
 */
export const Hero: React.FC = () => {
  const sellingPoints = [
    {
      id: 'stealth',
      title: '高强度协议特征混淆',
      desc: '特征深度混淆伪装，降低审查干扰与网络嗅探风险',
    },
    {
      id: 'clients',
      title: '全平台客户端生态支持',
      desc: 'Windows/macOS/iOS/Android 简易配置导入，开箱即用',
    },
    {
      id: 'routing',
      title: '专线网络智能容灾切换',
      desc: '全球高速专线互联，多节点应急备用，保障长连接持续',
    },
    {
      id: 'official-guarantee',
      title: '官方直营品质保证',
      desc: '全系专线 1x 真实计费倍率，官方专业售后与节点长期维护',
    },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-[#E9D5FF] bg-gradient-to-b from-white to-[#FAF5FF]"
    >
      {/* 优雅浅紫微光环境 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C084FC]/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 左侧文字与操作区 (7列) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 品牌定位短句 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-[#9333EA]" />
              <span>官方直营 · 隐形人全球专线网络加速中心</span>
            </div>

            {/* 页面唯一 H1：清晰官方旗舰定位 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
            >
              <span className="text-[#9333EA]">{BRAND_NAME}官网</span>
              <span className="block text-[#1E1B4B] mt-1 sm:mt-2">
                全球专线与跨境安全连接官方服务平台
              </span>
            </h1>

            {/* Hero 副标题 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {BRAND_NAME}（{BRAND_NAME_EN}）官方直营网站。专注提供企业级跨境网络加速、深层传输混淆、9大精选专线套餐与全平台客户端一键接入方案。为出海团队、跨国开发者与数字游民构建坚固、敏捷的网络底座。
            </p>

            {/* CTA 操作按钮组 */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* 主 CTA：进入官方控制台 */}
              <OfficialLink className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white font-medium text-sm sm:text-base transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50 group">
                <Sparkles className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
                <span>进入官方控制台</span>
                <ArrowRight className="w-4 h-4" />
              </OfficialLink>

              {/* 次 CTA：查看 9 大官方套餐 */}
              <Link
                to="/pricing/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#F3E8FF] text-[#1E1B4B] hover:text-[#7E22CE] font-medium text-sm sm:text-base border border-[#E9D5FF] hover:border-[#C084FC] transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#9333EA]/30"
              >
                <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                <span>官方 9 大配套对比</span>
              </Link>
            </div>

            {/* 官方正版保障承诺 */}
            <p className="text-xs text-slate-500 pt-1 leading-relaxed">
              {OFFICIAL_GUARANTEE_TEXT}
            </p>

            {/* 4 项官方核心品质卖点 */}
            <div className="pt-6 border-t border-[#E9D5FF] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sellingPoints.map((point) => (
                <div key={point.id} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9333EA] mt-0.5 flex-shrink-0" />
                  <div>
                    <h2 className="text-xs sm:text-sm font-semibold text-[#1E1B4B]">
                      {point.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-normal">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧独立品牌视觉区 (5列) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
