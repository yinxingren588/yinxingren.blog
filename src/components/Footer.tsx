import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { BRAND_NAME, BRAND_NAME_EN, OFFICIAL_GUARANTEE_TEXT } from '@/config/site';
import { ShieldCheck, Lock, Activity } from 'lucide-react';

/**
 * 官方四栏页脚组件 (深色极客科技感暗黑紫主题)
 * 树立官方正品旗舰站权威形象
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-purple-500/20 bg-[#06070B] text-slate-400 relative overflow-hidden">
      {/* 底部微弱紫色环境光 */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-900/10 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* 第1栏：品牌介绍与官方说明 */}
          <div className="space-y-4">
            <Logo showSubtitle={false} />
            <p className="text-xs text-slate-400 leading-relaxed">
              {BRAND_NAME}官网（{BRAND_NAME_EN}）专注于为出海团队、跨境开发者与数字游民提供安全、高速、稳定的全球专线网络连接服务。
            </p>
            <div className="p-3.5 rounded-xl bg-[#0F121C] border border-purple-500/20 text-[11px] text-slate-300 leading-relaxed shadow-sm">
              <span className="font-semibold text-purple-300 flex items-center gap-1 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                官方正版直营保障
              </span>
              本平台为 {BRAND_NAME} 官方直营站点，全系配备 IEPL 专线网络与统一 1.0x 真实倍率，提供官方技术售后保障。
            </div>
          </div>

          {/* 第2栏：产品与服务 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-mono">
              产品与服务
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/services/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  服务介绍与架构
                </Link>
              </li>
              <li>
                <Link
                  to="/advantages/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  核心专线优势
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  全球节点分布
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  全平台客户端下载
                </Link>
              </li>
            </ul>
          </div>

          {/* 第3栏：支持与帮助 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-mono">
              支持与帮助
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/pricing/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  官方 9 大配套与选型
                </Link>
              </li>
              <li>
                <Link
                  to="/help/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  帮助中心与手册
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  官方联系与支持工单
                </Link>
              </li>
            </ul>
          </div>

          {/* 第4栏：安全与合规标准 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white mb-4 font-mono">
              安全与合规标准
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/terms/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  服务条款与使用准则
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy/"
                  className="hover:text-purple-300 transition-colors focus:outline-none focus:underline"
                >
                  用户隐私保护政策 (零日志)
                </Link>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-purple-500/15 space-y-1.5 text-[11px] font-mono text-purple-300/80">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-purple-400" />
                <span>加密协议: TLS 1.3 / ChaCha20</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>SLA 可用性: 99.9% 骨干保证</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部官方版权与服务承诺 */}
        <div className="mt-12 pt-8 border-t border-purple-500/15 text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed text-[11px] text-slate-400">
            {OFFICIAL_GUARANTEE_TEXT}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] pt-2">
            <p className="font-mono">© {currentYear} {BRAND_NAME} ({BRAND_NAME_EN}). 保留所有权利。官方正版网络加速门户。</p>
            <div className="flex items-center gap-4 text-slate-400 font-mono">
              <Link to="/terms/" className="hover:text-purple-300 transition-colors">条款</Link>
              <span>·</span>
              <Link to="/privacy/" className="hover:text-purple-300 transition-colors">隐私</Link>
              <span>·</span>
              <Link to="/contact/" className="hover:text-purple-300 transition-colors">工单支持</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
