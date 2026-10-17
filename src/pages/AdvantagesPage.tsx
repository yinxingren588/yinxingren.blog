import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Network,
  Lock,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Code2,
  Globe2,
  Laptop2,
} from 'lucide-react';

/**
 * /advantages/ 核心优势与选择价值页面
 * 
 * 规范要求：
 * 1. 唯一 H1：深度聚焦核心优势与选择价值
 * 2. 规范面包屑：首页 / 核心优势
 * 3. 涵盖：5 项有依据的核心优势、典型使用场景解析、客观选择建议
 * 4. 严禁虚构性能数值，严禁编造与竞品的虚假对比结论
 * 5. 0 新增 AFF：底部操作均使用站内 Link
 */
export const AdvantagesPage: React.FC = () => {
  useEffect(() => {
    document.title = `核心优势与架构解析 - ${BRAND_NAME}`;
    // 移除临时 noindex，设置为正常收录
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const advantagesList = [
    {
      icon: ShieldCheck,
      badge: '隐私优先',
      title: '深层协议特征混淆与指纹伪装',
      desc: '不仅进行常规数据载荷加密，更针对握手数据包头与交互特征进行深度混淆处理，规避深度报文检测（DPI）算法的特征提取，在复杂信道中大幅降低干扰几率。',
    },
    {
      icon: Network,
      badge: '网络韧性',
      title: '多路径冗余与无感自动容灾',
      desc: '国际骨干网络受突发海缆维修或区域拥堵影响时，支持在客户端或路由网关端实施多备用节点自动轮转，保障长生命周期任务（如代码构建、远程服务器管理）平稳不中断。',
    },
    {
      icon: Zap,
      badge: '开箱即用',
      title: '轻量化配置导入与协议通用性',
      desc: '采用现代主流订阅通用格式，无需手动输入冗长的底层参数。一次导入即可自动解析节点元数据并支持按需更新，极大降低非技术人员与多设备用户的上手门槛。',
    },
    {
      icon: Laptop2,
      badge: '全端漫游',
      title: '多系统全生态客户端无缝衔接',
      desc: '全面兼容主流个人桌面系统（Windows/macOS/Linux）与移动设备（iOS/Android），一个账户规格满足多终端日常交替协同，无论办公桌前还是旅途漫游皆可一致体验。',
    },
    {
      icon: Lock,
      badge: '中立透明',
      title: '坚持客观真实的第三方导航原则',
      desc: '本站清晰标注第三方推广合作属性，绝不为了赚取佣金而虚构不可信的“全网第一”或“永不掉线”承诺，始终提供真实、客观、经得起检验的技术指引与选型参考。',
    },
  ];

  const scenarioApplications = [
    {
      icon: Code2,
      role: '跨境研发工程师',
      focus: '代码托管、海外镜像拉取、云原生联调',
      value:
        '通过域名分流，实现境内外流量自动分流，国内镜像直连加速，海外 API 与 Git 专用隧道同步，杜绝命令行长时间拉取超时报错。',
    },
    {
      icon: Globe2,
      role: '出海营销与电商团队',
      focus: '多平台店铺管理、海外社媒协同、独立站运营',
      value:
        '稳定的长连接特征有助于减少管理后台频繁异地登录的二次校验摩擦，提升跨国内容发布与多账号维护的工作连续性。',
    },
    {
      icon: Laptop2,
      role: '远程办公者与数字游民',
      focus: '跨国音视频协同、开放Wi-Fi数据保护、随身接入',
      value:
        '在开放公共场所建立点对点混淆保护，如同携带随身私有加密通道，既保障核心商业资产隐私，又兼顾移动端的低功耗常驻需求。',
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
              核心优势
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与优势导言 */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>核心价值 · 理性评估</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME} 核心优势与技术选择价值
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            我们不以虚构的测速数值或拉踩竞品为噱头，而是从协议隐匿性、架构容灾能力与多端易用性三个根本维度，阐述{BRAND_NAME}（{BRAND_NAME_EN}）如何真正解决出海数字工作流中的真实痛点。
          </p>
        </div>

        {/* 一、5 项核心架构优势展板 */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              五项立足实际的技术优势
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              真实可靠的协议特性与架构能力，不编造未经证实的极端测试数据。
            </p>
          </div>

          <div className="space-y-6">
            {advantagesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-card"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-[#7E22CE] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FAF5FF] border border-[#E9D5FF]">
                          {item.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 二、典型场景的价值映射 */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
              在实际业务场景中的应用价值
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              抽象的技术特性如何转化为您日常工作中的效率与安全保障。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarioApplications.map((sc, idx) => {
              const Icon = sc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between shadow-card"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#1E1B4B]">{sc.role}</h3>
                    <div className="text-[11px] font-mono text-slate-500 pb-2 border-b border-[#E9D5FF]">
                      关注重点：{sc.focus}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sc.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 三、理性选择建议看板 */}
        <div className="p-8 rounded-2xl bg-white border border-[#E9D5FF] shadow-card mb-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-[#7E22CE] text-xs font-semibold">
              <HelpCircle className="w-4 h-4 text-[#9333EA]" />
              <span>给开发者的理性选型建议</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-[#1E1B4B]">
              如何建立合理的网络连接预期？
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              任何跨国长途网络连接均无法逃脱物理世界的光纤传输延迟与公网拥堵规律。我们建议：在日常使用中避免对“全网零延迟”抱有不切实际的幻想；合理配置基于域名的按需分流规则；常备至少两条异地备用线路；在遇到网络波动时保持平常心态并及时更新节点。
            </p>
          </div>
        </div>

        {/* 四、底部站内引导（0 AFF） */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-white to-[#F3E8FF] border border-[#E9D5FF] shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B]">
              了解方案对比，科学规划订阅
            </h3>
            <p className="text-xs text-slate-600">
              根据您的设备数、流量消耗及试错周期，查阅客观的选型维度指引。
            </p>
          </div>
          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-sm font-semibold transition-all shadow-sm flex-shrink-0"
          >
            <span>查阅方案对比指南</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesPage;
