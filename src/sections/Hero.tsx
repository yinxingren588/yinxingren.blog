import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, AFF_DISCLOSURE_TEXT } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import HeroVisual from '@/components/HeroVisual';
import {
  ShieldCheck,
  ArrowRight,
  SlidersHorizontal,
  CheckCircle2,
} from 'lucide-react';

/**
 * 首页 Hero 分区组件 (浅紫色紫罗兰主题)
 */
export const Hero: React.FC = () => {
  const sellingPoints = [
    {
      id: 'stealth',
      title: '流量混淆与隐匿传输',
      desc: '特征深度混淆，降低审查干扰与网络嗅探风险',
    },
    {
      id: 'clients',
      title: '多端客户端平稳适配',
      desc: '主流桌面与移动系统简易配置导入，开箱即用',
    },
    {
      id: 'routing',
      title: '线路冗余与平滑切换',
      desc: '多线路应急备用方案，保障跨国研发协作持续',
    },
    {
      id: 'neutral',
      title: '客观中立的选型指南',
      desc: '透明标注合作与推广属性，提供理性选型建议',
    },
  ];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-[#E9D5FF] bg-gradient-to-b from-white to-[#FAF5FF]"
    >
      {/* 优雅浅紫微光环境 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C084FC]/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* 左侧文字与操作区 (7列) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* 品牌定位短句 */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-[#9333EA]" />
              <span>第三方服务指引 · 跨境连接与隐私防护导航</span>
            </div>

            {/* 页面唯一 H1：自然融入核心关键词「隐形人」，清晰明确 */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
            >
              <span className="text-[#9333EA]">{BRAND_NAME}</span> 网络指引：
              <span className="block text-[#1E1B4B] mt-1 sm:mt-2">
                安全、低调、敏捷的跨境连接方案
              </span>
            </h1>

            {/* Hero 副标题：客观阐明服务主题与本站用途 */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              专注{BRAND_NAME}（{BRAND_NAME_EN}）网络接入特性解析、多平台客户端配置教程与服务线路选型参考。为出海团队、跨境开发者与数字游民提供清晰务实的第三方使用指南。
            </p>

            {/* CTA 操作按钮组 */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* 主 CTA：使用 OfficialLink 前往合作平台 */}
              <OfficialLink className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white font-medium text-sm sm:text-base transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50">
                <span>前往合作平台</span>
                <ArrowRight className="w-4 h-4" />
              </OfficialLink>

              {/* 次 CTA：使用普通 Link 跳转 /pricing/ 页面 */}
              <Link
                to="/pricing/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#F3E8FF] text-[#1E1B4B] hover:text-[#7E22CE] font-medium text-sm sm:text-base border border-[#E9D5FF] hover:border-[#C084FC] transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#9333EA]/30"
              >
                <SlidersHorizontal className="w-4 h-4 text-slate-500" />
                <span>查看套餐对比</span>
              </Link>
            </div>

            {/* 推广与佣金说明 */}
            <p className="text-xs text-slate-500 pt-1 leading-relaxed">
              {AFF_DISCLOSURE_TEXT}
            </p>

            {/* 4 项简短客观卖点列表 */}
            <div className="pt-6 border-t border-[#E9D5FF] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sellingPoints.map((point) => (
                <div key={point.id} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#9333EA] mt-0.5 flex-shrink-0" />
                  <div>
                    <h2 className="text-xs sm:text-sm font-semibold text-[#1E1B4B]">
                      {point.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-normal">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右侧独立品牌视觉区 (5列) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
