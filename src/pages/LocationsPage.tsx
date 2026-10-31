import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '@/config/site';
import {
  ChevronRight,
  AlertCircle,
  Compass,
  Radio,
  Shuffle,
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
} from 'lucide-react';

/**
 * /locations/ 服务线路范围与选型指引页面 (深色极客科技感暗黑紫主题)
 */
export const LocationsPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const regionalDimensions = [
    {
      title: '近距离亚太接入考量维度',
      subtitle: '优先考量物理传播延迟与轻量交互',
      characteristics: '物理距离近，光电信号往返跳数少。',
      recommendation:
        '在处理日常交互密集型任务（如远程桌面控制、频繁的小型 API 请求调试及高频网页浏览）时，推荐优先尝试本地运营商直连距离较近的可用接入点。',
      cautions: '遇晚间高峰跨国骨干出口拥堵时，建议尝试切换备用路由。',
    },
    {
      title: '跨洋欧美区域考量维度',
      subtitle: '注重代码托管与特定出海业务落地',
      characteristics: '国际骨干带宽宽裕，但物理距离较远（往返时延受物理规律限制）。',
      recommendation:
        '在涉及特定跨国企业云平台服务、开源社区服务器直连或本地化数据同步时，选择目标服务落地所在大洲的可用通道能够规避某些二次跨国转发问题。',
      cautions: '不可期望跨洋线路具备本土局域网般的超低延迟，此为物理客观规律。',
    },
    {
      title: '中继与容灾备用考量维度',
      subtitle: '针对国际网络波动构建的故障保护',
      characteristics: '多可用区动态分配，常备应急冗余通道。',
      recommendation:
        '无论主用线路多稳定，均建议在客户端收藏列表中预留 2-3 个异地备用节点。一旦遭遇海缆检修或网络波动，可快速手动切换，避免工作完全停摆。',
      cautions: '备用通道日常可作为辅助分流，降低单点拥堵几率。',
    },
  ];

  const selectionGuidelines = [
    {
      icon: Compass,
      title: '基于物理距离的初选法则',
      desc: '光在光纤中的传播速度有限，物理距离决定了时延下限。若无特定海外本地化业务需求，优先选择物理距离近的节点往往能获得最佳响应。',
    },
    {
      icon: Radio,
      title: '精细化域名按需分流策略',
      desc: '避免在客户端开启“全局代理”模式。将国内常用站点与办公软件列入直连名单，仅将跨境研发与协同域名走加密隧道，既节约配额又提升速度。',
    },
    {
      icon: Shuffle,
      title: '应对国际骨干网波动的动态换线',
      desc: '公网状态时刻处于动态调整中。在客户端遇到偶发丢包时，先查看本地 Wi-Fi 是否有丢包，再通过客户端一键刷新订阅获取最新健康节点池。',
    },
  ];

  return (
    <div className="py-8 sm:py-16 bg-[#08090E] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-400">
            <li>
              <Link to="/" className="hover:text-purple-300 transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </li>
            <li className="text-purple-300 font-semibold" aria-current="page">
              服务线路
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与线路范围导言 */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>GLOBAL TOPOLOGY · 网络分布与客观指南</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {BRAND_NAME} 服务线路范围与节点选型指引
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            跨境网络连接受光纤物理距离、国际骨干网出口质量及运营商路由策略共同制约。本页面为您提供隐形人官方专线节点选择建议与实时状态排查方法论，保障跨国工作流高效运转。
          </p>
        </div>

        {/* 核心合规警示横幅 */}
        <div className="mb-16 p-6 sm:p-7 rounded-3xl bg-purple-950/30 border border-purple-500/30 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-900/60 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-2 text-left">
              <h2 className="text-base sm:text-lg font-bold text-white">
                服务范围与实时线路核验声明
              </h2>
              <p className="text-sm font-semibold text-purple-300">
                “具体线路与节点以客户端实际显示为准。”
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                隐形人官方运维团队 7×24 小时监控全球骨干专线网络的健康度与海缆负载。我们坚决不制作虚假的静态延迟图，所有线路的在线状态、实时可用性与路由调度均以官方控制台及客户端订阅实时下发的节点清单为准。
              </p>
            </div>
          </div>
        </div>

        {/* 一、地区选择参考维度 */}
        <div className="mb-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              跨区域线路选型参考维度
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              以下地区分类仅代表通用网络选型考量维度，不代表品牌已实际提供特定线路，请在客户端中核实可用节点。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {regionalDimensions.map((dim, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-purple-500/15">
                    <Layers className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono text-purple-300 font-semibold uppercase tracking-wider">
                      维度 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {dim.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {dim.subtitle}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/15 space-y-1">
                    <span className="text-[11px] font-semibold text-purple-300">
                      传输特性：
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {dim.characteristics}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-purple-300">
                      适用建议：
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {dim.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-purple-500/15 text-[11px] text-purple-300/80 leading-relaxed font-mono">
                  提示：{dim.cautions}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 二、节点选择与避坑三大法则 */}
        <div className="mb-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              实用节点选择与排错法则
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              如何建立健康的连接使用习惯，避免因盲目测速而造成频繁切换连接。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectionGuidelines.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 三、常见线路疑问简答 */}
        <div className="p-8 rounded-3xl bg-[#0F121C]/90 border border-purple-500/25 mb-16 space-y-4">
          <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold font-mono">
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span>常见线路疑惑</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            为什么客户端测速显示的延迟与实际使用感受不一致？
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            许多客户端采用简单的 ICMP Ping 握手测速，仅代表握手响应包耗时，并不能反映多路 TCP/UDP 传输在持续长链接与多线程下载时的实际带宽承载力与丢包重传率。建议以实际业务（如 Git 代码拉取、终端命令执行或网页资源加载）的连续顺畅度为真实评价标准。
          </p>
        </div>

        {/* 四、底部站内引导 */}
        <div className="p-8 rounded-3xl bg-[#0F121C]/90 border border-purple-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[0_0_35px_rgba(147,51,234,0.15)]">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white">
              结合业务需求，评估适合您的订阅方案
            </h3>
            <p className="text-xs text-slate-400">
              了解不同套餐在设备并发数与流量规格上的差异，理性规划出海预算。
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/pricing/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <span>查看官方 9 大配套对比</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
