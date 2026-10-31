import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import ClientMatrixSection from '@/sections/ClientMatrixSection';
import {
  ChevronRight,
  Download,
  ArrowRight,
  Zap,
} from 'lucide-react';

/**
 * /downloads/ 官方客户端下载与全平台配置指南 (深色极客科技感暗黑紫主题)
 */
export const DownloadsPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="py-8 sm:py-16 bg-[#08090E] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-400">
            <li>
              <Link to="/" className="hover:text-purple-300 transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            </li>
            <li className="text-purple-300 font-semibold" aria-current="page">
              客户端下载与配置
            </li>
          </ol>
        </nav>

        {/* 独立 H1 与头屏介绍 */}
        <div className="max-w-3xl mb-12 text-left space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>OFFICIAL CLIENT CENTER · 官方全生态下载中心</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {BRAND_NAME} 官方客户端下载与一键配置中心
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            官方提供 Windows、macOS、iOS、Android、Linux 及软路由全生态客户端一键安装包与订阅配置。集成深度混淆协议与 TUN 虚拟网卡模式，秒开 4K/8K 与 AI 生产力。
          </p>
        </div>

        {/* 核心客户端矩阵交互组件 */}
        <ClientMatrixSection />

        {/* 官方三步配置指引卡片 */}
        <div className="mt-16 p-8 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 text-left max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <span>客户端极速激活三部曲</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15 space-y-2">
              <div className="text-xs font-mono font-bold text-purple-400">STEP 01</div>
              <div className="text-sm font-bold text-white">获取官方配套与订阅</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                在官方控制台选购心仪方案并激活账户，进入“仪表盘”获取专属订阅链接。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15 space-y-2">
              <div className="text-xs font-mono font-bold text-purple-400">STEP 02</div>
              <div className="text-sm font-bold text-white">下载并安装客户端</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                根据您的设备平台下载安装 Clash Verge、Shadowrocket 或 Sing-box 客户端。
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/15 space-y-2">
              <div className="text-xs font-mono font-bold text-purple-400">STEP 03</div>
              <div className="text-sm font-bold text-white">一键导入并开启</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                点击控制台“一键导入”或复制订阅粘贴至客户端，开启系统代理即可畅享专线。
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              遇到配置疑问？欢迎查阅帮助手册或向官方工程师提交技术支持工单。
            </p>
            <OfficialLink className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <span>进入官方控制台下载配置</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </OfficialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
