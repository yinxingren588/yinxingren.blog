import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ShieldCheck, Download } from 'lucide-react';
import { BRAND_NAME } from '@/config/site';

/**
 * 板块 3：使用流程 (WorkflowSection) - 浅紫色紫罗兰主题
 * 官方标准三步极速接入流转轴
 */
export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: '选购官方配套',
      description:
        `在${BRAND_NAME}官方 9 大精选配套（含周期方案与一次性买断流量包）中，结合个人或团队业务需求选定合适规格。`,
      note: '全系专线 1x 真实倍率',
    },
    {
      num: '02',
      icon: ShieldCheck,
      title: '登录官方控制台激活',
      description:
        `进入${BRAND_NAME}官方用户中心，在线安全完成方案订阅并激活专线凭据，实时查看流量与节点状态。`,
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
      className="py-16 md:py-24 border-b border-[#E9D5FF] bg-[#FAF5FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4 shadow-subtle">
            <span>官方标准 · 三步极速接入</span>
          </div>
          <h2
            id="workflow-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B]"
          >
            {BRAND_NAME} 官方接入流程
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            官方直营无任何冗余环节，遵循清晰标准化的三步流程，快速搭建稳定顺畅的出海工作流。
          </p>
        </div>

        {/* 横向步骤流转轴布局 */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-lg transition-all group"
              >
                {/* 序号与图标 */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] group-hover:scale-105 transition-transform shadow-subtle">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#1E1B4B] text-[10px] font-mono font-bold text-white shadow-sm">
                    {item.num}
                  </span>
                </div>

                {/* 标题与描述 */}
                <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                {/* 官方提示注脚 */}
                <div className="w-full pt-3 border-t border-[#F3E8FF]">
                  <span className="text-[11px] font-medium text-[#7E22CE] bg-[#FAF5FF] px-2.5 py-1 rounded-full border border-[#E9D5FF]">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9333EA] hover:text-[#7E22CE] transition-colors group"
          >
            <span>前往官方配套中心选定规格</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
