import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Network, Smartphone, EyeOff } from 'lucide-react';

/**
 * 板块 2：核心优势 (AdvantagesSection) - 浅紫色紫罗兰主题
 * 结构：2×2 错落网格
 * 按钮：全部使用站内 Link，不新增 AFF
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
      tag: '网络冗余',
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
      icon: Lock,
      tag: '中立透明',
      title: '客观真实的配置与选型指导',
      description:
        '本站清晰标注推广与导航属性，绝无隐性消费绑架或虚高参数宣传，始终为出海用户提供可验证的实测参考。',
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
            <span>核心价值 · 架构优势</span>
          </div>
          <h2
            id="advantages-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
          >
            为什么选择隐形人连接方案？
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            摒弃繁琐多余的营销包装，聚焦于连接的私密性、多端通用性与长效稳定性，为现代数字工作流构建坚固防护。
          </p>
        </div>

        {/* 2×2 错落网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] group-hover:scale-105 transition-transform shadow-subtle">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-white border border-[#E9D5FF] text-[#7E22CE] font-semibold">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1E1B4B] group-hover:text-[#9333EA] transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9D5FF] flex items-center text-xs font-medium text-slate-500">
                  <span>架构特性已验证</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部站内跳转引导（0 AFF） */}
        <div className="mt-12 text-center">
          <Link
            to="/advantages/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-sm font-medium text-slate-700 hover:text-[#9333EA] transition-all shadow-subtle"
          >
            <span>深入了解核心架构细节</span>
            <ArrowRight className="w-4 h-4 text-[#9333EA]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
