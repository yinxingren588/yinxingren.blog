import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

export interface HelpArticle {
  id: string;
  category: 'getting-started' | 'plan-selection' | 'client-setup' | 'multi-device' | 'troubleshooting';
  categoryName: string;
  title: string;
  content: string;
  tags: string[];
}

export const HELP_ARTICLES: HelpArticle[] = [
  // 1. 新手入门
  {
    id: 'intro-guide',
    category: 'getting-started',
    categoryName: '新手入门',
    title: `初次了解${BRAND_NAME}：官方品牌定位与服务标准`,
    content: `${BRAND_NAME}（${BRAND_NAME_EN}）为官方直营的高速专线网络服务门户，专注于为跨境出海人员、跨国企业团队与数字游民提供低延迟、高隐匿的全球专线接入方案。全系 9 大配套均配备专线网络与统一 1x 真实计费倍率，提供官方直属技术售后服务。`,
    tags: ['新手入门', '品牌官方', '服务标准'],
  },
  {
    id: 'verify-entry',
    category: 'getting-started',
    categoryName: '新手入门',
    title: `如何认准${BRAND_NAME}官网与官方正版控制台？`,
    content: `请认准官方网站域名（yinxingren.blog）及本站提供的官方控制台直达通道。切勿轻信搜索引擎上的仿冒套壳站或非官方网盘直链。官方控制台全程采用高强度 SSL/TLS 加密，确保您的账户数据与专线密钥安全。`,
    tags: ['官方入口', '正版核验', '安全防伪'],
  },
  {
    id: 'quick-start-3steps',
    category: 'getting-started',
    categoryName: '新手入门',
    title: '从零开始建立连接的标准化官方三步流程',
    content: '第一步：在官方 9 大精选配套中选择适合自身业务的规格；第二步：进入官方控制台完成在线订阅并激活专线凭证；第三步：下载官方推荐客户端，一键导入专属订阅，秒级开启高速稳定的专线连接。',
    tags: ['快速开始', '配置流程', '新手教程'],
  },

  // 2. 套餐与订阅
  {
    id: 'choose-right-plan',
    category: 'plan-selection',
    categoryName: '套餐与订阅',
    title: '如何根据日常网络任务选择合适官方规格？',
    content: '轻度检索与日常查阅推荐选择星耀风暴或白银纪元等高性价比年付规格；若涉及跨国团队代码协同、海外容器镜像持续构建或多平台出海运营，建议选购并发许可更多、流量充沛的铂金/钻石至臻方案。如只需临时应急备用，亦可选配永不过期的一次性独立买断流量包。',
    tags: ['套餐选型', '流量评估', '规格对比'],
  },
  {
    id: 'traffic-reset-rules',
    category: 'plan-selection',
    categoryName: '套餐与订阅',
    title: '流量配额与账单重置周期的重要说明',
    content: '官方周期方案（月付/季付/半年付/年付）通常在订单生效账单日循环重置流量配额；一次性买断流量包永不过期，用完为止。您可随时登录官方控制台仪表盘查看实时流量消耗与下次重置日期。',
    tags: ['流量重置', '账单周期', '配额提醒'],
  },
  {
    id: 'billing-disclaimer',
    category: 'plan-selection',
    categoryName: '套餐与订阅',
    title: '关于官方定价与 1x 真实倍率承诺',
    content: '隐形人官方恪守诚实定价原则，全系套餐均统一下发 1x 真实计费专线节点，杜绝市场上常见的暗扣跑量与虚标套路。所有套餐价格与限时优惠均以官方控制台结账页面显示为准。',
    tags: ['价格透明', '1x真实倍率', '官方承诺'],
  },

  // 3. 客户端配置
  {
    id: 'client-get-guide',
    category: 'client-setup',
    categoryName: '客户端配置',
    title: '如何安全获取对应操作系统的官方客户端？',
    content: '订阅激活后，登录隐形人官方用户中心，在控制台“快速添加订阅”或“客户端下载”栏目中，直接获取经过官方安全哈希校验的安装包或一键导入链接。请勿使用非官方来源修改版安装器，以保障设备安全。',
    tags: ['客户端获取', '下载安全', '官方通道'],
  },
  {
    id: 'subscription-import',
    category: 'client-setup',
    categoryName: '客户端配置',
    title: '通用官方订阅链接的导入与更新步骤',
    content: '复制官方控制台生成的专属订阅 URL，打开客户端配置页面选择“从 URL 导入/添加配置”，粘贴并保存。建议在客户端设置中开启“自动定时更新”，以便及时获取官方专线节点的调度优化。',
    tags: ['订阅导入', '配置更新', '节点同步'],
  },
  {
    id: 'split-routing-mode',
    category: 'client-setup',
    categoryName: '客户端配置',
    title: '为什么推荐使用“规则分流”而非全局模式？',
    content: '“规则分流（Rule-based Routing）”能智能识别流量类型：国内常见网站与日常办公软件走本地宽带直连，保证低延迟；仅将海外代码库与跨境业务通过专线隧道转发，既能节约宝贵的订阅流量，又能提升日常网络响应。',
    tags: ['分流规则', '智能路由', '带宽节约'],
  },

  // 4. 多设备协同
  {
    id: 'multi-device-concurrency',
    category: 'multi-device',
    categoryName: '多设备协同',
    title: '如何合理分配设备并发配额与多端漫游？',
    content: '每个官方套餐均明确标明允许的“设备并发数”。在同一局域网下多设备漫游时，建议根据方案配额合理规划登录终端。若有多人跨国协作需求，建议选用高并发的王者定制或钻石方案，防止因超额导致连接中断。',
    tags: ['设备并发', '多端漫游', '团队协作'],
  },
  {
    id: 'router-deployment',
    category: 'multi-device',
    categoryName: '多设备协同',
    title: '在软路由或智能网关部署的注意事项',
    content: '若在软路由中配置官方订阅实现全屋或全办公室透明加速，请务必在固件中启用严格的 DNS 防污染分流与防回环策略，并合理设置本地 UDP 转发，避免多设备并发时引发路由内存溢出。',
    tags: ['软路由', '网关配置', '家庭全域加速'],
  },

  // 5. 排错与网络
  {
    id: 'time-sync-error',
    category: 'troubleshooting',
    categoryName: '排错与网络',
    title: '连接握手超时？首先检查系统时间同步',
    content: '加密隧道采用高安全度的时钟校验机制。如果本地设备时间与标准网络授时相差超过 60 秒，会导致 SSL/TLS 加密握手被远端节点拒绝。请在 Windows 或 macOS 系统设置中重新开启“自动同步网络时间”。',
    tags: ['时间偏差', '握手超时', '排错速查'],
  },
  {
    id: 'dns-leak-prevention',
    category: 'troubleshooting',
    categoryName: '排错与网络',
    title: '网页能打开但开发命令行拉取超时排查',
    content: '常见于终端未正确读取系统代理环境变量。若 Git 或 npm 命令超时，请在终端中配置相应的 http_proxy 与 https_proxy 环境变量，或在客户端中开启增强模式（TUN 虚拟网卡模式）接管全局流量。',
    tags: ['命令行加速', 'TUN模式', '终端排错'],
  },
  {
    id: 'node-failover-tips',
    category: 'troubleshooting',
    categoryName: '排错与网络',
    title: '偶发性节点延迟升高时的应急处理',
    content: '国际海缆维修或突发跨洋拥堵可能导致单一节点延迟波动。此时请在客户端内点击“更新订阅”，切换至备用自动优选节点；若多次切换仍异常，可登录官方控制台查看最新维护公告或提交工单。',
    tags: ['节点切换', '容灾应急', '网络排错'],
  },
];
