import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import { ArrowRight, ShieldCheck, Terminal, Cpu, Globe } from 'lucide-react';

/**
 * 板块：服务介绍 (ServicesIntro) - 深色极客科技感暗黑紫主题
 * 官方架构概览与专线服务体系
 */
export const ServicesIntro: React.FC = () => {
  return (
    <section
      aria-labelledby="services-heading"
      className="py-16 sm:py-24 border-b border-purple-500/20 bg-[#08090E] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* 左侧深度技术与服务阐述 (7列) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              <span>ARCHITECTURE OVERVIEW · 官方专线网络体系</span>
            </div>

            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight"
            >
              {BRAND_NAME} 隐匿传输与专线敏捷连接深度解析
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {BRAND_NAME}（{BRAND_NAME_EN}）专注于为跨境团队与出海人员提供低感知、高鲁棒性的全球专线网络接入解决方案。通过底层混淆协议与多节点中继冗余路由，有效规避公共网络中的数据嗅探与特征识别，保障关键业务数据安全流转。
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              作为官方直营服务门户，{BRAND_NAME}致力于为全球用户提供高标准的专线传输品质、全平台客户端官方接入教程以及专属技术支持。无论是跨国代码协同、云端开发调试，还是海外业务运营，均能获得官方级的长效连通保障。
            </p>

            <div className="pt-2">
              <Link
                to="/services/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
              >
                <span>查看官方服务与协议架构详情</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 右侧多维技术特性矩阵 (5列) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="p-5 rounded-2xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:border-purple-400/60 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    流量特征深度混淆伪装
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    采用高强度混淆封装算法，弱化特征标记，减少中间网络嗅探干扰，保持跨境长连接持续稳定。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:border-purple-400/60 transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    开发与企业环境无缝适配
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    全面支持主流代理协议与分流规则，轻松集成至终端命令行、Git 工具及容器开发环境中。
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:border-purple-400/60 transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    全平台零冗余客户端生态
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    兼容全生态主流客户端，一键导入官方订阅，资源占用极低，杜绝任何第三方捆绑与插件。
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
