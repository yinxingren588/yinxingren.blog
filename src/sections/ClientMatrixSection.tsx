import React, { useState } from 'react';
import {
  Monitor,
  Apple,
  Smartphone,
  Terminal,
  Wifi,
  Download,
  CheckCircle2,
  ArrowRight,
  ArrowDownToLine,
} from 'lucide-react';
import OfficialLink from '@/components/OfficialLink';
import {
  WINDOWS_CLIENT_DOWNLOAD_URL,
  WINDOWS_CLIENT_VERSION,
  WINDOWS_CLIENT_FILENAME,
} from '@/config/site';

export const ClientMatrixSection: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<string>('windows');

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: Monitor,
      title: 'Windows 桌面客户端',
      kernel: '隐形人专属客户端 v3.0.0 (支持 Clash / Sing-box 内核)',
      compatibility: 'Windows 10 / 11 (64位 & ARM64)',
      version: WINDOWS_CLIENT_VERSION,
      downloadUrl: WINDOWS_CLIENT_DOWNLOAD_URL,
      filename: WINDOWS_CLIENT_FILENAME,
      features: [
        '内嵌 TUN 虚拟网卡模式，全面接管系统流量与游戏',
        '多线路测速与智能故障自动切换，原生支持 4K/8K 与 AI 加速',
        '免繁琐安装，解压即用，开机自启动与静默托盘运行',
      ],
      quickSteps: '1. 点击“立即下载 Windows 客户端”获取 .zip 包 -> 2. 解压运行客户端 -> 3. 点击控制台“一键导入”或粘贴订阅链接即可极速连接。',
      primaryAction: '立即下载 Windows 客户端 (v3.0.0)',
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: Apple,
      title: 'macOS 苹果电脑客户端',
      kernel: 'Clash Verge Rev / Surge / Sing-box',
      compatibility: 'macOS 12+ (原生适配 Apple M1/M2/M3/M4 & Intel)',
      version: 'v1.7.7 Universal 通用版',
      features: [
        '原生适配 Apple Silicon 芯片，超低 CPU 与电池能耗',
        '深色极简顶栏状态菜单，一键快速切换线路',
        'DNS 防泄露保护与分流规则智能更新',
      ],
      quickSteps: '1. 安装 Verge 或 Surge -> 2. 官方控制台复制订阅或一键导入 -> 3. 开启 TUN 模式畅享极速。',
      primaryAction: '进入官方控制台下载 macOS 配套',
    },
    {
      id: 'ios',
      name: 'iOS / iPadOS',
      icon: Smartphone,
      title: 'iOS / iPadOS 苹果手机平板',
      kernel: 'Shadowrocket (小火箭) / Quantumult X / Loon / Stash',
      compatibility: 'iOS 14.0+ (iPhone 与 iPad 全系适配)',
      version: 'App Store 正版生态',
      features: [
        '支持使用海外 Apple ID 在 App Store 安装 Shadowrocket',
        '官方控制台扫码即刻完成订阅配置注入',
        '原生低功耗后台常驻，锁屏不断连',
      ],
      quickSteps: '1. 打开海外 Apple ID 登录 App Store 安装小火箭 -> 2. 扫描控制台配置二维码 -> 3. 点击一键连接。',
      primaryAction: '进入控制台获取 iOS 订阅扫码',
    },
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      title: 'Android 安卓手机平板',
      kernel: 'Clash Meta for Android / v2rayNG / Sing-box',
      compatibility: 'Android 8.0+ (适配华为、小米、OPPO、vivo、三星等)',
      version: 'v2.10.1 官方直链版',
      features: [
        '防系统休眠与保活机制，避免微信消息收发延迟',
        '按应用独立分流设置（国内应用直连，海外应用专线加速）',
        '官方提供安全无毒 APK 原生直链下载',
      ],
      quickSteps: '1. 下载 APK 安装包 -> 2. 控制台点击“导入到 Clash” -> 3. 启动开关即可使用。',
      primaryAction: '进入官方控制台下载 Android 配套',
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: Terminal,
      title: 'Linux 发行版系统',
      kernel: 'Clash Verge GUI / ShellClash / Mihomo Core',
      compatibility: 'Ubuntu / Debian / CentOS / Arch Linux',
      version: 'CLI & GUI 全兼容',
      features: [
        '支持 Systemd 守护进程常驻后台运行',
        '提供 Shell 一键快速安装与订阅更新脚本',
        '完美支持服务器与开发环境终端代理环境导出',
      ],
      quickSteps: '控制台知识库提供终端 curl 一键安装脚本与全局 export 环境变量指南。',
      primaryAction: '查看 Linux 部署脚本与订阅',
    },
    {
      id: 'router',
      name: '软路由网关',
      icon: Wifi,
      title: 'OpenWrt / 软路由网关',
      kernel: 'OpenClash / Passwall / SSRP',
      compatibility: 'OpenWrt / iStoreOS / 旁路由 / 群晖 NAS',
      version: '全屋智能网关接入',
      features: [
        '全屋所有设备（手机、电视、PS5、Switch）免客户端全自动化加速',
        'PS5 / Xbox 联机游戏超低延迟 NAT 类型开放',
        'Apple TV / 索尼电视 4K/8K 杜比视界高码率原盘流畅播放',
      ],
      quickSteps: '在路由器插件中订阅管理内粘贴官方订阅链接，设置为 Fake-IP 混合模式即可全局生效。',
      primaryAction: '查看路由器配置指引与订阅',
    },
  ];

  const currentPlat = platforms.find((p) => p.id === activePlatform) || platforms[0];

  return (
    <section
      id="client-matrix"
      className="py-16 sm:py-24 border-b border-slate-200 bg-slate-50/60 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题说明 */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Download className="w-3.5 h-3.5 text-blue-600" />
            <span>CROSS-PLATFORM CLIENT MATRIX · 全生态客户端下载</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            全平台官方客户端下载与一键配置
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            支持 Windows、macOS、iOS、Android、Linux 及全系软路由。官方提供全套标准化一键订阅协议，开箱即用，0 门槛秒速接入。
          </p>
        </div>

        {/* 平台切换器按钮组 */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isSelected = activePlatform === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePlatform(p.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{p.name}</span>
              </button>
            );
          })}
        </div>

        {/* 选中平台的详细参数与下载面板 */}
        <div className="mt-8 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 左侧客户端信息 (7列) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
                  <currentPlat.icon className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {currentPlat.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-600 mt-1">
                    推荐内核: {currentPlat.kernel}
                  </div>
                </div>
              </div>

              {/* 兼容性与版本 */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700">
                  兼容系统: {currentPlat.compatibility}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
                  {currentPlat.version}
                </span>
              </div>

              {/* 特性清单 */}
              <div className="space-y-2.5 pt-2">
                {currentPlat.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* 简易接入步骤 */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <span className="font-bold text-blue-700 block mb-1">⚡ 极速接入指南：</span>
                {currentPlat.quickSteps}
              </div>

              {/* 主操作按钮组 */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {currentPlat.downloadUrl ? (
                  <a
                    href={currentPlat.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 group"
                  >
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>立即下载 Windows 客户端 (.zip)</span>
                    <ArrowDownToLine className="w-4 h-4" />
                  </a>
                ) : (
                  <OfficialLink className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm group">
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>{currentPlat.primaryAction}</span>
                    <ArrowRight className="w-4 h-4" />
                  </OfficialLink>
                )}

                <OfficialLink className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs sm:text-sm border border-slate-200 transition-all">
                  <span>进入官方控制台获取订阅</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </OfficialLink>
              </div>
            </div>

            {/* 右侧客户端配置示意终端 (5列) */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-3 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px] text-slate-400">
                <span>CONFIG GENERATOR // AUTO-SYNC</span>
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  READY
                </span>
              </div>

              <div className="space-y-2 text-slate-400 text-[11px]">
                <div className="text-blue-400"># 官方订阅核心接口标准</div>
                <div>订阅协议: Clash / Sing-box / V2Ray / Surge</div>
                <div>加密算法: ChaCha20-Poly1305 / TLS 1.3</div>
                <div>规则模式: 智能分流 (Rule-based Routing)</div>
                <div>节点过滤: 自动剔除离线备用，动态保活</div>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <div className="text-[10px] text-slate-400 mb-1.5">官方控制台订阅导入示范：</div>
                <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-blue-300 flex items-center justify-between overflow-hidden">
                  <span className="truncate mr-2 text-[11px]">
                    https://api.yinxingren.blog/sub?token=official_sub_key...
                  </span>
                  <OfficialLink className="flex-shrink-0 text-[10px] px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white transition-colors font-sans font-semibold">
                    获取订阅
                  </OfficialLink>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 leading-relaxed pt-1">
                提示：订阅链接包含个人私密节点凭据，请在官方控制台登录后一键导入，切勿分享给他人。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMatrixSection;
