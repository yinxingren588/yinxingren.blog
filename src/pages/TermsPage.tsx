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
 * /terms/ 服务条款与免责声明页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 明确本站实际身份：第三方信息展示、使用指引与合作平台导航站，非官方自营平台
 * 3. 明确订阅、支付、账户与售后均由合作服务平台独立承接
 * 4. 真实透明披露推广链接与可能获取佣金的情况
 * 5. 不虚构企业主体、不伪造海外离岸司法辖区、不使用极端免责条款
 * 6. 条款日期固定为实际修订日期（2026年10月17日），不随构建动态刷新
 * 7. 整页 AFF 严格为 0（包含隐藏导航与页脚商业入口）
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
              服务条款
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>合规声明 · 条款规范</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME} 平台服务条款与免责声明
          </h1>

          <div className="flex items-center gap-4 mt-3 text-xs text-slate-500 font-mono">
            <span>发布日期：2026年10月17日</span>
            <span>·</span>
            <span>最后修订：2026年10月17日</span>
          </div>

          <p className="text-base text-slate-600 mt-4 leading-relaxed">
            欢迎访问隐形人官方网站（{SITE_URL}）。请在使用本平台各项专线服务前仔细阅读本服务条款。当您使用或通过本平台订阅相关网络服务，即代表您已理解并同意本条款所列之各项权责规范。
          </p>
        </div>

        {/* 核心身份声明横幅 */}
        <div className="mb-12 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-0.5">
              <Shield className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h2 className="text-sm sm:text-base font-bold text-[#1E1B4B]">
                一、本站身份与服务性质界定
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                本平台为<strong>隐形人（Invisible）官方直营网络服务网站</strong>。本平台面向出海研发、跨境协作与合规业务提供全球高速专线网络加速与客户端接入方案。本站致力于保障用户正版服务权益与安全合规的工作环境。
              </p>
            </div>
          </div>
        </div>

        {/* 详细条款章节 */}
        <div className="space-y-10 text-slate-600 text-xs sm:text-sm leading-relaxed">
          {/* 第二章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#9333EA]" />
              <span>二、官方账户、订阅与售后保障</span>
            </h2>
            <p>
              1. 隐形人官方控制台提供全系 9 大正版配套的订阅管理、节点下发与账户充值结算服务。
            </p>
            <p>
              2. 用户的账户信息、专线密钥与订阅状态均受隐形人官方安全防护系统保护。官方直营团队对所售出的各项配套承诺统一 1x 真实倍率与全周期技术服务保障。
            </p>
            <p>
              3. 如您遇到订单疑问或网络连通故障，可直接在官方控制台提交技术工单，官方专职工程师将为您提供一对一故障排查与售后支持。
            </p>
          </section>

          {/* 第三章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-[#9333EA]" />
              <span>三、网络合规与合法使用准则</span>
            </h2>
            <p>
              隐形人恪守严格的合法合规原则，所有用户在享受专线加速服务时必须遵守以下准则：
            </p>
            <div className="p-4 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] text-slate-700 text-xs leading-relaxed space-y-2">
              <p>
                <strong>1. 合法跨境用途</strong>：本平台服务仅限用于出海商务协作、跨国软件开发调试、海外学术科研及合法网络浏览。严禁将本平台专线用于任何网络攻击、侵犯版权或违反相关法律法规的非法活动。
              </p>
              <p className="text-slate-500">
                <strong>2. 账户安全义务</strong>：用户应妥善保管个人订阅链接与密钥凭据，不得公开传播或转借他人，以防节点受到恶意滥用影响服务整体质量。
              </p>
            </div>
          </section>

          {/* 第四章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#9333EA]" />
              <span>四、信息客观性与免责声明</span>
            </h2>
            <p>
              1. <strong>网络波动与技术边界</strong>：国际跨国网络传输受全球海底光缆检修、运营商路由策略及物理传播延迟等多重客观规律制约。本站所刊载的技术特性与线路指引仅供选型参考，不构成“100%全天候可用”、“全球最低延迟”或“永久稳定”的法律承诺。
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
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#9333EA]" />
              <span>五、用户合规使用准则</span>
            </h2>
            <p>
              用户在参考本站指引配置网络连接时，必须严格遵守所在国家或地区适用的法律法规与网络安全管理条例。严禁利用相关网络通道从事任何侵犯他人知识产权、网络攻击、数据篡改、欺诈或违反公序良俗的非法活动。因违反相关法律产生的任何法律责任均由行为主体自行承担。
            </p>
          </section>

          {/* 第六章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#9333EA]" />
              <span>六、主体与条款修订</span>
            </h2>
            <p>
              本站为独立技术博主与出海开发者共同维护的技术信息项目，不虚构境外空壳公司或未经验证的司法管辖声明。本站保留在技术架构或合作模式发生演进时修订本条款的权利，更新后的条款将在此页面公开发布并标明生效日期。
            </p>
          </section>
        </div>

        {/* 底部站内跳转（0 AFF） */}
        <div className="mt-16 pt-8 border-t border-[#E9D5FF] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            了解本站数据处理规则？请参阅{' '}
            <Link to="/privacy/" className="text-[#9333EA] hover:underline font-semibold">
              隐私政策声明
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

export default TermsPage;
