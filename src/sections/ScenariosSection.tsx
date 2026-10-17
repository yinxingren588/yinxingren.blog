import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Globe2, Briefcase, CheckCircle, AlertTriangle } from 'lucide-react';

/**
 * 板块 4：使用场景 (ScenariosSection) - 浅紫色紫罗兰主题
 * 结构：痛点诊断与方案对照展板
 */
export const ScenariosSection: React.FC = () => {
  const scenarios = [
    {
      icon: Code2,
      role: '出海开发与开源协同',
      target: '全栈工程师 · 云原生架构师 · 独立开发者',
      pain: '海外依赖库（npm/pip/cargo）拉取频频超时，Git 远程仓库 push/pull 阻断，严重拖慢交付周期。',
      solution: '采用深度特征混淆长连接，支持针对开发工具链的精细分流规则，保障代码同步顺畅无阻。',
    },
    {
      icon: Globe2,
      role: '跨境出海与社媒运营',
      target: '跨境电商操盘手 · 海外自媒体 · 跨境营销团队',
      pain: '网络跳跃导致社媒账号频繁触发异地登录安全警报，多设备并发上传视频出现高丢包与卡顿。',
      solution: '提供一致性线路配置指南，支持稳定带宽吞吐与低干扰隧道，降低账号风控与多端冲突。',
    },
    {
      icon: Briefcase,
      role: '远程协作与数字游民',
      target: '跨国远程雇员 · 自由职业者 · 全球旅居工作者',
      pain: '在咖啡厅或公共共享空间使用不可信 Wi-Fi，个人隐私与商业机密面临嗅探风险；协同工具偶发中断。',
      solution: '端到端流量封包加密隔离，自动容灾平滑兜底，全天候打造如同专属私网的安全漫游体验。',
    },
  ];

  return (
    <section
      aria-labelledby="scenarios-heading"
      className="py-16 md:py-24 border-b border-[#E9D5FF] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4 shadow-subtle">
            <span>精准赋能 · 业务场景</span>
          </div>
          <h2
            id="scenarios-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B]"
          >
            多元化跨境数字工作场景适配
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            不同业务场景对网络连接的考量各异。隐形人连接方案通过精细化分流与纯净隧道，量身支撑不同工作流。
          </p>
        </div>

        {/* 痛点与方案对照卡片排版 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] p-6 sm:p-7 flex flex-col justify-between hover:border-[#C084FC] hover:shadow-card-hover transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 pb-5 border-b border-[#E9D5FF]">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] shadow-subtle">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1E1B4B]">
                        {item.role}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-mono">
                        {item.target}
                      </p>
                    </div>
                  </div>

                  {/* 痛点对比 */}
                  <div className="mt-5 space-y-4">
                    <div className="p-3.5 rounded-lg bg-rose-50/70 border border-rose-200/80">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-700 mb-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>常见网络瓶颈</span>
                      </div>
                      <p className="text-xs text-rose-900/80 leading-relaxed">
                        {item.pain}
                      </p>
                    </div>

                    {/* 方案呈现 */}
                    <div className="p-3.5 rounded-lg bg-white border border-[#E9D5FF] shadow-subtle">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7E22CE] mb-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#9333EA]" />
                        <span>隐形人解决建议</span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9D5FF] flex items-center justify-between text-xs text-slate-500">
                  <span>适用协议已就绪</span>
                  <Link
                    to="/services/"
                    className="text-[#9333EA] hover:text-[#7E22CE] font-semibold inline-flex items-center gap-1"
                  >
                    <span>详情</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引导（0 AFF） */}
        <div className="mt-12 text-center">
          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-sm font-medium text-slate-700 hover:text-[#9333EA] transition-all shadow-subtle"
          >
            <span>根据您的业务场景对比方案规格</span>
            <ArrowRight className="w-4 h-4 text-[#9333EA]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScenariosSection;
