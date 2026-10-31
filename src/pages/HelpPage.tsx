import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME, openCrispChat } from '@/config/site';
import { HELP_ARTICLES, HelpArticle } from '@/data/helpData';
import {
  ChevronRight,
  Search,
  X,
  Filter,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Clock,
  Calendar,
} from 'lucide-react';

/**
 * /help/ 帮助中心文章导航与检索中心
 * 展示全站 14 篇标准化排错与使用指引文章卡片，点击独立跳转至专属详情页
 */
export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = `${BRAND_NAME} 帮助中心与官方排错手册 - ${BRAND_NAME}官网`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `汇集${BRAND_NAME}新手三步极速接入、全平台客户端官方订阅导入、多设备协同管理及系统时钟同步等常见问题排查方案。提供官方直属知识库与一对一工单支持入口。`
      );
    }
  }, []);

  // 动态统计各分类文章数量
  const categoryStats = useMemo(() => {
    const counts: Record<string, number> = { all: HELP_ARTICLES.length };
    HELP_ARTICLES.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });

    return [
      { id: 'all', name: '全部指引', count: counts.all },
      { id: 'getting-started', name: '新手入门', count: counts['getting-started'] || 0 },
      { id: 'plan-selection', name: '套餐与订阅', count: counts['plan-selection'] || 0 },
      { id: 'client-setup', name: '客户端配置', count: counts['client-setup'] || 0 },
      { id: 'multi-device', name: '多设备协同', count: counts['multi-device'] || 0 },
      { id: 'troubleshooting', name: '排错与网络', count: counts['troubleshooting'] || 0 },
    ];
  }, []);

  // 动态纯前端过滤搜索与分类
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return HELP_ARTICLES.filter((article: HelpArticle) => {
      const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchCategory) return false;

      if (!q) return true;
      const inTitle = article.title.toLowerCase().includes(q);
      const inSummary = article.summary.toLowerCase().includes(q);
      const inContent = article.content.toLowerCase().includes(q);
      const inTags = article.tags.some((tag) => tag.toLowerCase().includes(q));

      return inTitle || inSummary || inContent || inTags;
    });
  }, [searchQuery, selectedCategory]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

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
              帮助中心
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>KNOWLEDGE BASE · 实用指南与官方排错手册</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {BRAND_NAME} 帮助中心与官方排错手册
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            为您整理从入门使用、官方 9 大配套规格考量、多端客户端导入到日常网络排错的详尽指南。所有内容立足于真实通用的工程逻辑，每个主题均配备独立图文页面，协助您快速排除疑问，顺畅建立连接。
          </p>
        </div>

        {/* 纯前端即时搜索与过滤控制条 */}
        <div className="mb-10 space-y-6">
          {/* 搜索框 */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索问题关键词、配置教程或排错方法（如：时间偏差、分流、多设备）..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="清除搜索关键字"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 分类筛选药丸标签 */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 flex items-center gap-1.5 mr-1 font-mono">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>主题筛选：</span>
            </span>
            {categoryStats.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
                <span className="text-[10px] font-mono opacity-80">
                  ({cat.count})
                </span>
              </button>
            ))}
          </div>

          {/* 实时匹配结果计数条 */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200">
            <span>
              已为您匹配到{' '}
              <strong className="text-blue-600 font-mono">{filteredArticles.length}</strong>{' '}
              篇相关指引
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-blue-600 hover:text-blue-700 font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>清除筛选条件</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* 文章卡片网格列表 (每个卡片独立链接到专属文章页面) */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {filteredArticles.map((article: HelpArticle) => (
              <Link
                key={article.id}
                to={`/help/${article.id}/`}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-blue-700 font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200">
                      {article.categoryName}
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}阅读</span>
                    </span>

                    <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{article.updatedAt}</span>
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {article.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-100"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 group-hover:text-blue-700 flex-shrink-0 ml-2">
                    <span>阅读全文</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* 空结果提示面板 */
          <div className="my-12 p-12 rounded-3xl bg-slate-50 border border-slate-200 text-center max-w-xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">未找到匹配的指引内容</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              抱歉，没有找到与“<span className="text-blue-600 font-semibold">{searchQuery}</span>”匹配的帮助文章。请尝试缩短关键词，或切换分类筛选。
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-all shadow-sm"
            >
              <span>清除全部搜索与分类条件</span>
            </button>
          </div>
        )}

        {/* 底部引导区：唤起在线客服 */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <span>仍未排查出故障原因？</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              若遇到复杂的网络协议冲突或特定账户配置问题，您可以直接发起在线咨询，官方技术客服实时为您排查。
            </p>
          </div>

          <button
            type="button"
            onClick={openCrispChat}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <MessageSquare className="w-4 h-4" />
            <span>联系在线客服</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
