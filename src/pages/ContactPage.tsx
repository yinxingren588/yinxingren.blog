import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BRAND_NAME,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_GROUP_URL,
  AFF_DISCLOSURE_TEXT,
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
 * /contact/ 联系支持与社群交流页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 严禁创建没有后端支持的假表单（无 input/form）
 * 3. 严禁虚构电话、邮箱、地址、微信或 QQ
 * 4. 使用疑问跳转站内 /help/
 * 5. 账户、订单与业务支持：通过 OfficialLink 前往合作平台查找客服（按钮文字：“前往合作平台查找客服”）
 * 6. Telegram 按钮规则：
 *    - 两个普通 <a> 外部链接：
 *      “进入Telegram官方频道” -> TELEGRAM_CHANNEL_URL
 *      “加入Telegram交流群” -> TELEGRAM_GROUP_URL
 *    - target="_blank" rel="noopener noreferrer"
 *    - 完整保留 "+"，不转码不截断
 *    - 不使用 OfficialLink，不计入 AFF 数量
 *    - 不描述为订单处理或退款渠道，明确为公告与社群互助
 * 7. AFF 数量统计：本页严格仅 1 个 AFF 入口（查找客服按钮）
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
              联系我们
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>交流渠道 · 支持指引</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME}机场支持中心与官网联系渠道
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            为您清晰整理隐形人机场官方维护通知频道、社群直达入口以及隐形人官网客服工单排错路径。本站坚持真实透明原则，不提供不可靠的虚假联系方式或空头表单，协助您精准直达官方渠道。
          </p>
        </div>

        {/* 身份与支持边界合规声明 */}
        <div className="mb-14 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-base font-bold text-[#1E1B4B]">
                渠道性质与服务职责划分说明
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                本站（{BRAND_NAME}指引站）为第三方使用指南与服务导航平台。关于您的账号订阅、订单结算及退款审核等账户专属问题，均由合作平台后台系统独立承保与处理，社群频道与交流群不处理私人账户退款或订单事务。
              </p>
            </div>
          </div>
        </div>

        {/* 核心渠道卡片展板 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* 渠道 1：使用疑问与排错知识库（站内 Link，0 AFF） */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                使用疑问与排错指南
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                遇到客户端握手超时、系统时间偏差或规则分流配置疑惑？请优先在帮助手册中搜索解决步骤。
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-slate-600 mb-6 leading-relaxed">
                覆盖新手三步、多端漫游及 15 篇工程化排错手册，即查即用。
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9D5FF]">
              <Link
                to="/help/"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-[#1E1B4B] hover:text-[#7E22CE] text-xs sm:text-sm font-semibold transition-all shadow-subtle"
              >
                <span>查阅使用排错指南</span>
                <ArrowRight className="w-4 h-4 text-[#9333EA]" />
              </Link>
            </div>
          </div>

          {/* 渠道 2：Telegram 官方社群入口（规范专用：2个普通 <a> 标签，不计入 AFF） */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                Telegram 官方社群渠道
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                关注官方发布频道获取最新的骨干线路维护公告；加入交流群与其他跨境工作者交流使用技巧。
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-slate-600 mb-6 leading-relaxed">
                注：频道与群组供接收通知与技术互助，不作为私人订单与退款处理渠道。
              </div>
            </div>

            {/* 并列两个 Telegram 外部普通链接（保留“+”，移动端自然换行/纵向排列，键盘友好） */}
            <div className="pt-4 border-t border-[#E9D5FF] flex flex-col sm:flex-row gap-2.5">
              <a
                href={TELEGRAM_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50"
              >
                <Send className="w-3.5 h-3.5 text-[#9333EA] flex-shrink-0" />
                <span>进入Telegram官方频道</span>
              </a>

              <a
                href={TELEGRAM_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all text-center focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50"
              >
                <Users className="w-3.5 h-3.5 text-[#9333EA] flex-shrink-0" />
                <span>加入Telegram交流群</span>
              </a>
            </div>
          </div>

          {/* 渠道 3：合作平台客服支持（1 个 OfficialLink 入口） */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mb-5">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">
                账户与订单专属客服
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                涉及您在合作平台下的订单支付、账单明细确认或售后服务，请直接登录合作服务平台提交专属工单。
              </p>
              <div className="p-3.5 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[11px] text-slate-600 mb-6 leading-relaxed">
                规范声明：链接直达合作平台首页，请在平台控制台中查找在线客服与工单中心。
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9D5FF]">
              <OfficialLink className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50">
                <span>前往合作平台查找客服</span>
                <ArrowUpRight className="w-4 h-4" />
              </OfficialLink>
            </div>
          </div>
        </div>

        {/* 推广免责声明 */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs text-slate-500 leading-relaxed">
            {AFF_DISCLOSURE_TEXT}
          </p>
        </div>

        {/* 常见问题问答摘要 */}
        <div className="p-8 rounded-2xl bg-white border border-[#E9D5FF] max-w-4xl mx-auto space-y-6 shadow-card">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600" />
            <h2 className="text-lg font-bold text-[#1E1B4B]">
              联系与支持合规提示
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1E1B4B]">
                本站为何不提供电话或邮件？
              </h3>
              <p>
                本站为中立的第三方使用指引平台，未在本地存储您的任何账户或账单数据。为防止信息中转泄露，所有用户支持均通过合作平台官方工单系统或公开 Telegram 频道透明交互，绝不编造虚假联系方式。
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-[#1E1B4B]">
                社群中有人私聊推销如何处理？
              </h3>
              <p>
                官方管理人员绝对不会在 Telegram 中以任何理由私聊索要密码、卡号或发起私下转账。任何主动私聊推销均为冒充诈骗，请在社群中向管理员举报并直接拉黑屏蔽。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
