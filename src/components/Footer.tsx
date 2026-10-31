import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { BRAND_NAME, BRAND_NAME_EN, OFFICIAL_GUARANTEE_TEXT } from '@/config/site';

/**
 * 官方四栏页脚组件 (浅紫色紫罗兰主题)
 * 树立官方正品旗舰站权威形象
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#E9D5FF] bg-[#F5F3FF] text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* 第1栏：品牌介绍与官方说明 */}
          <div className="space-y-4">
            <Logo showSubtitle={false} />
            <p className="text-xs text-slate-600 leading-relaxed">
              {BRAND_NAME}官网（{BRAND_NAME_EN}）专注于为出海团队、跨境开发者与数字游民提供安全、高速、稳定的全球专线网络连接服务。
            </p>
            <div className="p-3 rounded-lg bg-white border border-[#E9D5FF] text-[11px] text-slate-600 leading-relaxed shadow-subtle">
              <span className="font-semibold text-[#7E22CE]">官方正版保证：</span>
              本平台为{BRAND_NAME}（Invisible）官方直营站点，全系配备专线网络与统一 1x 计费倍率，提供官方技术售后保障。
            </div>
          </div>

          {/* 第2栏：产品与服务 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] mb-4">
              产品与服务
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/services/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  服务介绍与架构
                </Link>
              </li>
              <li>
                <Link
                  to="/advantages/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  核心专线优势
                </Link>
              </li>
              <li>
                <Link
                  to="/locations/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  全球节点分布
                </Link>
              </li>
              <li>
                <Link
                  to="/downloads/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  官方客户端下载
                </Link>
              </li>
            </ul>
          </div>

          {/* 第3栏：支持与帮助 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] mb-4">
              支持与帮助
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/pricing/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  官方 9 大配套
                </Link>
              </li>
              <li>
                <Link
                  to="/help/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  帮助中心与手册
                </Link>
              </li>
              <li>
                <Link
                  to="/contact/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  官方联系与支持
                </Link>
              </li>
            </ul>
          </div>

          {/* 第4栏：法律政策与合规 */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E1B4B] mb-4">
              法律政策
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  to="/terms/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  服务条款与准则
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy/"
                  className="hover:text-[#9333EA] transition-colors focus:outline-none focus:underline"
                >
                  用户隐私保护政策
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-[11px] text-slate-500 leading-normal">
              隐形人恪守严格的隐私安全规范，致力于构建纯净、高可信的全球网络互联生态。
            </p>
          </div>
        </div>

        {/* 底部官方版权与服务承诺 */}
        <div className="mt-12 pt-8 border-t border-[#E9D5FF] text-xs text-slate-500 space-y-3">
          <p className="leading-relaxed">
            {OFFICIAL_GUARANTEE_TEXT}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px]">
            <p>© {currentYear} {BRAND_NAME} ({BRAND_NAME_EN}). 保留所有权利。官方正版网络服务门户。</p>
            <div className="flex items-center gap-4 text-slate-500">
              <Link to="/terms/" className="hover:text-[#9333EA] transition-colors">条款</Link>
              <span>·</span>
              <Link to="/privacy/" className="hover:text-[#9333EA] transition-colors">隐私</Link>
              <span>·</span>
              <Link to="/contact/" className="hover:text-[#9333EA] transition-colors">官方支持</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
