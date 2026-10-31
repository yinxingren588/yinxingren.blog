/**
 * 品牌设计系统与视觉规范
 * 依据品牌名「隐形人」量身定制，杜绝通用AI渐变与拟态堆叠。
 */

export interface SellingPoint {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export const BRAND_DESIGN_SYSTEM = {
  // 1. 英文展示名
  nameEn: 'Invisible',
  nameZh: '隐形人',

  // 2. 品牌定位文案
  positioning: '专注数字化隐私保护与高速网络专线连接的官方服务平台，为跨境开发者、出海团队及数字游民提供稳定、高速、安全可靠的全球网络接入方案与官方正品保障。',

  // 3. 目标用户描述
  targetAudience: '面向需要跨境网络协作、海外开发调试、海外媒体运营、隐私数据加密传输及远程办公的专业技术人员、跨境创作者与出海企业团队。',

  // 4. 品牌口号
  slogan: '隐于无形，连接无界',
  sloganEn: 'Quiet Connection, Seamless Reach',

  // 5. 核心卖点（官方品质承诺）
  sellingPoints: [
    {
      id: 'stealth-tunnel',
      title: '纯净隐匿架构',
      description: '采用无感知隧道与深层传输混淆设计，减少数字足迹与连接干扰，保障网络访问隐蔽顺畅。',
      badge: '隐私优先',
    },
    {
      id: 'minimal-interaction',
      title: '极简极速交互',
      description: '轻量化客户端适配主流全平台，配置导入直观省心，拒绝繁杂冗余参数，快速建立连接。',
      badge: '高效省心',
    },
    {
      id: 'failover-routing',
      title: '智能冗余容灾',
      description: '全天候多线路自动优选与容灾切换，保障跨境协作与开发任务持续连通不中断。',
      badge: '稳定保障',
    },
    {
      id: 'cross-platform',
      title: '多端全平台兼容',
      description: '兼容 Windows、macOS、iOS、Android 及主流路由代理环境，实现多设备平滑漫游。',
      badge: '全端覆盖',
    },
    {
      id: 'official-guarantee',
      title: '官方直营品质保证',
      description: '隐形人官方正版直营，全线配备专线网络与统一 1x 真实计费倍率，提供官方专业售后与全天候维护。',
      badge: '官方直营',
    },
  ] as SellingPoint[],

  // 6. 品牌色彩系统
  colors: {
    primary: '#1E293B',       // 深空石墨 Slate-800：低调内敛
    secondary: '#475569',     // 冷钛灰 Slate-600：沉稳理性
    accent: '#0EA5E9',        // 冰川天青 Sky-500：深邃夜幕中的一道清晰指引微光
    accentHover: '#0284C7',   // 聚焦微光
    background: {
      base: '#0B0F17',        // 幽暗深黑基底
      surface: '#111827',     // 灰黑卡片基质
      elevated: '#182234',    // 微浮动层板
    },
    text: {
      heading: '#F8FAFC',     // 霜白天际（标题）
      body: '#CBD5E1',        // 清亮亮灰（正文）
      muted: '#94A3B8',       // 哑光次级文本
      subtle: '#64748B',      // 暗哑辅助注释
    },
    border: {
      default: '#1E293B',     // 低对比度幽暗边框
      hover: '#334155',       // 交互反馈边框
    },
  },

  // 7. Logo 图形方向
  logoConcept: {
    geometry: '抽象隐形之眼 / 极简几何双折线 / 隐秘坐标点',
    meaning: '由两条低调对称的收敛弧线与中心微光矩阵构成，象征在繁杂网络中建立起低调、隐匿且坚固的穿透连接通道。',
  },

  // 8. 字体层级
  typography: {
    display: 'text-3xl md:text-5xl font-bold tracking-tight',
    h1: 'text-2xl md:text-4xl font-bold tracking-tight',
    h2: 'text-xl md:text-2xl font-semibold tracking-tight',
    h3: 'text-lg md:text-xl font-medium',
    bodyLarge: 'text-lg leading-relaxed text-slate-300',
    bodyBase: 'text-base leading-relaxed text-slate-300',
    bodySmall: 'text-sm leading-normal text-slate-400',
    caption: 'text-xs text-slate-500',
  },

  // 9. 圆角、阴影和间距规范
  spacingAndRadius: {
    borderRadius: {
      button: 'rounded-md',   // 6px
      card: 'rounded-xl',     // 12px
      container: 'rounded-2xl'// 16px
    },
    shadows: {
      subtle: 'shadow-sm shadow-black/40',
      card: 'shadow-md shadow-black/60',
    },
    sectionSpacing: 'py-16 md:py-24',
    containerPadding: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  },

  // 10. 视觉母题
  visualMotif: {
    theme: '幽邃隐匿、暗夜微芒、精密线条、极简克制',
    avoidList: [
      '通用AI大渐变',
      '玻璃拟态堆叠',
      '大量胶囊标签',
      '无意义发光',
      '多层悬浮卡片',
      '假数据控制台',
    ],
  },
} as const;
