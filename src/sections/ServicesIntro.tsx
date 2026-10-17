import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import { ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react';

/**
 * 板块 1：服务介绍 (ServicesIntro) - 浅紫色紫罗兰主题
 * 结构：左右不对称分栏 (7:5) 图文互锁架构
 * 按钮：全部使用站内 Link，不新增 AFF
 */
export const ServicesIntro: React.FC = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-16 md:py-24 border-b border-[#E9D5FF] bg-[#FAF5FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧深度技术与服务阐述 (7列) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold shadow-subtle">
              <span>架构概览 · 服务体系</span>
            </div>

            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
            >
              隐匿传输与敏捷连接服务解析
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {BRAND_NAME}（{BRAND_NAME_EN}）专注于为跨境团队与数字游民提供低感知、高鲁棒性的网络接入解决方案。通过底层混淆协议与多节点中继路由，有效抵御公共网络中的数据嗅探与特征识别，保障关键业务数据安全流转。
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              本站作为中立的第三方使用指引平台，致力于为用户提供客观的技术特性解读、全平台配置手册以及理性选型建议。无论是跨国代码协同、云端开发环境调试，还是海外业务运营，均能获得清晰的实施指引。
            </p>

            <div className="pt-2">
              <Link
                to="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9333EA] hover:text-[#7E22CE] transition-colors group"
              >
                <span>查看完整服务与协议解析</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 右侧多维技术特性矩阵 (5列) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] transition-all shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1E1B4B]">
                    流量特征深度混淆
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    采用高强度混淆封装算法，弱化特征标记，减少中间网络干扰，保持跨境长连接持续稳定。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] transition-all shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1E1B4B]">
                    开发环境友好适配
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    全面支持主流代理协议与分流规则，轻松集成至终端命令行、Git 工具及容器开发环境中。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] transition-all shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1E1B4B]">
                    零冗余轻量客户端
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    主流系统适配简单配置订阅，资源占用极低，杜绝任何捆绑插件与多余后台进程。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
