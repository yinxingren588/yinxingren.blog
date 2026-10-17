import { BRAND_NAME, BRAND_NAME_EN, SECONDARY_KEYWORD } from '@/config/site';

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
    title: `初次了解${BRAND_NAME}：平台定位与使用须知`,
    content: `${BRAND_NAME}（${BRAND_NAME_EN}）使用指引平台为第三方服务导航站，旨在提供客观的网络连接技术解析与客户端配置指南。本站不设独立账户与充值系统，所有订阅与接入服务均由合规合作平台直接承保与交付。`,
    tags: ['新手入门', '平台身份', '使用须知'],
  },
  {
    id: 'verify-entry',
    category: 'getting-started',
    categoryName: '新手入门',
    title: `如何核实${SECONDARY_KEYWORD}与安全入口？`,
    content: `请认准官方公布的可信渠道或本站提供的受保护推广导航链接。不要信任非官方来源发布的第三方直链或非授权镜像站。本站提供的合作平台链接均完整保留了推广签名与官方校验参数，确保访问路径合规透明。`,
    tags: ['官方入口', '安全核验', '避坑指南'],
  },
  {
    id: 'quick-start-3steps',
    category: 'getting-started',
    categoryName: '新手入门',
    title: '从零开始建立连接的标准化三步流程',
    content: '第一步：在本站客观查阅方案对比，明确自身工作流所需的流量与并发规格；第二步：前往合作平台安全完成订阅并获取托管配置地址；第三步：下载系统适用的轻量客户端，导入配置后启动基于规则的分流连接。',
    tags: ['快速开始', '配置流程', '新手教程'],
  },

  // 2. 套餐与订阅
  {
    id: 'choose-right-plan',
    category: 'plan-selection',
    categoryName: '套餐与订阅',
    title: '如何根据日常网络任务选择合适规格？',
    content: '轻度检索与文献查阅推荐选择基础规格即可；若涉及跨国团队 Git 仓库频繁同步、海外容器镜像构建或跨国多平台电商运营，建议选购并发许可更多、流量更充沛的进阶规格。实际套餐类型以合作平台实时显示为准。',
    tags: ['套餐选型', '流量评估', '规格对比'],
  },
  {
    id: 'traffic-reset-rules',
    category: 'plan-selection',
    categoryName: '套餐与订阅',
    title: '流量配额与账单重置周期的重要提示',
    content: '各合作平台的流量重置机制通常分为“自然月首日重置”与“订单生效账单日重置”两种。订阅前请务必在合作平台用户中心核对清晰，以避免在账单周期末尾因意外断流影响关键研发任务。',
    tags: ['流量重置', '账单周期', '配额提醒'],
  },
  {
    id: 'billing-disclaimer',
    category: 'plan-selection',
    categoryName: '套餐与订阅',
    title: '关于价格变动与活动优惠的说明',
    content: '由于汇率波动及合作平台的运营排期，实时价格与活动规则随时可能调整。本站坚决不制作静态假价格表，所有实际应付金额、币种与退款政策均以合作平台收银台当前结算为准。',
    tags: ['价格核验', '优惠说明', '退款政策'],
  },

  // 3. 客户端配置
  {
    id: 'client-get-guide',
    category: 'client-setup',
    categoryName: '客户端配置',
    title: '如何安全获取对应操作系统的客户端？',
    content: '在合作平台完成订阅激活后，登录用户中心，根据系统推荐下载对应平台的通用代理客户端或专属安装包。请勿在不知名的网盘或第三方论坛下载被篡改的客户端安装文件。',
    tags: ['客户端获取', '下载安全', '平台支持'],
  },
  {
    id: 'subscription-import',
    category: 'client-setup',
    categoryName: '客户端配置',
    title: '通用订阅链接的导入与更新步骤',
    content: '复制合作平台下发的托管订阅 URL，打开客户端配置页面选择“从 URL 导入/添加配置”，粘贴并点击保存。建议在客户端设置中开启“自动定时更新”，以便及时同步节点维护变更。',
    tags: ['订阅导入', '配置更新', '节点同步'],
  },
  {
    id: 'split-routing-mode',
    category: 'client-setup',
    categoryName: '客户端配置',
    title: '为什么推荐使用“规则分流”而非全局模式？',
    content: '“规则分流（Rule-based Routing）”能智能识别流量类型：国内常见网站与日常办公软件走本地宽带直连，保证低延迟；仅将海外受限代码库与跨境服务经由隧道转发，既能节约宝贵的订阅流量，又能提升日常网络响应。',
    tags: ['分流规则', '智能路由', '带宽节约'],
  },

  // 4. 多设备协同
  {
    id: 'multi-device-concurrency',
    category: 'multi-device',
    categoryName: '多设备协同',
    title: '多台设备同时在线的连接限制说明',
    content: '不同订阅规格通常对应不同的并发在线设备数（如单设备、双设备或多设备许可）。若超出并发限制，可能会导致旧设备被强制下线或临时连接受阻。多人协同团队请优先选购支持高并发的多人规格。',
    tags: ['设备并发', '多端登录', '协同办公'],
  },
  {
    id: 'mobile-and-desktop',
    category: 'multi-device',
    categoryName: '多设备协同',
    title: '移动端（iOS/Android）与桌面端配置互通技巧',
    content: '同一个订阅托管 URL 通常可以在手机端与工作站电脑上分别导入。通过在各端配置相同的分流规则策略，即可实现在工位办公与外出移动漫游时的无缝衔接。',
    tags: ['移动适配', '跨平台漫游', '多端配置'],
  },
  {
    id: 'router-gateway-setup',
    category: 'multi-device',
    categoryName: '多设备协同',
    title: '软路由与透明网关接入的通用考量',
    content: '在局域网网关部署代理需核查路由器固件与插件对核心协议的支持情况。网关接入会统一占用并发配额，建议针对研发团队分配固定 IP 规则分流，避免整网非工作流量过度占用连接池。',
    tags: ['路由器网关', '局域网代理', '高级配置'],
  },

  // 5. 排错与网络
  {
    id: 'time-sync-error',
    category: 'troubleshooting',
    categoryName: '排错与网络',
    title: '排查首要步骤：本地系统时间偏差排错',
    content: '绝大多数加密协议在握手建立阶段均依赖严格的系统时钟戳验证。若本地电脑或手机的时间偏差超过 60 秒，会导致握手包被服务端静默丢弃。遇到突发无法连接时，请先校准系统网络时间。',
    tags: ['时钟校准', '握手失败', '故障排查'],
  },
  {
    id: 'node-fallback-action',
    category: 'troubleshooting',
    categoryName: '排错与网络',
    title: '突发延迟飙升或节点离线的应急切换方法',
    content: '国际海缆突发检修或骨干网络拥塞属于偶发公网现象。遇此情况，建议首先在客户端内点击“更新订阅”拉取最新节点池，随后手动切换至备用备用路径，避免单一节点单点故障。',
    tags: ['容灾切换', '备用线路', '骨干拥堵'],
  },
  {
    id: 'dns-leak-and-clean',
    category: 'troubleshooting',
    categoryName: '排错与网络',
    title: 'DNS 解析异常与缓存清理指引',
    content: '若出现某些境外域名无法解析但 IP 能连通的情况，可能是本地操作系统或浏览器的 DNS 缓存污染。可在终端执行 `ipconfig /flushdns`（Windows）或清理系统 DNS 缓存，并检查客户端的远程安全 DNS 设置。',
    tags: ['DNS异常', '缓存清理', '域名解析'],
  },
];
