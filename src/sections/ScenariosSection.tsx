import React from 'react';
import { Code2, Globe2, Briefcase, CheckCircle, AlertTriangle, Layers } from 'lucide-react';

/**
 * 板块：使用场景 (ScenariosSection) - 深色极客科技感暗黑紫主题
 * 痛点诊断与方案对照展板
 */
export const ScenariosSection: React.FC = () => {
  const scenarios = [
    {
      icon: Code2,
      role: '出海开发与开源协同',
      target: '全栈工程师 · 云原生架构师 · 独立开发者',
      pain: '海外依赖库（npm/pip/cargo/docker）拉取频频超时，Git 远程仓库 push/pull 阻断，严重拖慢交付周期。',
      solution: '采用深度特征混淆长连接，支持针对开发工具链与 GitHub 的精细分流规则，保障代码同步与依赖拉取毫秒级响应。',
    },
    {
      icon: Globe2,
      role: '跨境出海与社媒电商',
      target: '跨境电商操盘手 · 海外自媒体 · 跨境营销团队',
      pain: '网络跳跃导致社媒账号频繁触发异地登录安全警报，多设备并发上传 4K 视频出现高丢包与严重卡顿。',
      solution: '提供一致性原生住宅 IP 线路与 IEPL 内网专线，支持稳定带宽吞吐，全节点 1.0x 真实倍率，有效规避风控。',
    },
    {
      icon: Briefcase,
      role: '远程协同与数字游民',
      target: '跨国远程雇员 · 自由职业者 · 全球旅居工作者',
      pain: '在咖啡厅或公共共享空间使用不可信 Wi-Fi，个人隐私与商业机密面临嗅探风险；视频会议偶发掉线。',
      solution: '端到端流量封包 TLS 1.3 强加密隔离，BGP 多线智能故障秒级转移，打造全天候专属私网级安全漫游体验。',
    },
  ];

  return (
    <section
      aria-labelledby="scenarios-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>BUSINESS USE SCENARIOS · 核心业务场景</span>
          </div>
          <h2
            id="scenarios-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            多元化跨境数字工作流场景赋能
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            不同业务场景对网络连接的考量各异。隐形人连接方案通过精细化分流与纯净 IEPL 隧道，量身支撑不同出海工作流。
          </p>
        </div>

        {/* 痛点与方案对照卡片排版 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 shadow-sm hover:shadow-md transition-all text-left"
              >
                <div>
                  <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {item.role}
                      </h3>
                      <p className="text-[11px] text-blue-600 font-mono">
                        {item.target}
                      </p>
                    </div>
                  </div>

                  {/* 痛点对比 */}
                  <div className="mt-5 space-y-4">
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>常见网络瓶颈与痛点</span>
                      </div>
                      <p className="text-xs text-rose-600 leading-relaxed">
                        {item.pain}
                      </p>
                    </div>

                    {/* 方案呈现 */}
                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-800 mb-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>隐形人官方专线解决方案</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-mono text-slate-500">
                    全节点 1.0x 真实倍率 · 毫秒级智能调度
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
