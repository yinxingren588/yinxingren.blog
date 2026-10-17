import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN, SITE_URL } from '@/config/site';
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
            欢迎访问{BRAND_NAME}指南站（{SITE_URL}）。请在使用本站各项信息前仔细阅读本条款。当您继续浏览或通过本站指引使用相关服务，即代表您已理解并同意本条款所列之各项权责规范。
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
                本站系针对“{BRAND_NAME}（{BRAND_NAME_EN}）”网络方案构建的<strong>中立第三方信息展示、使用指引与合作平台导航网站</strong>。本站不持有任何未经验证的官方独家代理或直营资质，亦不声称自身为品牌自营官方网站。本站设立之核心宗旨在于为跨境出海人员提供客观的技术解读、客户端导入指引与避坑指南。
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
              <span>二、第三方交易、账户与售后权责</span>
            </h2>
            <p>
              1. 本站自身<strong>不提供任何直接收费订阅功能、不设立用户资金充值收银台，亦不设立用户支付账户体系</strong>。
            </p>
            <p>
              2. 当您点击本站导航或套餐对比链接时，浏览器将引导您访问合规的合作服务平台。您在合作平台所发生的账户注册、套餐订阅、支付结算、发票开具、服务开通及售后工单咨询，均受您与该合作平台之间签署的用户服务协议管辖。
            </p>
            <p>
              3. 如您在合作平台遇到订单异常、网络配置中断或退款诉求，应直接通过合作平台用户中心的在线客服或官方工单系统提交处理。本站作为第三方信息站点，无权亦无法调取或干预合作平台的内部订单数据。
            </p>
          </section>

          {/* 第三章 */}
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-[#9333EA]" />
              <span>三、推广链接与商业佣金披露 (Affiliate Disclosure)</span>
            </h2>
            <p>
              本站秉承透明诚实原则，依据行业惯例对商业合作关系进行充分公示：
            </p>
            <div className="p-4 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] text-slate-700 text-xs leading-relaxed space-y-2">
              <p>
                <strong>“本站包含推广链接，通过相关链接完成订阅，本站可能获得佣金。实际价格、服务与售后以合作平台为准。”</strong>
              </p>
              <p className="text-slate-500">
                该项推广佣金用于维持本站服务器托管、内容维护及排错教程编写等日常运营成本。我们承诺不因为佣金合作而刻意隐瞒产品局限或编造不切实际的性能承诺。
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
              2. <strong>内容时效性</strong>：合作平台可能会动态调整套餐价格、活动规格或节点可用性。本站尽力保持教程的时效性，但不对第三方平台突发规则变动导致的短暂信息延迟承担担保责任，最终一切参数以合作平台当前结算页与客户端显示为准。
            </p>
            <p>
              3. <strong>合理免责边界</strong>：本条款不包含任何剥夺用户法定基本权利的极端霸王条款，本站仅在法律允许的范围内对因不可抗力、公网骨干故障或第三方平台策略调整所导致的使用中断提供免责说明。
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
