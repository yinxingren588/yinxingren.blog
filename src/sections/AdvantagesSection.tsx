import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Smartphone, EyeOff, ShieldCheck, Zap } from 'lucide-react';
import { BRAND_NAME } from '@/config/site';

/**
 * 板块：核心优势 (AdvantagesSection) - 深色极客科技感暗黑紫主题
 * 官方 4 大核心专线网络优势 Bento Grid
 */
export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: EyeOff,
      tag: '传输隐匿',
      title: '全链路 IEPL 企业级内网专线',
      description:
        '不走公共公网国际出口，端到端经过物理内网专线穿透，彻底杜绝数据包嗅探、晚高峰剧烈抖动与丢包困扰。',
    },
    {
      icon: Network,
      tag: '容灾高可用',
      title: '多节点 BGP 智能容灾与动态负载',
      description:
        '构建全球多可用区冗余路由，在特定骨干链路发生波动时，系统 0.5s 内平稳无感切换至备用通道，长连接不中断。',
    },
    {
      icon: Smartphone,
      tag: '全端漫游',
      title: '跨平台全生态协议一键适配',
      description:
        '原生适配 Windows、macOS、Linux、iOS 及 Android 常见网络管理工具，一个订阅链接即可全设备多端无缝漫游。',
    },
    {
      icon: ShieldCheck,
      tag: '官方直营',
      title: '全系 1.0x 真实倍率与正品工单保障',
      description:
        '隐形人官方直营，承诺所有节点统一 1.0x 真实倍率，杜绝暗扣虚标，官方工程师团队 7×24 驻守提供专属技术工单。',
    },
  ];

  return (
    <section
      aria-labelledby="advantages-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 头部标题区 */}
        <div className="max-w-3xl mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>CORE ARCHITECTURE ADVANTAGES · 官方核心架构优势</span>
          </div>
          <h2
            id="advantages-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            为什么选择 {BRAND_NAME} 官方专线网络？
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            摒弃繁琐虚标的营销套路，聚焦于专线连接的极速低延迟、1.0x 真实倍率、多端通用性与 99.9% 长效稳定性，为现代数字出海工作流构建坚固防护。
          </p>
        </div>

        {/* 2×2 Bento Grid 错落网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all space-y-4 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-semibold text-slate-700">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部直达 */}
        <div className="mt-12 text-center">
          <Link
            to="/advantages/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>深入了解官方技术架构与节点分布优势</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
