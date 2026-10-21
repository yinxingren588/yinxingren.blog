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
 * /locations/ 服务线路范围与选型指引页面
 * 
 * 规范要求：
 * 1. 唯一 H1：清晰聚焦服务线路范围与客观选型参考
 * 2. 规范面包屑：首页 / 服务线路
 * 3. 严格标注：“具体线路与节点以客户端实际显示为准”
 * 4. 无法确认的地区分类仅作为“选型考量维度”，绝不表述为品牌实际已提供的已确认线路
 * 5. 严禁虚构延迟、节点数量、覆盖国家数量或实时状态；绝不用地图暗示覆盖
 * 6. 0 新增 AFF：操作均使用站内 Link
 */
export const LocationsPage: React.FC = () => {
  useEffect(() => {
    // 确保为正常收录
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
              服务线路
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与线路范围导言 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>网络分布 · 客观指南</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME}机场服务线路范围与节点选型指引
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            跨境网络连接受光纤物理距离、国际骨干网出口质量及运营商路由策略共同制约。本页面为您提供隐形人机场节点选择参考、隐形人官网节点状态排查与排错方法论，拒绝未经证实的虚构节点宣传。
          </p>
        </div>

        {/* 核心合规警示横幅：强制包含规范声明语句 */}
        <div className="mb-16 p-6 sm:p-7 rounded-2xl bg-amber-50/90 border border-amber-200/80 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-2 text-left">
              <h2 className="text-base sm:text-lg font-bold text-amber-900">
                服务范围与实时线路核验声明
              </h2>
              <p className="text-sm font-semibold text-amber-800">
                “具体线路与节点以客户端实际显示为准。”
              </p>
              <p className="text-xs sm:text-sm text-amber-700 leading-relaxed">
                本站作为中立的第三方指引平台，未获得合作平台全部物理机房的实时遥测授权，坚决不制作虚假的世界节点地图、不虚报覆盖国家数量、不发布静态假延迟数字。所有线路的在线状态、实时负载与可用性均以合作平台客户端订阅下发的实时节点清单为准。
              </p>
            </div>
          </div>
        </div>

        {/* 一、地区选择参考维度（明确为参考维度，非已确认覆盖清单） */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              跨区域线路选型参考维度
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              以下地区分类仅代表通用网络选型考量维度，不代表品牌已实际提供特定线路，请在客户端中核实可用节点。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {regionalDimensions.map((dim, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-[#E9D5FF]">
                    <Layers className="w-4 h-4 text-[#9333EA]" />
                    <span className="text-xs font-mono text-[#7E22CE] font-semibold uppercase tracking-wider">
                      维度 0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B]">
                      {dim.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {dim.subtitle}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] space-y-1">
                    <span className="text-[11px] font-semibold text-[#1E1B4B]">
                      传输特性：
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dim.characteristics}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-[#1E1B4B]">
                      适用建议：
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dim.recommendation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9D5FF] text-[11px] text-amber-700 leading-relaxed">
                  提示：{dim.cautions}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 二、节点选择与避坑三大法则 */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              实用节点选择与排错法则
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              如何建立健康的科学上网习惯，避免因盲目测速而造成频繁切换连接。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selectionGuidelines.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all shadow-card space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1E1B4B]">
                    {guide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 三、常见线路疑问简答 */}
        <div className="p-8 rounded-2xl bg-white border border-[#E9D5FF] shadow-card mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-[#7E22CE] text-xs font-semibold">
              <HelpCircle className="w-4 h-4 text-[#9333EA]" />
              <span>常见线路疑惑</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1E1B4B]">
              为什么客户端测速显示的延迟与实际使用感受不一致？
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              许多客户端采用简单的 ICMP Ping 握手测速，仅代表握手响应包耗时，并不能反映多路 TCP/UDP 传输在持续长链接与多线程下载时的实际带宽承载力与丢包重传率。建议以实际业务（如 Git 代码拉取、终端命令执行或网页资源加载）的连续顺畅度为真实评价标准。
            </p>
          </div>
        </div>

        {/* 四、底部站内引导（0 AFF） */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-white to-[#F3E8FF] border border-[#E9D5FF] shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B]">
              结合业务需求，评估适合您的订阅方案
            </h3>
            <p className="text-xs text-slate-600">
              了解不同套餐在设备并发数与流量规格上的差异，理性规划出海预算。
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              to="/pricing/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-sm font-semibold transition-all shadow-sm"
            >
              <span>查看方案选型指南</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
