import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, OFFICIAL_GUARANTEE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ChevronRight,
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

/**
 * /downloads/ 官方客户端下载与全平台配置指南
 */
export const DownloadsPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const downloadPlatforms = [
    {
      id: 'windows',
      name: 'Windows 桌面端',
      tag: 'Windows 10 / 11 官方推荐适配',
      icon: Monitor,
      statusNotice: '官方提供一键导入与免配置整合包',
      description:
        '官方推荐通用客户端方案，支持系统级代理接管与智能规则分流，集成开机自启与订阅自动化更新。',
      specifications: [
        '支持 64 位 x86_64 及 ARM64 硬件架构',
        '系统托盘常驻，无感知后台静默运行',
        '完美支持开发终端、Git 与浏览器分流规则',
      ],
      ctaText: '进入官方控制台获取',
    },
    {
      id: 'macos',
      name: 'macOS 桌面端',
      tag: 'Apple Silicon & Intel 双架构原生支持',
      icon: Laptop,
      statusNotice: '完美适配 macOS 最新系统与暗色模式',
      description:
        '原生适配 macOS 架构，提供状态栏菜单一键切换节点、低延迟分流模式与专属订阅链接托管。',
      specifications: [
        '原生适配 Apple M 系列芯片与 Intel 处理器',
        '深度流量混淆协议栈，极低系统能耗占用',
        '官方一键导入订阅配置链接',
      ],
      ctaText: '进入官方控制台获取',
    },
    {
      id: 'ios',
      name: 'iOS / iPadOS 移动端',
      tag: 'iPhone & iPad 通用生态适配',
      icon: Tablet,
      statusNotice: '支持 Shadowrocket / Sing-box / Loon 等通用工具',
      description:
        '兼容主流 iOS 网络工具，提供扫描二维码或一键复制订阅导入，支持按需规则分流与全天候连接保持。',
      specifications: [
        '支持全系 iOS / iPadOS 系统设备',
        '深度休眠省电优化，锁屏保持稳定连通',
        '支持分流规则自定义与国内应用直连',
      ],
      ctaText: '进入官方控制台获取',
    },
    {
      id: 'android',
      name: 'Android 移动端',
      tag: 'Android 9.0+ 全机型通用兼容',
      icon: Smartphone,
      statusNotice: '官方提供通用 APK 下载与订阅导入',
      description:
        '为安卓用户提供开源轻量客户端方案，支持分应用分流代理、快速设置快捷开关与开机自动拉起。',
      specifications: [
        '支持主流国产及国际品牌 Android 手机与平板',
        '精准的应用级分流与绕过局域网功能',
        'Material Design 简洁交互界面',
      ],
      ctaText: '进入官方控制台获取',
    },
  ];

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#9333EA] transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-[#1E1B4B] font-semibold" aria-current="page">
              客户端下载
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>官方正版 · 全平台客户端</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME} 官方客户端下载与配置中心
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            为您整理主流桌面与移动操作系统（Windows、macOS、iOS、Android）的正规官方客户端获取途径与专属订阅导入教程。所有客户端软件与订阅配置均在官方用户中心安全下发，确保端到端链路纯净可信。
          </p>
        </div>

        {/* 官方正版声明横幅 */}
        <div className="mb-14 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="text-base font-bold text-[#1E1B4B]">
                官方正版客户端与订阅安全保障
              </h3>
              <p className="text-sm font-semibold text-[#7E22CE]">
                “请认准官方控制台下发经过安全哈希校验的正版客户端与专属订阅地址”
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                坚决避免使用未经核验的第三方网盘、修改版或二次打包安装器。请始终通过隐形人官方控制台获取正版安装包与专属订阅密钥，保障您的数据隐私与系统绝对安全。
              </p>
            </div>
          </div>
        </div>

        {/* 四大主流平台下载卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {downloadPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E9D5FF] mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-[#1E1B4B]">
                          {platform.name}
                        </h2>
                        <span className="text-[11px] font-mono text-[#7E22CE] font-semibold">
                          {platform.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {platform.specifications.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#9333EA] mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-700 font-medium">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E9D5FF] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium">
                    {platform.statusNotice}
                  </span>
                  <OfficialLink className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-xs sm:text-sm font-semibold transition-all shadow-subtle">
                    <span>{platform.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </OfficialLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* 官方承诺注脚 */}
        <div className="p-6 rounded-2xl bg-[#F5F3FF] border border-[#E9D5FF] text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-600 leading-relaxed font-medium">
            {OFFICIAL_GUARANTEE_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
