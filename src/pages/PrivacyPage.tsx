import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, SITE_URL } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Server,
  Eye,
  Lock,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

/**
 * /privacy/ 隐私政策页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 真实反映源码审查结果：无 Cookie、无 localStorage、无第三方统计追踪 Pixel
 * 3. 前端无 fetch/axios/WebSocket 远程数据提交接口
 * 4. 区分“浏览器前端行为”与“服务器基础日志”：不虚假宣称“完全不处理任何信息”，如实说明 Web 服务器标准 HTTP 访问日志
 * 5. 客观说明外链跳转行为（跳转合作平台与 Telegram 仅为用户主动点击超链接，本站不自动向外部提交任何个人数据）
 * 6. 日期固定为 2026年10月17日，不随构建动态刷新
 * 7. 整页 AFF 严格为 0
 */
export const PrivacyPage: React.FC = () => {
  useEffect(() => {
    document.title = `隐私政策与合规声明 - ${BRAND_NAME}`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="py-8 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              隐私政策
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>数据合规 · 隐私保护</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME} 平台隐私政策与数据处理说明
          </h1>

          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 font-mono">
            <span>生效日期：2026年10月17日</span>
            <span>·</span>
            <span>最后修订：2026年10月17日</span>
          </div>

          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            {BRAND_NAME}（{BRAND_NAME_EN}）信息指引站（{SITE_URL}）高度重视访问者的数字化隐私保护。本隐私政策根据本站实际代码架构与部署环境，如实说明我们如何在您浏览本站期间处理或不处理相关数据。
          </p>
        </div>

        {/* 真实源码审查核心摘要卡片 */}
        <div className="mb-12 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-2 text-left">
              <h2 className="text-sm sm:text-base font-bold text-[#1E1B4B]">
                一、前端代码与资源加载审查结论 (Codebase Audit)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                经对本站前端生产构建源码的严格静态审查，本站遵循极简隐私优先架构：
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700 font-mono">
                <div className="p-2.5 rounded bg-white border border-[#E9D5FF] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Cookie 写入：无 (0 项)</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#E9D5FF] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>本地存储 (Local/Session)：无</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#E9D5FF] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>第三方分析跟踪 (Pixel/SDK)：无</span>
                </div>
                <div className="p-2.5 rounded bg-white border border-[#E9D5FF] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>远程 API 异步提交 (fetch/ajax)：无</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 详细隐私说明章节 */}
        <div className="space-y-10 text-slate-600 text-xs sm:text-sm leading-relaxed">
          {/* 第二章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <Server className="w-4 h-4 text-[#9333EA]" />
              <span>二、浏览器页面行为与服务器日志的区分说明</span>
            </h2>
            <p>
              我们不能因为前端页面没有设计提交表单，就空洞声称“完全不产生任何网络数据”。在此客观区分两层技术事实：
            </p>
            <p>
              1. <strong>浏览器前端层面</strong>：本站为纯客户端渲染的静态单页面应用（SPA），页面中的搜索、分类切换及手风琴折叠均仅在您的浏览器内存中运行，不会向任何服务器发送回传数据或记录您的输入关键字。
            </p>
            <p>
              2. <strong>网络基础设施与宿主日志层面</strong>：当您的浏览器通过 HTTPS 协议请求本站托管的静态网页文件时，承载本站部署的 Web 服务器（如 Nginx、CDN 或静态文件托管网络提供商）会基于标准 TCP/IP 与 HTTP 协议要求，在服务器端自动记录基础访问日志（包含请求发生的时间、访问的 URL 路径、您的公网 IP 地址、HTTP 状态码及浏览器 User-Agent 标识）。这些日志是防御分布式拒绝服务（DDoS）攻击与保障网络安全所必需的基础设施技术日志，受对应托管服务商自身的安全策略监管，本站不会将其用于追踪个人身份。
            </p>
          </section>

          {/* 第三章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#9333EA]" />
              <span>三、外部字体与静态资源加载</span>
            </h2>
            <p>
              为了彻底消除字体服务商可能带来的第三方追踪风险，本站<strong>未引入 Google Fonts 或任何外部 CDN 商业字体服务</strong>，全站排版均调用访问者本地设备已有的操作系统原生系统字体栈（如 PingFang SC、Microsoft YaHei 及 Segoe UI）。页面中的所有矢量图形与 Logo 均为本地内联 SVG 代码，不产生外部第三方图片主机的探针追踪。
            </p>
          </section>

          {/* 第四章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-[#9333EA]" />
              <span>四、官方控制台连接与数据安全加密</span>
            </h2>
            <p>
              1. <strong>官方控制台连接</strong>：当您点击本站操作按钮前往隐形人官方用户控制台时，将在新标签页中开启官方安全加密会话。全流程采用高强度 SSL/TLS 加密，绝不在公网明文传输任何账户凭据。
            </p>
            <p>
              2. <strong>跳转 Telegram 频道与交流群</strong>：本站提供的 Telegram 官方频道与交流群入口仅为普通标准外部超链接（`target="_blank" rel="noopener noreferrer"`）。用户点击后由系统调用 Telegram 客户端或官方网页打开，<strong>本站不会亦无法自动向 Telegram 传输或收集您的任何个人身份凭据</strong>。
            </p>
          </section>

          {/* 第五章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#9333EA]" />
              <span>五、未成年人与个人数据权利</span>
            </h2>
            <p>
              本站面向具备完全民事行为能力的技术开发者与跨境工作者，不主动搜集任何未成年人的个人信息。鉴于本站前端不设账户中心，未建立包含个人真实身份的数据库，因此不存在可供查询、导出或删除的个人用户身份档案。
            </p>
          </section>

          {/* 第六章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#9333EA]" />
              <span>六、政策修订与公布</span>
            </h2>
            <p>
              如本站的技术架构、依赖资源或托管网络环境发生重大实质性变更，我们将及时在本页面修订隐私政策并更新生效日期。建议访问者定期查阅此页面以保持对数据处理原则的最新了解。
            </p>
          </section>
        </div>

        {/* 底部站内跳转（0 AFF） */}
        <div className="mt-16 pt-8 border-t border-[#E9D5FF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            查阅使用权责协议？请参阅{' '}
            <Link to="/terms/" className="text-[#9333EA] hover:underline font-semibold">
              服务条款与免责
            </Link>
          </div>
          <Link
            to="/"
            className="text-slate-600 hover:text-[#9333EA] transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
