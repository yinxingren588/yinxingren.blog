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
 * /services/ 服务概览与技术方案页面
 * 
 * 规范要求：
 * 1. 唯一 H1：清晰表达服务概览与技术方案主题
 * 2. 规范面包屑：首页 / 服务概览
 * 3. 涵盖：服务概览、已核实核心能力、使用流程、多平台选择与支持说明、/downloads/ 入口
 * 4. 0 新增 AFF：所有按钮与指引全部采用站内 Link
 */
export const ServicesPage: React.FC = () => {
  useEffect(() => {
    // 确保为正常收录
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
      title: '前往合作平台订阅',
      desc: '通过本站导航直达合作服务平台收银台，在合作平台系统内安全结算并激活服务。',
    },
    {
      step: '03',
      title: '配置并开始使用',
      desc: '下载适配当前操作系统的轻量客户端，导入订阅托管地址，开启安全稳定的连接。',
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
              服务概览
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与服务概览介绍 */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>服务体系 · 技术架构</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME}机场服务概览与官网技术方案
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            深入解析隐形人机场（{BRAND_NAME_EN}）的专线传输混淆机制、容灾分流规则与全生态终端支持。作为中立的第三方使用指引平台，我们协助您全面理解隐形人官网提供的专线技术边界，打造顺畅的跨国开发与出海协作通道。
          </p>
        </div>

        {/* 一、已核实的核心技术能力 */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              已核实的核心技术特性
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              聚焦于真实可信的协议层能力，不宣称未经证实的夸大指标。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {coreCapabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1E1B4B] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E9D5FF] text-[11px] text-slate-500 flex items-center gap-1.5 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9333EA]" />
                    <span>协议规范支持</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 二、使用流程回顾（真实三步） */}
        <div className="mb-20 p-8 rounded-2xl bg-white border border-[#E9D5FF] shadow-card">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#7E22CE] font-semibold uppercase tracking-wider mb-2">
              <Workflow className="w-4 h-4 text-[#9333EA]" />
              <span>标准使用路径</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              接入与使用流程规范
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              本站为第三方导航，无自有收费或账户系统，流程均通过标准化接口完成。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] space-y-2"
              >
                <span className="text-lg font-mono font-bold text-[#9333EA]">
                  {ws.step}
                </span>
                <h3 className="text-sm font-bold text-[#1E1B4B]">{ws.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 三、多平台选择与支持说明 */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              多平台客户端生态兼容说明
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              无论在办公工作站、移动设备还是网络网关中，均能通过主流协议配置实现平稳漫游。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {platforms.map((plat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all space-y-2 shadow-card"
              >
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-[#9333EA]" />
                  <h3 className="text-sm font-bold text-[#1E1B4B]">{plat.name}</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {plat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 四、/downloads/ 明确入口卡片（站内 Link，0 AFF） */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-white to-[#F3E8FF] border border-[#E9D5FF] shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-lg sm:text-xl font-bold text-[#1E1B4B] flex items-center gap-2">
              <Download className="w-5 h-5 text-[#9333EA]" />
              <span>准备好配置您的客户端了吗？</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              查阅我们整理的全平台通用客户端下载指引、订阅规则导入步骤与各系统常见报错排查手册。
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              to="/downloads/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50"
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
