import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Monitor,
  Download,
  CheckCircle2,
  Workflow,
  Sparkles,
} from 'lucide-react';

/**
 * /services/ 服务概览与技术方案页面 (深色极客科技感暗黑紫主题)
 */
export const ServicesPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const coreCapabilities = [
    {
      icon: ShieldCheck,
      title: '高强度协议特征混淆',
      description:
        '采用先进加密隧道封装技术，将通信数据特征与常规 HTTPS 流量深度拟合，有效规避公共网关的主动探测与特征识别，保障通信会话在复杂网络环境中平稳维系。',
    },
    {
      icon: Layers,
      title: '多路径冗余容灾架构',
      description:
        '骨干节点之间支持基于健康度的智能动态切换。当某条海底光缆或特定跨洋链路发生偶发丢包与维护时，客户端可平滑切换至备用路径，避免研发会话中断。',
    },
    {
      icon: Terminal,
      title: '细粒度分流与开发环境兼容',
      description:
        '完美支持基于域名后缀、IP CIDR 的按需分流规则。国内常规访问直连提速，海外代码托管与云平台 API 经由专用隧道加速，极大节约不必要的跨国带宽消耗。',
    },
    {
      icon: Cpu,
      title: '轻量化与低系统开销',
      description:
        '核心协议栈针对主流硬件架构深度优化，客户端常驻后台内存占用微小，CPU 消耗低，适配各类轻薄笔记本与嵌入式边缘终端。',
    },
  ];

  const platforms = [
    {
      name: 'Windows',
      desc: '支持 Windows 10/11，提供图形化一键导入与系统代理无缝分流。',
    },
    {
      name: 'macOS',
      desc: '原生支持 Apple Silicon (M系列) 与 Intel 芯片，深度集成系统网络设置。',
    },
    {
      name: 'Linux',
      desc: '支持命令行 CLI 与守护进程模式，适合服务器开发与自动化 CI/CD 环境。',
    },
    {
      name: 'iOS / iPadOS',
      desc: '完美适配主流通用代理应用，支持按需规则与快捷指令自动化切换。',
    },
    {
      name: 'Android',
      desc: '适配现代 Android 系统，具备应用级独立分流与常驻网络保护模式。',
    },
    {
      name: '路由网关设备',
      desc: '支持在兼容的软路由与智能网关中配置透明代理，实现全屋或办公区统一加速。',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: '选型与规划',
      desc: '在本站客观查阅 4 大选型考量维度，根据日常团队规模与流量消耗明确方案目标。',
    },
    {
      step: '02',
      title: '登录官方控制台订阅',
      desc: '登录隐形人官方用户控制台，在线安全结算并实时激活专属专线节点凭证。',
    },
    {
      step: '03',
      title: '配置并开始使用',
      desc: '下载适配当前操作系统的轻量客户端，导入订阅托管地址，开启安全稳定的连接。',
    },
  ];

  return (
    <div className="py-8 sm:py-16 bg-[#08090E] min-h-screen text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
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
              服务概览
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与服务概览介绍 */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>ARCHITECTURE & CAPABILITIES · 服务体系与技术架构</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {BRAND_NAME} 服务概览与官方技术方案
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            深入解析隐形人（{BRAND_NAME_EN}）官方专线传输混淆机制、智能容灾分流规则与全生态终端支持。作为官方直营服务门户，我们协助您快速理解技术架构，打造顺畅无阻的跨国开发与出海协作通道。
          </p>
        </div>

        {/* 一、已核实的核心技术能力 */}
        <div className="mb-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              已核实的核心技术特性
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              聚焦于真实可信的协议层能力，全系承诺 1.0x 真实计费倍率，不宣称未经证实的夸大指标。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {coreCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-3xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-purple-500/15 text-[11px] text-purple-300/80 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>官方协议标准与 1.0x 真实保障</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 二、使用流程回顾 */}
        <div className="mb-20 p-8 rounded-3xl bg-[#0F121C]/90 border border-purple-500/20 shadow-lg">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 font-semibold uppercase tracking-wider">
              <Workflow className="w-4 h-4 text-purple-400" />
              <span>标准接入流程</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              接入与使用流程规范
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              隐形人官方直营，统一官方控制台管理，全流程加密保障账户安全。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/15 space-y-2"
              >
                <span className="text-lg font-mono font-bold text-purple-400">
                  {ws.step}
                </span>
                <h3 className="text-sm font-bold text-white">{ws.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 三、多平台选择与支持说明 */}
        <div className="mb-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              多平台客户端生态兼容说明
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              无论在办公工作站、移动设备还是网络网关中，均能通过主流协议配置实现平稳漫游。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {platforms.map((plat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0F121C]/80 border border-purple-500/20 hover:border-purple-400/50 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-purple-400" />
                  <h3 className="text-sm font-bold text-white">{plat.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {plat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 四、/downloads/ 明确入口卡片 */}
        <div className="p-8 rounded-3xl bg-[#0F121C]/90 border border-purple-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_0_40px_rgba(147,51,234,0.15)]">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Download className="w-5 h-5 text-purple-400" />
              <span>准备好配置您的客户端了吗？</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              查阅我们整理的全平台通用客户端下载指引、订阅规则导入步骤与各系统常见报错排查手册。
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/downloads/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            >
              <span>前往客户端下载中心</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
