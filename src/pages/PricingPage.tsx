import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import PricingGuideSection from '@/sections/PricingGuideSection';
import { ChevronRight, HelpCircle, ShieldAlert, Sparkles } from 'lucide-react';

/**
 * /pricing/ 官方套餐与在线订阅中心页面 (深色极客科技感暗黑紫主题)
 */
export const PricingPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="py-8 sm:py-16 bg-white min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-blue-600 font-semibold" aria-current="page">
              官方套餐中心
            </li>
          </ol>
        </nav>

        {/* 独立 H1 与专属简介头屏 */}
        <div className="max-w-3xl mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>OFFICIAL PRICING PORTAL · 官方专线直营</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {BRAND_NAME} 官方 9 大精选配套与订阅中心
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            全面展示隐形人（{BRAND_NAME_EN}）官方公布的 9 大正式配套规格（含星耀风暴、白银纪元、黄金序列、铂金至臻、钻石穹顶、王者定制版等 6 款周期方案，以及 3 款永不过期的一次性买断流量包）。全系专线统一 1.0x 真实倍率，官方在线安全激活。
          </p>
        </div>

        {/* 复用统一方案指南核心组件（带周期切换器） */}
        <PricingGuideSection isPage={true} />

        {/* /pricing/ 专属深度选型与问答看板 */}
        <div className="mt-16 pt-12 border-t border-slate-200 max-w-4xl mx-auto space-y-8 text-left">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              官方套餐选型建议与注意事项
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              在进入官方控制台完成订阅激活前，建议重点了解以下事项，以便选定最适合您的规格。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <HelpCircle className="w-4 h-4 text-blue-600" />
                <span>如何确认当前可用的最新优惠？</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                官方公布的 9 大正式配套全线配备 IEPL 专线网络与 1.0x 真实倍率。所有套餐的实时价格、限时折扣均以官方控制台结账页面实时结算为准，官方直营支付与售后安全有保障。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>流量使用与重置周期说明</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                您可在官方控制台仪表盘随时查看当前流量消耗与重置周期。建议在客户端开启规则分流，境内本地流量走直连以充分节约专线配额。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
