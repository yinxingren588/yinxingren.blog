/**
 * 套餐与方案选型指南统一数据源
 * 
 * 数据核验记录：
 * - 来源URL：https://varnexa.invisibleaff.com/#/?code=JF4seZUy
 * - 核验日期：2026-10-17
 * - 核验结论：已完整录入官方最新 9 大正式配套（6 款周期订阅套餐 + 3 款一次性买断永不过期流量包）的规格、流量、价格与权益。
 * - 真实性规范：价格与规格全部严格基于官方发布信息呈现，不编造虚假性能，标注“套餐、价格与活动以合作平台当前显示为准”。
 */

export interface PricingPlanDetail {
  icon?: string;
  text: string;
}

export interface PricingPlan {
  id: string;
  category: 'subscription' | 'onetime';
  categoryName: '周期订阅' | '一次性买断';
  badge: '主推套餐' | '推荐选择';
  isFeatured?: boolean;
  name: string;
  emoji: string;
  subtitle: string;
  price: string;
  period: '/ 年' | '/ 月' | '/ 一次性';
  availableCycles: string;
  monthlyTraffic: string;
  trafficLabel?: string;
  speed: string;
  devices: string;
  billingCycles: string[];
  highlightTag: string;
  details: PricingPlanDetail[];
}

export interface SelectionDimension {
  id: string;
  dimensionName: string;
  dimensionTag: string;
  summary: string;
  considerations: {
    title: string;
    description: string;
  }[];
}

export const PRICING_VERIFICATION = {
  sourceUrl: 'https://varnexa.invisibleaff.com/#/?code=JF4seZUy',
  verificationDate: '2026-10-17',
  isVerifiedPublicData: true,
  reason: '已核验官方公布的 9 大正式套餐规格（6 款周期订阅 + 3 款一次性买断流量包）。',
  complianceNotice: '套餐、价格与实时活动以合作平台结算显示为准。',
  ctaText: '立即订阅此套餐',
} as const;

/**
 * 官方 9 大正式配套规格
 */
