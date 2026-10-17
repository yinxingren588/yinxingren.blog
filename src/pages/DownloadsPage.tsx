import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, AFF_DISCLOSURE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ChevronRight,
  Monitor,
  Laptop,
  Smartphone,
  Tablet,
  ArrowUpRight,
  AlertCircle,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

/**
 * /downloads/ 客户端获取与多平台配置指引页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 涵盖 iOS、Android、Windows、macOS 四类平台入口
 * 3. 明确标注：“支持情况与获取方式以合作平台说明为准”
 * 4. 严禁声称存在未经验证的专属客户端，严禁伪造虚假直链安装包
 * 5. 每个平台采用 OfficialLink 前往合作平台核实并获取，按钮文字统一为“前往合作平台获取”
 * 6. AFF 入口数量：共 4 个（每个平台卡片对应 1 个）
 */
export const DownloadsPage: React.FC = () => {
  useEffect(() => {
    document.title = `客户端下载与安装 - ${BRAND_NAME}`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const downloadPlatforms = [
    {
      id: 'windows',
      name: 'Windows 桌面端',
      tag: 'Windows 10 / 11 架构适配',
      icon: Monitor,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '主流通用代理客户端适配方案，支持系统级全局或分流规则接管，集成开机静默启动与订阅自动化更新。',
      specifications: [
        '支持 64 位 x86_64 及 ARM64 硬件架构',
        '图形化系统托盘驻留，无感知长连接后台运行',
        '适配常用命令行代理与开发工具链',
      ],
      ctaText: '前往合作平台获取',
    },
    {
      id: 'macos',
      name: 'macOS 桌面端',
      tag: 'Apple Silicon & Intel 架构适配',
      icon: Laptop,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '支持 macOS 最新操作系统，提供深色模式适配、Menubar 菜单状态栏快捷切换与高效分流规则托管。',
      specifications: [
        '原生适配 Apple M 系列芯片与 Intel 处理器',
        '支持深层混淆协议栈，系统资源占用微小',
        '提供一键导入订阅配置链接',
      ],
      ctaText: '前往合作平台获取',
    },
    {
      id: 'ios',
      name: 'iOS / iPadOS 移动端',
      tag: 'iPhone & iPad 通用生态适配',
      icon: Tablet,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '通过系统级网络扩展机制，配合主流受支持的应用工具导入配置，实现随时随地的平稳漫游与按需连接。',
      specifications: [
        '适配 iOS / iPadOS 最新稳定版本',
        '支持快捷指令自动化切换与按需连接',
        '针对移动网络低功耗特性深度优化',
      ],
      ctaText: '前往合作平台获取',
    },
    {
      id: 'android',
      name: 'Android 移动端',
      tag: '全品牌 Android 手机与平板适配',
      icon: Smartphone,
      statusNotice: '支持情况与获取方式以合作平台说明为准',
      description:
        '支持独立应用分流模式（Split Tunneling），仅将海外应用流量走专用通道，保持国内应用原速本地直连。',
      specifications: [
        '兼容主流手机品牌定制系统及原生系统',
        '支持精细化应用级独立分流配置',
        '一键扫码导入或订阅托管解析',
      ],
      ctaText: '前往合作平台获取',
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
            <span>客户端获取 · 多端支持</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME} 客户端获取与多平台配置指引
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            为您整理主流桌面与移动操作系统（Windows、macOS、iOS、Android）的标准客户端获取途径与配置导入方法。本站不私自托管经过二次打包的安装文件，所有官方软件与订阅凭证均指引至合规合作平台安全获取。
          </p>
        </div>

        {/* 核心合规警示横幅：强制包含规范声明语句 */}
        <div className="mb-14 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-base font-bold text-[#1E1B4B]">
                客户端支持与获取渠道声明
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#7E22CE]">
                “支持情况与获取方式以合作平台说明为准”
              </p>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                本站作为第三方信息指引平台，不提供未经签名验证的直接文件下载直链。以下各系统卡片旨在提供生态兼容参考，请点击对应平台按钮前往合作平台用户中心完成客户端核实与订阅配置导入。
              </p>
            </div>
          </div>
        </div>

        {/* 四大主流平台下载入口网格（4 个卡片，4 个 OfficialLink） */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {downloadPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.id}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card"
              >
                <div>
                  {/* 平台标识与徽章 */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#E9D5FF] mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1E1B4B]">
                          {platform.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-500">
                          {platform.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 规范合规提示 */}
                  <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-[#7E22CE] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#9333EA]" />
                    <span>{platform.statusNotice}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {platform.description}
                  </p>

                  {/* 特性规范列表 */}
                  <div className="space-y-2.5 mb-8">
                    {platform.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9333EA] mt-0.5 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 商业 CTA 按钮：使用 OfficialLink 前往合作平台获取 */}
                <div className="pt-4 border-t border-[#E9D5FF]">
                  <OfficialLink className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white font-semibold text-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50">
                    <span>{platform.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </OfficialLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* 推广免责声明 */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs text-slate-500 leading-relaxed">
            {AFF_DISCLOSURE_TEXT}
          </p>
        </div>

        {/* 底部常见下载疑惑与配置解答 */}
        <div className="p-8 rounded-2xl bg-white border border-[#E9D5FF] max-w-4xl mx-auto space-y-6 shadow-card">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#9333EA]" />
            <h2 className="text-lg font-bold text-[#1E1B4B]">
              客户端获取与配置注意事项
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1E1B4B]">
                如何避免下载到篡改版本？
              </h3>
              <p>
                坚决避免使用搜索引擎未经核验的第三方下载站、非官方网盘群或修改版安装器。请始终通过合作平台官方用户面板获取正版签名安装包与配置密钥，保障本地数据隐私与系统安全。
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1E1B4B]">
                下载后遇到系统拦截怎么处理？
              </h3>
              <p>
                Windows Defender SmartScreen 或 macOS Gatekeeper 可能会提示开发者未知。请在系统设置中允许打开，或查阅本站
                <Link to="/help/" className="text-[#9333EA] hover:underline mx-1 font-semibold">
                  帮助中心排错手册
                </Link>
                了解关于各系统安全权限与网络扩展授权的详细步骤。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
