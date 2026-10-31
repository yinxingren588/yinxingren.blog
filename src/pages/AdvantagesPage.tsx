import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Network,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Code2,
  Globe2,
  Laptop2,
} from 'lucide-react';

/**
 * /advantages/ 核心优势与选择价值页面 (深色极客科技感暗黑紫主题)
 */
export const AdvantagesPage: React.FC = () => {
  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
  }, []);

  const advantagesList = [
    {
      icon: ShieldCheck,
      badge: '传输隐匿',
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
      icon: ShieldCheck,
      badge: '官方正品',
      title: '官方直营保障与 1.0x 真实倍率承诺',
      desc: '隐形人官方直营保证，全线配备优质高速专线与统一 1.0x 真实计费倍率，杜绝暗扣虚标，提供官方专属技术售后与长期节点维护保障。',
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
    <div className="py-8 sm:py-16 bg-white min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex items-center space-x-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-blue-600 font-semibold" aria-current="page">
              核心优势
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与优势导言 */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>CORE VALUES & EVALUATION · 核心价值与理性评估</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {BRAND_NAME} 核心专线优势与官方架构价值
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            我们不以虚构的测速数值或拉踩竞品为噱头，而是从协议隐匿性、专线架构容灾能力与多端易用性三个根本维度，阐述隐形人（{BRAND_NAME_EN}）官方专线如何从根本上解决出海数字工作流中的真实痛点，为全球跨国团队提供安全可靠的官方连接基座。
          </p>
        </div>

        {/* 一、5 项核心架构优势展板 */}
        <div className="mb-20">
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              五项立足实际的技术优势
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              真实可靠的协议特性与架构能力，承诺 1.0x 真实倍率，不编造未经证实的极端测试数据。
            </p>
          </div>

          <div className="space-y-6">
            {advantagesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-blue-700 font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200">
                          {item.badge}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
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
          <div className="mb-8 space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              在实际业务场景中的应用价值
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              抽象的技术特性如何转化为您日常工作中的效率与安全保障。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarioApplications.map((sc, idx) => {
              const Icon = sc.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{sc.role}</h3>
                    <div className="text-[11px] font-mono text-blue-600 pb-2 border-b border-slate-100">
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
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 mb-16 space-y-4">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold font-mono">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>给开发者的理性选型建议</span>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            如何建立合理的网络连接预期？
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            任何跨国长途网络连接均无法逃脱物理世界的光纤传输延迟与公网拥堵规律。我们建议：在日常使用中避免对“全网零延迟”抱有不切实际的幻想；合理配置基于域名的按需分流规则；常备至少两条异地备用线路；在遇到网络波动时保持平常心态并及时更新节点。
          </p>
        </div>

        {/* 四、底部站内引导 */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              了解方案对比，科学规划订阅
            </h3>
            <p className="text-xs text-slate-500">
              根据您的设备数、流量消耗及试错周期，查阅客观的选型维度指引。
            </p>
          </div>
          <Link
            to="/pricing/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm flex-shrink-0"
          >
            <span>查阅官方 9 大配套指南</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesPage;
