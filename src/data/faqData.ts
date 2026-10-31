import { BRAND_NAME, BRAND_NAME_EN } from '@/config/site';

/**
 * FAQ 数据模型
 * 供页面渲染与结构化数据 (JSON-LD FAQPage) 统一读取
 */
export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

/**
 * 官方 8 项核心常见问题
 */
export const FAQ_DATA: FAQItem[] = [
  {
    id: 'verify-official-site',
    category: '官方正版',
    question: `如何认准${BRAND_NAME}官方网站与官方正版入口？`,
    answer: `${BRAND_NAME}官网（yinxingren.blog）为官方品牌与专线服务直营门户。官方直营控制台提供全系 9 大正版配套、统一 1x 真实计费倍率与官方直属技术售后保障，请认准本站官方链接与公告渠道。`,
  },
  {
    id: 'service-intro',
    category: '专线架构',
    question: `${BRAND_NAME}官方专线网络服务有哪些核心技术特性？`,
    answer: `${BRAND_NAME}（${BRAND_NAME_EN}）由官方专业团队运营，专注为跨境出海人员、跨国企业团队与数字游民提供端到端流量混淆专线网络。全线统一 1x 真实计费倍率，绝无暗扣虚标；全天候多路径智能容灾，主流系统全生态兼容。`,
  },
  {
    id: 'select-plan',
    category: '配套选型',
    question: `${BRAND_NAME}官方公布的 9 大套餐规格有什么区别，该如何选型？`,
    answer: `${BRAND_NAME}官方共提供 9 款正式配套：包括 6 款周期方案（星耀风暴、白银纪元、黄金序列、铂金至臻、钻石穹顶、王者定制版）以及 3 款永不过期的一次性独立买断流量包（160GB、420GB、1TB）。建议从团队人数、设备并发数、月度流量配额及订阅周期四个维度自由选配。`,
  },
  {
    id: 'supported-platforms',
    category: '平台支持',
    question: `${BRAND_NAME}支持在哪些操作系统和设备上使用？`,
    answer: `${BRAND_NAME}官方支持主流操作系统全覆盖，包括 Windows、macOS、Linux 桌面端与 iOS、Android 移动端。兼容通用代理网络工具，提供一键托管订阅地址与官方详尽图文配置指引。`,
  },
  {
    id: 'download-client',
    category: '客户端获取',
    question: `如何在官方控制台获取客户端并导入专属订阅？`,
    answer: `订阅激活后，登录${BRAND_NAME}官方用户中心，在控制台“仪表盘”即可直接一键复制官方订阅地址，或下载对应操作系统的客户端软件，导入订阅链接后一键开启高速专线连接。`,
  },
  {
    id: 'billing-cycle',
    category: '周期建议',
    question: `周期订阅方案与一次性买断流量包有什么区别与选型建议？`,
    answer: `周期方案（月付/季付/年付）按期循环重置流量，适合日常高频出海办公与团队协作，年付方案享受最优性价比；一次性流量包永不过期，适合备用应急与轻度出差人员。两种模式均享有官方一致的专线质量与技术支持。`,
  },
  {
    id: 'node-updates',
    category: '线路维护',
    question: `服务专线线路与可用节点会发生动态优化吗？`,
    answer: `是的。${BRAND_NAME}官方运维团队 7×24 小时监控全球骨干专线网络健康度与海缆负载，自动执行平滑切换。建议用户在客户端内定期刷新订阅节点列表，以保持最佳传输路径。`,
  },
  {
    id: 'contact-support',
    category: '官方支持',
    question: `如需获取最新通知或技术支持，可以通过什么方式联系官方？`,
    answer: `您可以在${BRAND_NAME}官方控制台直接提交服务工单，获得官方工程师的一对一技术解答；亦可通过本站 /contact/ 页面进入官方 Telegram 公告频道与官方交流群，获取实时维护通知与支持。`,
  },
];