export const OFFICIAL_PLANS: PricingPlan[] = [
  // 1. 星耀风暴 (年付主推)
  {
    id: 'plan-xingyao',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '主推套餐',
    isFeatured: true,
    name: '星耀风暴 365天不熄',
    emoji: '⚡',
    subtitle: '适用人群：适合小流量/新手用户，年付折算约 8 元/月。',
    price: '109.00',
    period: '/ 年',
    availableCycles: '年付',
    monthlyTraffic: '80GB',
    trafficLabel: '月流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['年付'],
    highlightTag: '新手首选 · 年付折算约8元/月',
    details: [
      { text: '适用人群：适合小流量/新手用户，年付折算约 8 元/月。' },
      { text: '流量政策：80GB/月高速流量（全节点 x1 倍率，晚高峰不限速）。' },
      { text: '刷新规则：购买日起算，每 30 天自动刷新流量。' },
      { text: '网络带宽：全 IPLC 专线，低延迟；单节点峰值最高 2.5Gbps。' },
      { text: '解锁能力：原生 IP，支持 Netflix / Disney+ / ChatGPT / TikTok 等主流平台。' },
      { text: '设备并发：不限制同时使用客户端数量，多设备自由在线。' },
      { text: '客服支持：高效客服响应，快速处理使用问题。' },
      { text: '节点覆盖：香港×20、台湾×10、日本×10、新加坡×10、美国×10、韩国×2、阿根廷×2、马来西亚、越南、菲律宾、泰国、印度、德国、法国、英国等。' },
    ],
  },
  // 2. 白银纪元 (入门按月)
  {
    id: 'plan-silver',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    isFeatured: false,
    name: '隐形人 白银纪元',
    emoji: '👑',
    subtitle: '每月提供约 144GB 高速可用流量 (全天候极速)',
    price: '24.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '144GB',
    trafficLabel: '月流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '网课会议 · 短视频与开发者',
    details: [
      { text: '每月提供约 144GB 高速可用流量 (全天候极速)' },
      { icon: '🌐', text: '144GB 满足深度网课用户、全高清视频会议、高强度短视频运营与流媒体长期深度用户需求' },
      { icon: '📦', text: '云端多链路即时优化 + 全链路专线架构，秒级响应，节点统一 1x 计费倍率' },
      { icon: '🎬', text: '流媒体全家桶：Netflix / Prime Video / BBC / Abema / TVer 等全面覆盖，原生IP直通，极致体验' },
      { icon: '🤖', text: '开发之选：ChatGPT 4 / GitHub Copilot / Hugging Face 完整支持，低延迟API调用' },
      { icon: '⚡', text: '高性能协议，多国节点可选，不限制在线设备数，商务家庭优选' },
    ],
  },
  // 3. 黄金序列 (主力推荐)
  {
    id: 'plan-gold',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    isFeatured: true,
    name: '隐形人 黄金序列',
    emoji: '💥',
    subtitle: '每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！',
    price: '48.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '360GB',
    trafficLabel: '月流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '中高频视频 · 主力首选',
    details: [
      { icon: '🔥', text: '每月 360GB 高速流量，搭配中高频视频与流媒体，主力首选！' },
      { icon: '🌐', text: 'BGP 三网智能优化 + 纯专线出口，稳定优先，晚高峰也绝不卡顿' },
      { icon: '📦', text: '纯专线不限速，4K 秒开、兼容 8K 超清播放，视听体验拉满' },
    ],
  },
  // 4. 铂金至臻 (高频畅享)
  {
    id: 'plan-platinum',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    isFeatured: false,
    name: '隐形人 铂金至臻',
    emoji: '🔱',
    subtitle: '每月包含 750GB 高速可用流量，适合高频网络使用场景',
    price: '105.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '750GB',
    trafficLabel: '月流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '大文件传输 · 告别流量焦虑',
    details: [
      { icon: '🔥', text: '每月包含 750GB 高速可用流量，适合高频网络使用场景' },
      { icon: '🌐', text: '高频流媒体下载、远程办公、大文件传输？750GB 让你彻底告别流量焦虑。' },
      { icon: '📦', text: 'BGP 多线融合调度 + 专线级网络出口，带宽充足，全节点 1x 计费' },
      { icon: '🎬', text: '全流媒体平台完美解锁，4K/8K 超清内容稳定播放，一爽到底' },
    ],
  },
  // 5. 钻石穹顶 (大流量池)
  {
    id: 'plan-diamond',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    isFeatured: false,
    name: '隐形人 钻石穹顶',
    emoji: '💎',
    subtitle: '每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景',
    price: '185.00',
    period: '/ 月',
    availableCycles: '月付 / 季付 / 半年付 / 年付',
    monthlyTraffic: '1.6TB',
    trafficLabel: '月流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['月付', '季付', '半年付', '年付'],
    highlightTag: '1.6TB 超大池 · 跨境自媒体团队',
    details: [
      { icon: '🔥', text: '每月提供 1600GB 超大流量池，适合团队使用与高并发访问场景' },
      { icon: '🌐', text: '企业级 BGP 智能路由 + 专线出口方案，全程不限速，节点流量不放大' },
      { icon: '📦', text: '1.6TB 超大带宽，跨境电商、海外自媒体团队日常高强度下载必备' },
      { icon: '🎬', text: '全球主流媒体与内容平台全解锁，高码率 8K 视频多台设备同时稳定播放' },
    ],
  },
  // 6. 王者定制版 (企业顶配)
  {
    id: 'plan-wangzhe',
    category: 'subscription',
    categoryName: '周期订阅',
    badge: '推荐选择',
    isFeatured: false,
    name: '王者定制版',
    emoji: '✈️',
    subtitle: '这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想',
    price: '680.00',
    period: '/ 月',
    availableCycles: '月付',
    monthlyTraffic: '500GB',
    trafficLabel: '月流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['月付'],
    highlightTag: '顶配商业级 · 500GB独立带宽',
    details: [
      { icon: '🔥', text: '这就是跨境企业的生命线 普通的共享节点，无法承载高净值的商业梦想' },
      { icon: '🌐', text: '我们为您推出顶配商业级解决方案 500GB/月 独立带宽，全程不限速，保证高并发业务丝滑顺畅' },
      { icon: '🛡️', text: '专为高净值跨境企业、金融机构及关键业务通道打造的高优先级专属保障' },
    ],
  },
  // 7. 一次性小流量 (买断备用)
  {
    id: 'plan-onetime-small',
    category: 'onetime',
    categoryName: '一次性买断',
    badge: '推荐选择',
    isFeatured: false,
    name: '一次性小流量',
    emoji: '🪐',
    subtitle: '一次性买断 160GB，无时间限制，高端纯备用梯子天花板',
    price: '229.00',
    period: '/ 一次性',
    availableCycles: '一次性',
    monthlyTraffic: '160GB',
    trafficLabel: '买断流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['一次性'],
    highlightTag: '永不过期 · 160GB纯备用网络安全气囊',
    details: [
      { icon: '🔥', text: '一次性买断 160GB，无时间限制，高端纯备用梯子天花板' },
      { icon: '🌐', text: '告别月租焦虑，¥229 拥有一个永不过期的“网络安全气囊”' },
      { icon: '📦', text: '独立买断区专属节点，严格限 1 台设备，主打一个纯净与不挤兑' },
    ],
  },
  // 8. 一次性标准流量包 (商旅跨年)
  {
    id: 'plan-onetime-standard',
    category: 'onetime',
    categoryName: '一次性买断',
    badge: '推荐选择',
    isFeatured: false,
    name: '一次性标准流量包',
    emoji: '🌀',
    subtitle: '420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合',
    price: '549.00',
    period: '/ 一次性',
    availableCycles: '一次性',
    monthlyTraffic: '420GB',
    trafficLabel: '买断流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['一次性'],
    highlightTag: '永不过期 · 420GB商旅跨年黄金组合',
    details: [
      { icon: '🔥', text: '420GB 独立买断流量，没有过期时间，海外出差、商旅跨年黄金组合' },
      { icon: '🌐', text: '进阶优质带宽加持，支持 2 台设备同时在线，手机电脑无缝同步' },
      { icon: '📦', text: '进阶优质带宽保证晚高峰不卡顿，追剧、办公、开会全能打' },
      { icon: '🎬', text: '把预算花在刀刃上，永不过期的 420G 专线，比天天续费省心百倍' },
    ],
  },
  // 9. 一次性精英流量包 (1TB买断旗舰)
  {
    id: 'plan-onetime-elite',
    category: 'onetime',
    categoryName: '一次性买断',
    badge: '推荐选择',
    isFeatured: false,
    name: '一次性精英流量包',
    emoji: '🌊',
    subtitle: '1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！',
    price: '1199.00',
    period: '/ 一次性',
    availableCycles: '一次性',
    monthlyTraffic: '1.0TB',
    trafficLabel: '买断流量',
    speed: '不限速',
    devices: '不限',
    billingCycles: ['一次性'],
    highlightTag: '1TB买断旗舰 · 终身省心高净值方案',
    details: [
      { icon: '🔥', text: '1000GB（1TB）旗舰独享买断流量，一口价 ¥1199，永不过期！' },
      { icon: '🌐', text: '极速旗舰级最高优先级带宽，支持 3 台设备同时狂飙，稳如泰山' },
      { icon: '📦', text: '专为高净值金融、跨境核心业务、高端工作室打造的商务断区' },
      { icon: '🎬', text: '1TB 大容量且没有时间限制，重度生产力用户的终心省心方案' },
    ],
  },
];

