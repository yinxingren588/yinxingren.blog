import React, { useState } from 'react';
import {
  OFFICIAL_PLANS,
  SELECTION_DIMENSIONS,
  PRICING_VERIFICATION,
  PricingPlan,
} from '@/data/pricingData';
import { OFFICIAL_GUARANTEE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Coins,
  Filter,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';

interface PricingGuideSectionProps {
  isPage?: boolean;
}

type CategoryFilter = 'all' | 'subscription' | 'onetime';

/**
 * 官方 9 大套餐与选型指南核心组件 (浅紫色紫罗兰主题)
 * 包含官方全系 9 大配套：
 * - 周期订阅 (6款): 星耀风暴、白银纪元、黄金序列、铂金至臻、钻石穹顶、王者定制版
 * - 一次性买断 (3款): 一次性小流量 (160GB)、一次性标准流量包 (420GB)、一次性精英流量包 (1TB)
 */
export const PricingGuideSection: React.FC<PricingGuideSectionProps> = ({ isPage = false }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [selectedPlanId, setSelectedPlanId] = useState<string>(OFFICIAL_PLANS[0].id);
  const [selectedCycle, setSelectedCycle] = useState<string>('年付');

  const filteredPlans = OFFICIAL_PLANS.filter((plan) => {
    if (activeCategory === 'all') return true;
    return plan.category === activeCategory;
  });

  const activePlan: PricingPlan =
    OFFICIAL_PLANS.find((p) => p.id === selectedPlanId) || OFFICIAL_PLANS[0];

  const handlePlanSelect = (plan: PricingPlan) => {
    setSelectedPlanId(plan.id);
    if (!plan.billingCycles.includes(selectedCycle)) {
      setSelectedCycle(plan.billingCycles[0]);
    }
  };

  const handleCategoryChange = (cat: CategoryFilter) => {
    setActiveCategory(cat);
    const firstInCat = OFFICIAL_PLANS.find((p) => cat === 'all' || p.category === cat);
    if (firstInCat) {
      handlePlanSelect(firstInCat);
    }
  };

  return (
    <section
      aria-labelledby="pricing-section-heading"
      className={`${isPage ? 'py-4 sm:py-8' : 'py-16 md:py-24 border-b border-[#E9D5FF] bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isPage && (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
              <span>隐形人官网全系 9 大正式配套 · 真实透明</span>
            </div>
            <h2
              id="pricing-section-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B]"
            >
              隐形人机场 9 大精选订阅与买断方案规格
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              全系配备专线网络与统一 1x 计费倍率。涵盖 6 款按月/按年循环重置的周期方案，以及 3 款永不过期的一次性独立买断流量包，灵活满足隐形人官网多元化出海需求。
            </p>
          </div>
        )}

        {/* 分类筛选与计数器 */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2 border-b border-[#E9D5FF]">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#9333EA]" />
            <span className="text-xs font-bold text-[#1E1B4B]">方案分类筛选：</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => handleCategoryChange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#1E1B4B] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-[#E9D5FF] hover:bg-[#FAF5FF]'
              }`}
            >
              全部配套 (9)
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('subscription')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'subscription'
                  ? 'bg-[#1E1B4B] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-[#E9D5FF] hover:bg-[#FAF5FF]'
              }`}
            >
              周期订阅 (6)
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange('onetime')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeCategory === 'onetime'
                  ? 'bg-[#1E1B4B] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-[#E9D5FF] hover:bg-[#FAF5FF]'
              }`}
            >
              一次性买断 · 永不过期 (3)
            </button>
          </div>
        </div>

        {/* 顶部套餐快速切换 Tab 栏 (支持横向滑动) */}
        <div className="flex items-center justify-start gap-2 sm:gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filteredPlans.map((plan) => {
            const isSelected = plan.id === activePlan.id;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => handlePlanSelect(plan)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-[#1E1B4B] text-white border-[#1E1B4B] shadow-md scale-[1.02]'
                    : 'bg-white hover:bg-[#FAF5FF] text-slate-700 hover:text-[#7E22CE] border-[#E9D5FF]'
                }`}
              >
                <span>{plan.emoji}</span>
                <span className="whitespace-nowrap">{plan.name.replace('隐形人 ', '')}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[#F3E8FF] text-[#7E22CE]'
                  }`}
                >
                  ¥{plan.price}
                </span>
              </button>
            );
          })}
        </div>

        {/* 核心双栏复刻展示卡（1:1 复刻官方后台视觉规范） */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#E9D5FF] bg-white shadow-[0_15px_40px_-15px_rgba(147,51,234,0.12)] overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#E9D5FF]">
            {/* 左栏：套餐核心 Offer 与操作 (7列) */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white text-left">
              <div>
                {/* 顶部标签与图标 */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                        activePlan.badge === '主推套餐'
                          ? 'bg-[#1E1B4B] text-white'
                          : 'bg-[#EDE9FE] text-[#6D28D9] border border-[#DDD6FE]'
                      }`}
                    >
                      {activePlan.badge}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold border border-slate-200">
                      {activePlan.categoryName}
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF5FF] border border-[#E9D5FF] flex items-center justify-center text-[#7E22CE]">
                    <Coins className="w-4 h-4" />
                  </div>
                </div>

                {/* 套餐主标题与 emoji */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B4B] flex items-center gap-2">
                  <span>{activePlan.name}</span>
                  <span className="text-xl">{activePlan.emoji}</span>
                </h3>

                {/* 适用人群与副标题 */}
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed font-medium">
                  {activePlan.subtitle}
                </p>

                {/* Current Offer 价格看板框 */}
                <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FAF5FF] to-white border border-[#E9D5FF] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      CURRENT OFFER
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#1E1B4B] tracking-tight mt-0.5">
                      ¥{activePlan.price}
                      <span className="text-sm font-normal text-slate-500 ml-1.5">
                        {activePlan.period}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                      AVAILABLE
                    </span>
                    <span className="text-xs font-bold text-[#1E1B4B] mt-1 block">
                      {activePlan.availableCycles}
                    </span>
                  </div>
                </div>

                {/* 三项核心参数指标卡 */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-6">
                  {/* 流量额度 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF]/80 text-left">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#9333EA]" />
                      <span>{activePlan.trafficLabel || '月流量'}</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-[#1E1B4B] mt-1">
                      {activePlan.monthlyTraffic}
                    </div>
                  </div>

                  {/* 速率 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF]/80 text-left">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <Zap className="w-3.5 h-3.5 text-[#9333EA]" />
                      <span>速率</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-[#1E1B4B] mt-1">
                      {activePlan.speed}
                    </div>
                  </div>

                  {/* 设备数 */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF]/80 text-left">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <Smartphone className="w-3.5 h-3.5 text-[#9333EA]" />
                      <span>设备数</span>
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-[#1E1B4B] mt-1">
                      {activePlan.devices}
                    </div>
                  </div>
                </div>

                {/* 计费周期切换选择 */}
                <div className="flex items-center gap-2 mb-6">
                  {activePlan.billingCycles.map((cycle) => (
                    <button
                      key={cycle}
                      type="button"
                      onClick={() => setSelectedCycle(cycle)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        selectedCycle === cycle
                          ? 'bg-[#F3E8FF] text-[#7E22CE] border border-[#C084FC] font-semibold'
                          : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cycle}
                    </button>
                  ))}
                </div>
              </div>

              {/* 立即订阅 CTA 按钮 (OfficialLink 输出 AFF) */}
              <div className="pt-2">
                <OfficialLink className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#1E1B4B] via-[#312E81] to-[#4338CA] hover:from-[#312E81] hover:to-[#4F46E5] shadow-md shadow-indigo-950/15 hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#9333EA]">
                  <span>{PRICING_VERIFICATION.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </OfficialLink>
              </div>
            </div>

            {/* 右栏：套餐详情条款与技术保障 (5列) */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-[#FAF5FF]/70 text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#E9D5FF]">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                  <h4 className="text-sm font-bold text-[#1E1B4B]">套餐详情</h4>
                </div>

                <div className="space-y-3.5 text-xs text-slate-700 leading-relaxed font-normal">
                  {activePlan.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <span className="text-sm flex-shrink-0 mt-0.5">
                        {item.icon || '🔹'}
                      </span>
                      <span className="text-slate-700 leading-relaxed font-medium">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右下角合规提示 */}
              <div className="mt-8 pt-4 border-t border-[#E9D5FF] flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#9333EA]" />
                  <span>{activePlan.category === 'onetime' ? '买断永不过期' : '全专线低延迟'}</span>
                </span>
                <span>统一 1x 计费</span>
              </div>
            </div>
          </div>
        </div>

        {/* 9 大套餐全景横向矩阵看板 (全览对比) */}
        <div className="mb-14">
          <div className="text-left mb-5">
            <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#9333EA]" />
              <span>全系 9 大配套规格矩阵全览</span>
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              点击下方卡片可直接切换上方详情；包含 6 款按月/按年循环订阅方案与 3 款一次性买断永久包。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {OFFICIAL_PLANS.map((plan) => {
              const isSelected = plan.id === activePlan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan)}
                  className={`cursor-pointer rounded-2xl p-5 border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#FAF5FF] border-[#9333EA] ring-2 ring-[#9333EA]/20 shadow-md'
                      : 'bg-white border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{plan.emoji}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                          {plan.categoryName}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          plan.badge === '主推套餐'
                            ? 'bg-[#1E1B4B] text-white'
                            : 'bg-[#EDE9FE] text-[#6D28D9]'
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-[#1E1B4B] leading-snug">
                      {plan.name}
                    </h4>

                    <div className="mt-3 mb-2 flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-[#1E1B4B]">
                        ¥{plan.price}
                      </span>
                      <span className="text-xs text-slate-500">
                        {plan.period}
                      </span>
                    </div>

                    <div className="inline-block text-[11px] font-mono px-2 py-0.5 rounded bg-[#F3E8FF] text-[#7E22CE] font-semibold mb-3">
                      {plan.trafficLabel || '月流量'} {plan.monthlyTraffic}
                    </div>

                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {plan.highlightTag}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E9D5FF]">
                    <span
                      className={`text-xs font-semibold flex items-center justify-between ${
                        isSelected ? 'text-[#9333EA]' : 'text-slate-600'
                      }`}
                    >
                      <span>{isSelected ? '当前选择中' : '点击查看详情'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 核心合规告示框 */}
        <div className="mb-10 p-5 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-left">
              <h3 className="text-sm font-bold text-[#1E1B4B]">
                实时价格核验与透明度声明
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#7E22CE]">
                “{PRICING_VERIFICATION.complianceNotice}”
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                官方保障：隐形人官方直营 9 大正式配套规格（包含 6 款周期循环订阅方案与 3 款永不过期买断流量包），全系配备优质专线与 1x 真实计费倍率。最终计费货币与优惠券抵扣以官方控制台结账页面实时显示为准。
              </p>
            </div>
          </div>
        </div>

        {/* 4 大选型考量维度网格（客观理性选型指南） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {SELECTION_DIMENSIONS.map((dim) => (
            <div
              key={dim.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card text-left"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E9D5FF] mb-5">
                  <h3 className="text-base font-bold text-[#1E1B4B]">
                    {dim.dimensionName}
                  </h3>
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-white border border-[#E9D5FF] text-[#7E22CE] font-semibold">
                    {dim.dimensionTag}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {dim.summary}
                </p>

                <div className="space-y-4">
                  {dim.considerations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#9333EA] mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-[#1E1B4B]">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-600 mt-0.5 leading-normal">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E9D5FF] flex items-center justify-between text-[11px] text-slate-500">
                <span>选型维度已对齐</span>
                <span className="text-slate-500">按需权衡</span>
              </div>
            </div>
          ))}
        </div>

        {/* 底部官方服务承诺 */}
        <div className="text-center max-w-xl mx-auto pt-2">
          <p className="text-xs text-slate-500 leading-relaxed">
            {OFFICIAL_GUARANTEE_TEXT}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingGuideSection;
