import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import PricingGuideSection from '@/sections/PricingGuideSection';
import { ChevronRight, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';

/**
 * /pricing/ 独立页面组件
 * 
 * 规则要求：
 * 1. 独立 H1：隐形人套餐选型与订阅方案指南
 * 2. 独立简介：重点回答本品牌套餐选择相关的搜索需求，不复制首页介绍
 * 3. 规范面包屑：首页 / 套餐选型指南
 * 4. 复用同一个方案选择指南组件与统一数据源
 * 5. 统一设置 1 个主要 AFF 入口（由 PricingGuideSection 输出）
 */
export const PricingPage: React.FC = () => {
  useEffect(() => {
    // 确保为正常收录
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#9333EA] transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-[#1E1B4B] font-semibold" aria-current="page">
              套餐选型指南
            </li>
          </ol>
        </nav>

        {/* 独立 H1 与专属简介头屏 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>订阅指引 · 决策参考</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME}机场套餐选型与官网订阅方案指南
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            旨在解答您关于隐形人机场（{BRAND_NAME_EN}）官方公布的 9 大正式配套规格（含星耀风暴、白银纪元、黄金序列、铂金至臻、钻石穹顶、王者定制版等 6 款周期方案，以及 3 款永不过期的一次性买断流量包）、设备并发许可、流量重置机制以及隐形人官网计费周期的决策疑问。全方位协助您结合实际跨境工作场景理性选择。
          </p>
        </div>

        {/* 复用统一方案指南核心组件（共享数据源） */}
        <PricingGuideSection isPage={true} />

        {/* /pricing/ 专属深度选型避坑与问答看板 */}
        <div className="mt-16 pt-12 border-t border-[#E9D5FF] max-w-4xl mx-auto space-y-8">
          <div className="text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B] mb-2">
              套餐选型常见考量与注意事项
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              在前往合作平台完成订阅前，建议重点核对以下事项，避免不必要的资费浪费。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all shadow-card space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1E1B4B]">
                <HelpCircle className="w-4 h-4 text-[#9333EA]" />
                <span>如何确认当前可用的最新价格？</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                由于国际汇率波动与合作平台运营活动的动态调整，所有套餐的实时价格、活动赠送时长均以合作平台收银台实时结算为准。点击本站上方“前往合作平台查看当前套餐”即可同步获取最新账单规则。
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all shadow-card space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1E1B4B]">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>流量使用与超额规则提示</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                请务必在合作平台用户中心查看流量重置日期（自然月首日或账单周期首日）。流量耗尽后通常会暂停连接或降速，建议按需配置客户端应用分流，非跨境流量直连本地网络以节约配额。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
