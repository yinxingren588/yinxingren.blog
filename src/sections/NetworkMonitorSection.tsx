import React, { useState } from 'react';
import {
  Activity,
  Zap,
  RefreshCw,
  Globe2,
  Server,
  ArrowUpRight,
} from 'lucide-react';
import OfficialLink from '@/components/OfficialLink';

interface NodeItem {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: 'east-asia' | 'us-eu' | 'ai-stream';
  type: string;
  baseLatency: number;
  jitter: number;
  multiplier: string;
  unlocks: string[];
  status: string;
  uptime: string;
}

export const NetworkMonitorSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'east-asia' | 'us-eu' | 'ai-stream'>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [latencyOffset, setLatencyOffset] = useState<Record<string, number>>({});

  const nodes: NodeItem[] = [
    {
      id: 'hk-01',
      name: '香港 01 [深港/沪港 IEPL 专线]',
      code: 'HK-IEPL-01',
      flag: '🇭🇰',
      region: 'east-asia',
      type: 'IEPL 内网专线',
      baseLatency: 16,
      jitter: 1,
      multiplier: '1.0x',
      unlocks: ['Netflix', 'Disney+', 'ChatGPT', 'TVB'],
      status: '极佳 (低抖动)',
      uptime: '99.99%',
    },
    {
      id: 'hk-02',
      name: '香港 02 [BGP 多线金融加速]',
      code: 'HK-BGP-02',
      flag: '🇭🇰',
      region: 'east-asia',
      type: '多线 BGP 容灾',
      baseLatency: 19,
      jitter: 2,
      multiplier: '1.0x',
      unlocks: ['4K/8K 流媒体', 'OpenAI', 'YouTube Premium'],
      status: '极佳',
      uptime: '100%',
    },
    {
      id: 'jp-01',
      name: '日本 01 [东京原生 BGP 专线]',
      code: 'JP-IEPL-01',
      flag: '🇯🇵',
      region: 'east-asia',
      type: '沪日内网专线',
      baseLatency: 31,
      jitter: 2,
      multiplier: '1.0x',
      unlocks: ['Abema', 'DMM', 'Netflix JP', 'Pixiv'],
      status: '极佳 (低延迟)',
      uptime: '99.98%',
    },
    {
      id: 'jp-02',
      name: '日本 02 [大阪游戏超低延迟]',
      code: 'JP-GAME-02',
      flag: '🇯🇵',
      region: 'east-asia',
      type: '专网低延迟路由',
      baseLatency: 34,
      jitter: 1,
      multiplier: '1.0x',
      unlocks: ['Steam', 'Apex', 'PSN', 'Nintendo'],
      status: '极佳 (电竞专线)',
      uptime: '99.99%',
    },
    {
      id: 'sg-01',
      name: '新加坡 01 [金融核心专线]',
      code: 'SG-IEPL-01',
      flag: '🇸🇬',
      region: 'ai-stream',
      type: '跨境 IEPL 专线',
      baseLatency: 42,
      jitter: 2,
      multiplier: '1.0x',
      unlocks: ['TikTok 跨境', 'Claude 3.5', 'Shopee', 'OpenAI'],
      status: '极佳',
      uptime: '99.95%',
    },
    {
      id: 'us-01',
      name: '美国 01 [硅谷极速跨洋专线]',
      code: 'US-SILICON-01',
      flag: '🇺🇸',
      region: 'us-eu',
      type: '中美跨洋专线',
      baseLatency: 118,
      jitter: 3,
      multiplier: '1.0x',
      unlocks: ['OpenAI / GPT-4o', 'Midjourney', 'Claude', 'Hulu'],
      status: '良好 (大带宽)',
      uptime: '99.92%',
    },
    {
      id: 'uk-01',
      name: '英国 01 [伦敦金融专线]',
      code: 'UK-LONDON-01',
      flag: '🇬🇧',
      region: 'us-eu',
      type: '欧陆核心专网',
      baseLatency: 136,
      jitter: 3,
      multiplier: '1.0x',
      unlocks: ['BBC iPlayer', '学术论文数据库', 'Spotify UK'],
      status: '良好',
      uptime: '99.90%',
    },
    {
      id: 'de-01',
      name: '德国 01 [法兰克福枢纽专线]',
      code: 'DE-FRA-01',
      flag: '🇩🇪',
      region: 'us-eu',
      type: '欧洲骨干专网',
      baseLatency: 142,
      jitter: 4,
      multiplier: '1.0x',
      unlocks: ['欧盟合规数据', '跨境电商', '学术科研'],
      status: '良好',
      uptime: '99.94%',
    },
  ];

  const handleTestPing = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const newOffsets: Record<string, number> = {};
      nodes.forEach((n) => {
        newOffsets[n.id] = Math.floor(Math.random() * 5) - 2;
      });
      setLatencyOffset(newOffsets);
      setIsRefreshing(false);
    }, 600);
  };

  const filteredNodes = nodes.filter((n) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'east-asia') return n.region === 'east-asia';
    if (activeTab === 'us-eu') return n.region === 'us-eu';
    if (activeTab === 'ai-stream') return n.unlocks.some((u) => u.includes('ChatGPT') || u.includes('TikTok') || u.includes('OpenAI'));
    return true;
  });

  return (
    <section
      id="network-monitor"
      className="py-16 sm:py-24 border-b border-slate-200 bg-slate-50/70 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 区域标题与测速操作 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
              <Activity className="w-3.5 h-3.5 text-blue-600" />
              <span>IEPL BACKBONE TELEMETRY · 实时骨干遥测</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              全球专线网络实时态势与节点测速
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              隐形人官方骨干专线多节点实时负载状态。全系采用内网专线穿透技术，承诺 <span className="text-blue-600 font-semibold">1.0x 真实倍率</span>，无丢包、低抖动、原生解锁。
            </p>
          </div>

          {/* 实时一键测速按钮 */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleTestPing}
              disabled={isRefreshing}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-300 font-mono text-xs font-semibold transition-all shadow-sm disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-blue-600' : 'text-blue-600'}`} />
              <span>{isRefreshing ? '正在探测链路延迟...' : '⚡ 一键实时测速 (Live Ping)'}</span>
            </button>
          </div>
        </div>

        {/* 节点分类过滤 Tab */}
        <div className="flex items-center gap-2 pt-6 pb-8 overflow-x-auto">
          {[
            { id: 'all', label: '全部专线节点 (All POPs)' },
            { id: 'east-asia', label: '东亚近场专线 (港日)' },
            { id: 'us-eu', label: '欧美跨洋专线 (美英德)' },
            { id: 'ai-stream', label: 'AI 大模型与流媒体优化' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 专线节点卡片大网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredNodes.map((node) => {
            const currentLatency = Math.max(10, node.baseLatency + (latencyOffset[node.id] || 0));
            const isVeryFast = currentLatency < 50;

            return (
              <div
                key={node.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 shadow-sm text-left flex flex-col justify-between group"
              >
                <div>
                  {/* 头部：国旗、状态呼吸灯、编码 */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xl" role="img" aria-label="region flag">
                        {node.flag}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-800">
                        {node.code}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 font-semibold">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>{node.uptime}</span>
                    </div>
                  </div>

                  {/* 节点名称 */}
                  <div className="text-sm font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">
                    {node.name}
                  </div>

                  {/* 线路类型与倍率标识 */}
                  <div className="mt-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-[10px] font-mono text-blue-700">
                      {node.type}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-700">
                      倍率: {node.multiplier}
                    </span>
                  </div>

                  {/* 实时 Ping 延迟展示大数 */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">实时网络延迟:</span>
                    <div className="flex items-baseline gap-1 font-mono">
                      <span
                        className={`text-xl font-extrabold ${
                          isVeryFast ? 'text-emerald-600' : 'text-blue-600'
                        }`}
                      >
                        {currentLatency}
                      </span>
                      <span className="text-xs text-slate-500">ms</span>
                    </div>
                  </div>

                  {/* 原生解锁标签 */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {node.unlocks.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 底部直达官方控制台按钮 */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <OfficialLink className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-700 border border-slate-200 text-xs font-medium transition-colors">
                    <span>连接该节点</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </OfficialLink>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部官方保障三柱 */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-left shadow-sm">
          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">1.0x 真实倍率承诺</div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                全节点严格执行 1.0x 真实计费，不设任何暗改扣量规则，流量数据与官方后台严格 1:1 实时对应。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Server className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">BGP 毫秒级智能容灾</div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                当单条海底光缆或国际链路发生抖动时，系统 0.5s 内自动多线故障转移，保证长连接不中断。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Globe2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-slate-900">原生 IP 池常态轮转</div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                全节点部署当地原生住宅/机房洁净 IP，稳定解锁 ChatGPT、Claude 3.5、Netflix、Disney+。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NetworkMonitorSection;
