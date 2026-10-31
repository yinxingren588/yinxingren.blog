import React from 'react';
import { BRAND_NAME, BRAND_NAME_EN, OFFICIAL_GUARANTEE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import HeroVisual from '@/components/HeroVisual';
import {
  ShieldCheck,
  ArrowRight,
  Activity,
  DownloadCloud,
  Zap,
  CheckCircle2,
} from 'lucide-react';

/**
 * 首页 Hero 核心分区组件 (以官方纯白与品牌蓝为基准的现代 SaaS 风格)
 * 升级为国际顶级 SaaS / 官方网络加速大屏框架
 */
export const Hero: React.FC = () => {
  const metrics = [
    { label: '全球专线节点', value: '60+', unit: 'POP', desc: '覆盖东亚/北美/欧陆核心' },
    { label: '骨干链路带宽', value: '10+', unit: 'Gbps', desc: '多线 BGP 智能冗余' },
    { label: '专线平均延迟', value: '<28', unit: 'ms', desc: '沪日/深港极速直连' },
    { label: '真实计费倍率', value: '1.0', unit: 'x', desc: '官方承诺绝无虚标' },
  ];

  const features = [
    { title: 'IEPL 内网专线直连', desc: '端到端内网专线穿透，彻底告别晚高峰拥堵与剧烈抖动' },
    { title: '1.0x 真实倍率扣费', desc: '所有线路统一 1.0x 真实倍率，流量用多少扣多少，明明白白' },
    { title: '全平台客户端生态', desc: '支持 Clash / Shadowrocket / Sing-box / Surge 一键订阅导入' },
    { title: '官方直营工单保障', desc: '官方工程师团队 7×24 技术驻守，专线状态实时透明可查' },
  ];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-slate-200 bg-white"
    >
      {/* 纯净环境柔光背景 (彻底移除所有网格与暗色系) */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-100/30 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-10 w-[500px] h-[300px] bg-sky-100/20 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 左侧文字与操作区 (7列) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 官方正版旗舰定位标签 */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-semibold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>官方直营 · {BRAND_NAME}全球专线网络加速中心</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
            </div>

            {/* 页面唯一 H1：清晰官方旗舰定位与 Bing/Google 核心关键词 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
            >
              <span className="text-blue-600">
                {BRAND_NAME}官网
              </span>
              <span className="block text-slate-900 mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
                全球专线加速与跨境互联官方服务平台
              </span>
            </h1>

            {/* Hero 副标题 */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              {BRAND_NAME}（{BRAND_NAME_EN}）官方直营控制台入口。全系部署 IEPL 企业级内网专线，承诺 1.0x 真实倍率，毫秒级跨网低延迟，原生支持 4K/8K 超高清流媒体与 AI 研发模型接入。官方正版直营，保障节点长效稳定。
            </p>

            {/* CTA 操作按钮组：大屏三按钮矩阵 */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* 主 CTA：进入官方控制台 */}
              <OfficialLink className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 group">
                <Zap className="w-4 h-4 text-blue-100 group-hover:rotate-12 transition-transform" />
                <span>进入官方控制台</span>
                <ArrowRight className="w-4 h-4 text-blue-100" />
              </OfficialLink>

              {/* 次 CTA：查看专线测速 */}
              <a
                href="#network-monitor"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-sm sm:text-base border border-slate-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <Activity className="w-4 h-4 text-blue-600" />
                <span>专线实时态势</span>
              </a>

              {/* 客户端快捷入口 */}
              <a
                href="#client-matrix"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-sm sm:text-base border border-slate-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
              >
                <DownloadCloud className="w-4 h-4 text-slate-600" />
                <span>客户端下载</span>
              </a>
            </div>

            {/* 官方正版保障承诺提示 */}
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-600 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{OFFICIAL_GUARANTEE_TEXT}</span>
            </div>
          </div>

          {/* 右侧 HUD 终端大屏视觉区 (5列) */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>

        {/* 大屏 SaaS 遥测数据横幅 (4大实时核心指标) */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 transition-all shadow-sm hover:shadow-md text-left group"
              >
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {item.value}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-blue-600 font-mono">
                    {item.unit}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 官方 4 大核心技术支柱简述卡 */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left"
            >
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                {feat.title}
              </div>
              <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