/**
 * 4 大客观选型考量维度（保留用于理性选型对比）
 */
export const SELECTION_DIMENSIONS: SelectionDimension[] = [
  {
    id: 'usage',
    dimensionName: '使用需求考量',
    dimensionTag: '应用场景',
    summary: '根据实际工作负荷与交互协议类型，匹配对应的网络信道与传输特征。',
    considerations: [
      {
        title: '轻度科研与日常备用',
        description: '星耀风暴（80GB/月）或一次性小流量（160GB买断），适合轻量检索或常备应急网络。',
      },
      {
        title: '跨境研发与高频多媒体',
        description: '白银纪元（144GB）与黄金序列（360GB）具备低延迟专线与流媒体 4K/8K 解锁保障。',
      },
      {
        title: '企业重度运营与商业专线',
        description: '钻石穹顶（1.6TB）与王者定制版（500GB独立带宽），满足团队高并发与金融级稳定性。',
      },
    ],
  },
  {
    id: 'devices',
    dimensionName: '设备数量考量',
    dimensionTag: '终端并发',
    summary: '周期套餐不限制在线设备数；买断包专属节点设有对应设备并发规范。',
    considerations: [
      {
        title: '个人多端漫游',
        description: '周期套餐不限制设备数，办公电脑、手机与平板无缝切换，多端自由在线。',
      },
      {
        title: '买断专属节点纯净度',
        description: '一次性买断套餐主打独立买断区专属节点，按规格保障设备纯净与通道不挤兑。',
      },
      {
        title: '软路由与网关设备',
        description: '办公室全网统一接入推荐选用王者定制版或大流量池方案，保障全网大吞吐稳定。',
      },
    ],
  },
  {
    id: 'traffic',
    dimensionName: '流量与重置规则',
    dimensionTag: '配额评估',
    summary: '区分 30 天自动刷新周期与永久不过期买断流量池。',
    considerations: [
      {
        title: '周期套餐 30 天循环刷新',
        description: '自购买日起算，每 30 天自动重置高速配额，全节点统一 1x 计费，晚高峰不限速。',
      },
      {
        title: '买断流量包永不过期',
        description: '一次性流量包（160GB / 420GB / 1TB）无时间限制，一次买断，用完为止。',
      },
      {
        title: '告别月租与流量焦虑',
        description: '低频使用者选用买断包无需每月续费；高频长期工作者选周期方案综合成本更低。',
      },
    ],
  },
  {
    id: 'billing-cycle',
    dimensionName: '计费周期灵活性',
    dimensionTag: '订阅策略',
    summary: '支持月付、季付、半年付、年付与一次性买断多样化结算模式。',
    considerations: [
      {
        title: '年付周期性价比极高',
        description: '「星耀风暴」年付仅 ¥109，折合约 8 元/月，长期出海人员极具性价比。',
      },
      {
        title: '月付随用随停试错低',
        description: '白银、黄金、铂金、钻石及王者版支持按月结算，项目期出海试错成本极低。',
      },
      {
        title: '一次性买断免管理',
        description: '一口价买断免除按月打理琐碎，成为海外商务出差或长期备用网络的省心方案。',
      },
    ],
  },
];
