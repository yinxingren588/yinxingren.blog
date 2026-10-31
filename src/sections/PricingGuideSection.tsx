import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        isPage ? 'py-4 sm:py-8' : 'py-16 sm:py-24 border-b border-slate-200 bg-white'
      } relative overflow-hidden`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>OFFICIAL PRICING MATRIX · 官方正版 9 大套餐矩阵</span>
            </div>

            <h2
              id="pricing-section-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              透明计费，全系 1.0x 真实倍率专线配套
            </h2>

            <p className="text-sm sm:text-base text-slate-600">
              隐形人官方全系列 9 大正品配套（6 款周期订阅 + 3 款永不过期买断流量包）。绝不暗改倍率扣量，流量透明可查，根据需求灵活选购。
            </p>
          </div>
        )}

        {/* 核心功能：周期切换器 Tabs (年付特惠 / 月付灵活 / 永不过期买断 / 全量对比) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-sm overflow-x-auto max-w-full">
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
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
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
                className={`relative rounded-3xl bg-white p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-300 group ${
                  isFeatured
                    ? 'border-2 border-blue-600 shadow-md shadow-blue-500/10 -translate-y-1'
                    : 'border border-slate-200 hover:border-blue-400 hover:shadow-lg shadow-sm'
                }`}
              >
                {/* 推荐高亮角标 */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 border border-blue-400 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-blue-100" />
                    <span>官方主推 · 性价比之王</span>
                  </div>
                )}

                <div>
                  {/* 标题与 Emoji */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl" role="img" aria-label="plan emoji">
                        {plan.emoji}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {plan.name}
                      </h3>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700">
                      {plan.categoryName}
                    </span>
                  </div>

                  {/* 价格大字呈现 */}
                  <div className="my-5 flex items-baseline gap-1.5">
                    <span className="text-sm font-semibold text-blue-600 font-mono">¥</span>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs font-mono text-slate-500">{plan.period}</span>
                  </div>

                  {/* 流量与计费标签 */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">{plan.trafficLabel || '可用流量'}:</span>
                      <span className="font-bold text-slate-800 font-mono">{plan.monthlyTraffic}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500">真实计费倍率:</span>
                      <span className="font-bold text-emerald-600 font-mono">1.0x 绝无虚标</span>
                    </div>
                  </div>

                  {/* 突出特性亮点 */}
                  <div className="mt-3 text-xs font-semibold text-blue-700 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{plan.highlightTag}</span>
                  </div>

                  {/* 权益细节清单 (前3条) */}
                  <div className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    {plan.details.slice(0, 3).map((d, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-relaxed">{d.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 立即订阅行动按钮 */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <OfficialLink
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all shadow-sm ${
                      isFeatured
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 border border-slate-200'
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

        {/* 首页专享完整套餐页导览 */}
        {!isPage && (
          <div className="mt-8 text-center">
            <Link
              to="/pricing/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>查看全部 9 大官方套餐规格与流量选型指南</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* 底部官方保障承诺 */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto space-y-1">
          <p className="flex items-center justify-center gap-1.5 text-slate-700 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
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
