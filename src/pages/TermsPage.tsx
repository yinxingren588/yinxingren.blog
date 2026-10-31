import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, SITE_URL } from '@/config/site';
import {
  ChevronRight,
  Shield,
  FileText,
  AlertCircle,
  HelpCircle,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

/**
 * /terms/ 服务条款与免责声明页面 (深色极客科技感暗黑紫主题)
 */
export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = `服务条款与免责声明 - ${BRAND_NAME}`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  return (
    <div className="py-8 sm:py-16 bg-[#08090E] min-h-screen text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
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
              服务条款
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs text-purple-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>TERMS OF SERVICE · 官方条款规范</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {BRAND_NAME} 平台服务条款与合规声明
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>发布日期：2026年10月17日</span>
            <span>·</span>
            <span>最后修订：2026年10月31日</span>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            欢迎访问隐形人官方网站（{SITE_URL}）。请在使用本平台各项专线服务前仔细阅读本服务条款。当您使用或通过本平台订阅相关网络服务，即代表您已理解并同意本条款所列之各项权责规范。
          </p>
        </div>

        {/* 核心身份声明横幅 */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-[#0F121C]/90 border border-purple-500/30 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300 flex-shrink-0 mt-0.5">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-base font-bold text-white">
                一、本站身份与服务性质界定
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                本平台为<strong>隐形人（Invisible）官方直营网络服务网站</strong>。本平台面向出海研发、跨境协作与合规业务提供全球高速专线网络加速与客户端接入方案。本站致力于保障用户正版服务权益与安全合规的工作环境。
              </p>
            </div>
          </div>
        </div>

        {/* 详细条款章节 */}
        <div className="space-y-10 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {/* 第二章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" />
              <span>二、官方账户、订阅与售后保障</span>
            </h2>
            <p>
              1. 隐形人官方控制台提供全系 9 大正版配套的订阅管理、节点下发与账户充值结算服务。
            </p>
            <p>
              2. 用户的账户信息、专线密钥与订阅状态均受隐形人官方安全防护系统保护。官方直营团队对所售出的各项配套承诺统一 1.0x 真实倍率与全周期技术服务保障。
            </p>
            <p>
              3. 如您遇到订单疑问或网络连通故障，可直接在官方控制台提交技术工单，官方专职工程师将为您提供一对一故障排查与售后支持。
            </p>
          </section>

          {/* 第三章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-purple-400" />
              <span>三、网络合规与合法使用准则</span>
            </h2>
            <p>
              隐形人恪守严格的合法合规原则，所有用户在享受专线加速服务时必须遵守以下准则：
            </p>
            <div className="p-4 rounded-2xl bg-[#0F121C]/80 border border-purple-500/20 text-slate-300 text-xs leading-relaxed space-y-2">
              <p>
                <strong>1. 合法跨境用途</strong>：本平台服务仅限用于出海商务协作、跨国软件开发调试、海外学术科研及合法网络浏览。严禁将本平台专线用于任何网络攻击、侵犯版权或违反相关法律法规的非法活动。
              </p>
              <p className="text-slate-400">
                <strong>2. 账户安全义务</strong>：用户应妥善保管个人订阅链接与密钥凭据，不得公开传播或转借他人，以防节点受到恶意滥用影响服务整体质量。
              </p>
            </div>
          </section>

          {/* 第四章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-purple-400" />
              <span>四、信息客观性与免责声明</span>
            </h2>
            <p>
              1. <strong>网络波动与技术边界</strong>：国际跨国网络传输受全球海底光缆检修、运营商路由策略及物理传播延迟等多重客观规律制约。本站所刊载的技术特性与线路指引仅供选型参考，不构成“100%全天候可用”或“永久零延迟”的虚假承诺。
            </p>
            <p>
              2. <strong>服务动态调度</strong>：全球骨干专线网络受海底光缆维修及国际运营商策略影响具备动态性。隐形人技术团队会实施智能平滑容灾调度，具体实时可用节点以控制台及客户端清单为准。
            </p>
            <p>
              3. <strong>合理免责边界</strong>：本条款恪守公平诚实原则，隐形人官方在法律允许范围内，对因全球不可抗力海缆断裂或公共网络骨干突发中断等非主观原因造成的短暂波动提供免责与应急修复说明。
            </p>
          </section>

          {/* 第五章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-purple-400" />
              <span>五、用户合规使用准则</span>
            </h2>
            <p>
              用户在参考本站指引配置网络连接时，必须严格遵守所在国家或地区适用的法律法规与网络安全管理条例。严禁利用相关网络通道从事任何侵犯他人知识产权、网络攻击、数据篡改、欺诈或违反公序良俗的非法活动。因违反相关法律产生的任何法律责任均由行为主体自行承担。
            </p>
          </section>
        </div>

        {/* 底部站内跳转 */}
        <div className="mt-16 pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            了解本站数据处理规则？请参阅{' '}
            <Link to="/privacy/" className="text-purple-400 hover:text-purple-300 font-semibold hover:underline">
              隐私政策声明
            </Link>
          </div>
          <Link
            to="/"
            className="text-slate-400 hover:text-purple-300 transition-colors"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
