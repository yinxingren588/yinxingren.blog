import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Network, Smartphone, EyeOff, ShieldCheck } from 'lucide-react';
import { BRAND_NAME } from '@/config/site';

/**
 * 板块 2：核心优势 (AdvantagesSection) - 浅紫色紫罗兰主题
 * 官方 4 大核心专线网络优势
 */
export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: EyeOff,
      tag: '隐私保护',
      title: '端到端隐匿传输机制',
      description:
        '通过协议加密与数据封包混淆，弱化网络通信特征，有效降低公共 Wi-Fi 与不可信网络环境下的窃听与重放风险。',
    },
    {
      icon: Network,
      tag: '专线冗余',
      title: '多节点动态负载与故障备用',
      description:
        '构建多可用区冗余路由，在特定骨干网络出现波动时能够平稳切换备用通道，保障核心团队长连接不中断。',
    },
    {
      icon: Smartphone,
      tag: '多端通用',
      title: '跨平台全生态协议支持',
      description:
        '原生适配 Windows、macOS、Linux、iOS 及 Android 常见网络管理工具，一个订阅配置即可全设备无缝漫游。',
    },
    {
      icon: ShieldCheck,
      tag: '官方直营',
      title: '官方正版保障与 1x 真实倍率承诺',
      description:
        '隐形人官方直营，统一 1x 计费倍率，杜绝虚假跑量，提供官方专属技术售后与长期节点维护，保障您的连接体验。',
    },
  ];

  return (
    <section
      aria-labelledby="advantages-heading"
      className="py-16 md:py-24 border-b border-[#E9D5FF] bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 头部标题区 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4 shadow-subtle">
            <span>核心价值 · 官方架构优势</span>
          </div>
          <h2
            id="advantages-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
          >
            为什么选择{BRAND_NAME}官方专线网络方案？
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            摒弃繁琐多余的营销套路，聚焦于专线连接的私密性、多端通用性与长效稳定性，为现代数字出海工作流构建坚固防护。
          </p>
        </div>

        {/* 2×2 错落网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] shadow-subtle">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#E9D5FF] text-xs font-semibold text-[#7E22CE]">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B]">
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#9333EA] hover:text-[#7E22CE] transition-colors group"
          >
            <span>深入了解官方架构价值与技术评测</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
