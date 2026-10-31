import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Compass, Radio, Shuffle, Globe2 } from 'lucide-react';

/**
 * 板块：全球线路或服务范围 (LocationsScopeSection) - 深色极客科技感暗黑紫主题
 */
export const LocationsScopeSection: React.FC = () => {
  return (
    <section
      aria-labelledby="locations-heading"
      className="py-16 sm:py-24 border-b border-purple-500/20 bg-[#08090E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Globe2 className="w-3.5 h-3.5 text-purple-400" />
            <span>GLOBAL INFRASTRUCTURE · 全球专线拓扑覆盖</span>
          </div>
          <h2
            id="locations-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
          >
            全球专线节点拓扑与智能选型指引
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            跨境网络状态受国际海缆骨干网波动、运营商路由策略及物理距离多重因素影响。隐形人官方为您提供专线节点选型方法论与实时网络拓扑状态。
          </p>
        </div>

        {/* 核心合规告示横幅 */}
        <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-purple-950/30 border border-purple-500/30 shadow-lg max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="text-sm sm:text-base font-bold text-white">
                全球专线节点与实时可用性声明
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-purple-300">
                “具体专线节点与实时网络可用性以官方控制台及客户端清单为准。”
              </p>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                隐形人官方持续对全球核心骨干节点进行健康度监测与动态负载调度。为保障连接质量与合规性，具体可用节点与实时网络延迟请以官方控制台及客户端订阅列表为准。
              </p>
            </div>
          </div>
        </div>

        {/* 3 维度理性选型建议 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 text-left">
          <div className="p-6 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              物理距离与中转跃点
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              光电信号在光纤中传播存在物理极限。推荐优先连接地理坐标更近的可用线路（如沪港、深港、沪日），减少中转节点跳数，从而获得更平稳的基础响应。
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Radio className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              业务类型与分流策略
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              针对海外代码仓库、云服务 API 及海外社媒等多重场景，建议在客户端内配置基于域名的智能分流，避免全局代理带来的不必要资源消耗。
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
              <Shuffle className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">
              网络运营商与 BGP 智能匹配
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              电信、联通、移动对海外出口的优化各有侧重。隐形人官方采用多线 BGP 入口，自动将您的本地运营商流量引导至最优内网专线隧道。
            </p>
          </div>
        </div>

        {/* 底部跳转 */}
        <div className="text-center">
          <Link
            to="/locations/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>查看完整节点选型与状态排查指引</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LocationsScopeSection;
