import React, { useState } from 'react';
import {
  OFFICIAL_PLANS,
  PricingPlan,
} from '@/data/pricingData';
import { OFFICIAL_GUARANTEE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Layers,
  Infinity as InfinityIcon,
  Crown,
} from 'lucide-react';

interface PricingGuideSectionProps {
  isPage?: boolean;
}

type BillingCycleTab = 'annual' | 'monthly' | 'onetime' | 'all';

/**
 * 官方 9 大套餐与选型指南核心组件 (深色极客科技感暗黑紫主题)
 * 升级为带有周期切换器 (年付 / 月付 / 一次性买断 / 全量对比) 的顶级 SaaS 价格矩阵
 */
export const PricingGuideSection: React.FC<PricingGuideSectionProps> = ({ isPage = false }) => {
  const [activeCycleTab, setActiveCycleTab] = useState<BillingCycleTab>('annual');

  // 根据选中的周期 Tab 智能过滤套餐
  const getFilteredPlans = (): PricingPlan[] => {
    switch (activeCycleTab) {
      case 'annual':
        // 年付特惠：主推年付方案 + 核心周期套餐
        return OFFICIAL_PLANS.filter(
          (p) => p.id === 'plan-xingyao' || p.billingCycles.includes('年付')
        ).slice(0, 4);
      case 'monthly':
        // 月付订阅：以月付为主的 5 款周期套餐
        return OFFICIAL_PLANS.filter(
          (p) => p.category === 'subscription' && p.id !== 'plan-xingyao'
        );
      case 'onetime':
        // 一次性买断：3 款永不过期流量包
        return OFFICIAL_PLANS.filter((p) => p.category === 'onetime');
      case 'all':
      default:
        return OFFICIAL_PLANS;
    }
  };

  const displayedPlans = getFilteredPlans();

  return (
    <section
      id="pricing-plans"
      aria-labelledby="pricing-section-heading"
      className={`${
        isPage ? 'py-4 sm:py-8' : 'py-16 sm:py-24 border-b border-purple-500/20 bg-[#08090E]'
      } relative overflow-hidden`}
    >
      {/* 渐变环境微光 */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-purple-900/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>OFFICIAL PRICING MATRIX · 官方正版 9 大套餐矩阵</span>
            </div>

            <h2
              id="pricing-section-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
            >
              透明计费，全系 1.0x 真实倍率专线配套
            </h2>

            <p className="text-sm sm:text-base text-slate-300">
              隐形人官方全系列 9 大正品配套（6 款周期订阅 + 3 款永不过期买断流量包）。绝不暗改倍率扣量，流量透明可查，根据需求灵活选购。
            </p>
          </div>
        )}

        {/* 核心功能：周期切换器 Tabs (年付特惠 / 月付灵活 / 永不过期买断 / 全量对比) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0F121C] border border-purple-500/25 shadow-lg overflow-x-auto max-w-full">
            {[
              { id: 'annual', label: '🔥 年付特惠 (折算约¥8/月)', icon: Crown },
              { id: 'monthly', label: '⚡ 按月订阅 (灵活尝鲜)', icon: Clock },
              { id: 'onetime', label: '💎 永不过期买断 (高端备用)', icon: InfinityIcon },
              { id: 'all', label: '🌐 全量 9 款配套对比', icon: Layers },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCycleTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCycleTab(tab.id as BillingCycleTab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-purple-950/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 套餐卡片网格 */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            displayedPlans.length >= 3 ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'
          } gap-6`}
        >
          {displayedPlans.map((plan) => {
            const isFeatured = plan.isFeatured || plan.id === 'plan-xingyao' || plan.id === 'plan-gold';

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-[#0F121C]/90 p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-300 backdrop-blur-xl group ${
                  isFeatured
                    ? 'border-2 border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.25)] hover:shadow-[0_0_45px_rgba(168,85,247,0.4)] -translate-y-1'
                    : 'border border-purple-500/20 hover:border-purple-400/50 shadow-[0_4px_25px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* 推荐高亮角标 */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 border border-purple-300/40 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-purple-200" />
                    <span>官方主推 · 性价比之王</span>
                  </div>
                )}

                <div>
                  {/* 标题与 Emoji */}
                  <div className="flex items-center justify-between pb-3 border-b border-purple-500/15">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl" role="img" aria-label="plan emoji">
                        {plan.emoji}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                        {plan.name}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-purple-300">
                      {plan.categoryName}
                    </span>
                  </div>

                  {/* 价格大字呈现 */}
                  <div className="my-5 flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-purple-400 font-mono">¥</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{plan.period}</span>
                  </div>

                  {/* 流量与计费标签 */}
                  <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-500/20 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">{plan.trafficLabel || '可用流量'}:</span>
                      <span className="font-bold text-white font-mono">{plan.monthlyTraffic}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">真实计费倍率:</span>
                      <span className="font-bold text-emerald-400 font-mono">1.0x 绝无虚标</span>
                    </div>
                  </div>

                  {/* 突出特性亮点 */}
                  <div className="mt-3 text-xs font-semibold text-purple-300/90 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                    <span>{plan.highlightTag}</span>
                  </div>

                  {/* 权益细节清单 (前3条) */}
                  <div className="mt-4 space-y-2 border-t border-purple-500/15 pt-4 text-xs text-slate-300">
                    {plan.details.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-relaxed">{d.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 立即订阅行动按钮 */}
                <div className="mt-6 pt-4 border-t border-purple-500/15">
                  <OfficialLink
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all shadow-subtle ${
                      isFeatured
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                        : 'bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 hover:text-white border border-purple-500/30'
                    }`}
                  >
                    <span>立即在官方控制台订阅</span>
                    <ArrowRight className="w-4 h-4" />
                  </OfficialLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部官方保障承诺 */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-2xl mx-auto space-y-1">
          <p className="flex items-center justify-center gap-1.5 text-purple-300 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>全节点 1.0x 真实倍率 · 绝不暗扣虚标 · 99.9% 专线可用性保证</span>
          </p>
          <p className="text-[11px] text-slate-500">
            {OFFICIAL_GUARANTEE_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingGuideSection;
