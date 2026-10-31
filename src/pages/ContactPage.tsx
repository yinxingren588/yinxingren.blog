import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BRAND_NAME,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_GROUP_URL,
  OFFICIAL_GUARANTEE_TEXT,
} from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  ChevronRight,
  Send,
  Users,
  Headphones,
  HelpCircle,
  ArrowRight,
  ArrowUpRight,
  AlertCircle,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

/**
 * /contact/ 官方支持中心与联系渠道页面
 */
export const ContactPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

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
              官方支持
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>官方服务 · 全方位支持</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME} 官方支持中心与联络渠道
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            为您提供官方技术工单服务、官方 Telegram 公告发布频道、社群技术交流入口及常见疑难排错手册。官方直营售后团队全天候守护您的专线网络稳定。
          </p>
        </div>

        {/* 官方服务保障声明 */}
        <div className="mb-14 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-base font-bold text-[#1E1B4B]">
                官方专属售后服务保障
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                {BRAND_NAME}为官方直营品牌。针对您的账户订阅、专线节点配置、客户端导入及网络连通问题，均由官方专业运维与技术支持团队直接负责，保障响应迅速、安全保密。
              </p>
            </div>
          </div>
        </div>

        {/* 核心渠道卡片展板 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 渠道 1：使用疑问与排错知识库 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                技术知识库与排错手册
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                遇到客户端连接超时、时间不同步或代理分流规则疑惑？请优先在官方排错手册中检索快速解决指南。
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-slate-600 mb-6 leading-relaxed">
                收录全端客户端配置、多设备漫游及常见网络故障排查步骤，即查即用。
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9D5FF]">
              <Link
                to="/help/"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-[#1E1B4B] hover:text-[#7E22CE] text-xs sm:text-sm font-semibold transition-all shadow-subtle"
              >
                <span>查阅技术知识库</span>
                <ArrowRight className="w-4 h-4 text-[#9333EA]" />
              </Link>
            </div>
          </div>

          {/* 渠道 2：Telegram 官方社群入口 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                Telegram 官方社群渠道
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                关注官方公告频道获取最新的骨干线路维护通知与活动更新；加入官方交流群与其他出海人员交流经验。
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-slate-600 mb-6 leading-relaxed">
                注：频道与群组用于实时通知发布与交流，官方客服不在此索取敏感密码。
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9D5FF] flex flex-col sm:flex-row gap-2.5">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50"
              >
                <Send className="w-3.5 h-3.5 text-[#9333EA] flex-shrink-0" />
                <span>进入官方公告频道</span>
              </a>

              <a
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50"
              >
                <Users className="w-3.5 h-3.5 text-[#9333EA] flex-shrink-0" />
                <span>加入官方交流群</span>
              </a>
            </div>
          </div>

          {/* 渠道 3：官方工单客服支持 */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                官方在线技术工单
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                涉及您的账户订单、网络节点连通诊断或专属技术咨询，请登录官方控制中心提交在线服务工单。
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-slate-600 mb-6 leading-relaxed">
                官方直属技术工程师为您提供端到端排错支持与快速处理。
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9D5FF]">
              <OfficialLink className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50">
                <span>进入控制台提交工单</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>
            </div>
          </div>
        </div>

        {/* 官方服务承诺 */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs text-slate-500 leading-relaxed">
            {OFFICIAL_GUARANTEE_TEXT}
          </p>
        </div>

        {/* 安全防诈骗警示提示 */}
        <div className="p-8 rounded-2xl bg-white border border-[#E9D5FF] max-w-4xl mx-auto space-y-6 shadow-card">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-bold text-[#1E1B4B]">
              官方服务与安全准则提示
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1E1B4B]">
                为何优先推荐工单系统服务？
              </h3>
              <p>
                官方控制台工单具备端到端加密与严格身份认证，可直接调取专线节点的实时遥测状态进行诊断，不仅响应精准，而且杜绝任何第三方中介转交信息的信息泄露风险。
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1E1B4B]">
                谨防冒充官方的诈骗行为
              </h3>
              <p>
                隐形人官方管理人员绝不会在 Telegram 或任何平台主动私聊索要用户密码或要求个人向私人账户转账。任何私聊收费均为冒充骗子，请直接拉黑并向社群管理员举报。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
