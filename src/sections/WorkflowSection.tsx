import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Download, Zap } from 'lucide-react';
import { BRAND_NAME } from '@/config/site';

/**
 * 板块：使用流程 (WorkflowSection) - 深色极客科技感暗黑紫主题
 * 官方标准三步极速接入流转轴
 */
export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: '选购官方专线配套',
      description:
        `在 ${BRAND_NAME} 官方 9 大精选配套（含周期方案与一次性买断流量包）中，结合个人或团队业务需求选定合适规格。`,
      note: '全系专线 1.0x 真实倍率',
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: '登录官方控制台激活',
      description:
        `进入 ${BRAND_NAME} 官方用户中心，在线安全完成方案订阅并激活专线凭据，实时查看流量与节点状态。`,
      note: '官方直营保障与专属售后',
    },
    {
      num: '03',
      icon: Download,
      title: '下载官方客户端一键开启',
      description:
        '在官方下载中心获取适配您设备的客户端软件，一键导入专属订阅，秒级建立安全隐匿的跨国高速连接。',
      note: '全生态主流系统覆盖',
    },
  ];

  return (
    <section
      aria-labelledby="workflow-heading"
      className="py-16 sm:py-24 border-b border-purple-500/20 bg-[#08090E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Zap className="w-3.5 h-3.5 text-purple-400" />
            <span>STANDARDIZED WORKFLOW · 官方极速接入流</span>
          </div>
          <h2
            id="workflow-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
          >
            {BRAND_NAME} 官方三步标准化接入流程
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            官方直营无任何多余繁琐环节，遵循清晰标准化的三步流程，快速搭建稳定顺畅的出海工作流。
          </p>
        </div>

        {/* 横向步骤流转轴布局 */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition-all group"
              >
                {/* 序号与图标 */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:text-purple-300 transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-[10px] font-mono font-bold text-white shadow-md border border-purple-400/30">
                    {item.num}
                  </span>
                </div>

                {/* 标题与描述 */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                {/* 官方提示注脚 */}
                <div className="w-full pt-4 border-t border-purple-500/15">
                  <span className="text-[11px] font-mono font-semibold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">
                    {item.note}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引导 */}
        <div className="mt-12 text-center">
          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
          >
            <span>前往官方配套选型对比</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
