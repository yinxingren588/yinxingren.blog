import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ExternalLink, Download } from 'lucide-react';

/**
 * 板块 3：使用流程 (WorkflowSection) - 浅紫色紫罗兰主题
 * 结构：横向 3 步连接流转轴
 */
export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: '了解并选择方案',
      description:
        '在本站客观查阅套餐对比与功能分析，结合个人跨境协作频率与设备数量，确定适合自身的订阅方案。',
      note: '第三方中立选型指导',
    },
    {
      num: '02',
      icon: ExternalLink,
      title: '前往合作平台完成订阅',
      description:
        '通过本站推广入口前往合规合作平台官方页面，在合作平台系统内安全完成套餐订阅与账户激活。',
      note: '结算直接由合作平台承保',
    },
    {
      num: '03',
      icon: Download,
      title: '获取客户端并按照指引使用',
      description:
        '参照本站提供的图文排错教程，下载对应平台的轻量客户端，导入订阅链接后一键开启隐私连接。',
      note: '全平台详尽图文指引',
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
            <span>极简透明 · 三步接入</span>
          </div>
          <h2
            id="workflow-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B]"
          >
            标准接入与使用流程
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            本站无任何中间账户门槛或隐性支付流程，只需遵循标准化三步指引，即可完成配置并开始使用。
          </p>
        </div>

        {/* 横向步骤流转轴布局 */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* 中间水平连接线（桌面端可见） */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#D8B4FE] to-transparent -translate-y-8 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] shadow-card hover:border-[#C084FC] hover:shadow-card-hover transition-all"
              >
                {/* 序号与图标圆形徽章 */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] shadow-subtle">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#9333EA] text-white text-[11px] font-mono font-bold shadow-sm">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1E1B4B] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="mt-auto w-full pt-4 border-t border-[#E9D5FF] text-[11px] text-slate-500 font-mono">
                  {step.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* 流程底部说明与站内链接引导（0 AFF） */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#E9D5FF] text-center max-w-2xl mx-auto shadow-subtle">
          <p className="text-xs text-slate-600 mb-3">
            本站专注于使用指引与第三方客观评测，不设任何自有充值、收银或账户系统。
          </p>
          <Link
            to="/help/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9333EA] hover:text-[#7E22CE] hover:underline"
          >
            <span>查看完整客户端安装与新手避坑指引</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
