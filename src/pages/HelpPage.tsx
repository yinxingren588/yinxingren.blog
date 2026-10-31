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
 * 围绕“隐形人机场、机场推荐、为什么选择隐形人机场、梯子、vpn、节点、clash”核心关键词打造的权威深度专栏
 */
export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    document.title = `${BRAND_NAME}机场帮助中心与官方故障排查手册 - ${BRAND_NAME}机场官网`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        `权威整理${BRAND_NAME}机场评测、高速稳定机场推荐指南、为什么选择隐形人机场、科学梯子与传统VPN区别、全球专线节点选择及Clash全平台配置教程。立足工程逻辑，拒绝无意义堆砌。`
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
      { id: 'all', name: '全部专栏', count: counts.all },
      { id: 'brand', name: '品牌专栏', count: counts['brand'] || 0 },
      { id: 'selection', name: '选型指南', count: counts['selection'] || 0 },
      { id: 'tech', name: '技术科普', count: counts['tech'] || 0 },
      { id: 'nodes', name: '节点优化', count: counts['nodes'] || 0 },
      { id: 'client', name: '客户端配置', count: counts['client'] || 0 },
    ];
  }, []);

  // 动态纯前端过滤搜索与分类
  const filteredArticles = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return HELP_ARTICLES.filter((article: HelpArticle) => {
      const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchCategory) return false;

      if (!q) return true;
      const inKeyword = article.keyword.toLowerCase().includes(q);
      const inTitle = article.title.toLowerCase().includes(q);
      const inSummary = article.summary.toLowerCase().includes(q);
      const inContent = article.content.toLowerCase().includes(q);
      const inTags = article.tags.some((tag) => tag.toLowerCase().includes(q));

      return inKeyword || inTitle || inSummary || inContent || inTags;
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
            <span>KNOWLEDGE BASE · 核心技术专栏与排错手册</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {BRAND_NAME}机场 帮助中心与技术专栏
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            围绕 <strong className="text-slate-900 font-semibold">隐形人机场、机场推荐、为什么选择隐形人机场、梯子、VPN、节点与 Clash</strong> 等核心主题打造的高规格技术专题。拒绝低质堆砌，每篇文章皆为立足于工程实践的深度指南，为您提供硬核、严谨、实用的网络指引。
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
              placeholder="搜索核心关键词：隐形人机场、机场推荐、梯子、vpn、节点、clash..."
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
              篇专属核心指南
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
                    <span className="text-xs font-mono font-bold text-blue-700 px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200">
                      #{article.keyword}
                    </span>

                    <span className="text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-100">
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
                    <span>阅读完整专栏</span>
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
              抱歉，没有找到与“<span className="text-blue-600 font-semibold">{searchQuery}</span>”匹配的专栏文章。请尝试使用推荐关键词检索（如：隐形人机场、机场推荐、梯子、VPN、节点、Clash）。
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
              <span>需要专属技术咨询或节点定制？</span>
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              官方工程师 7×24 小时在线驻守，涉及特定协议调优、团队并发定制或节点连通诊断，欢迎直接发起在线沟通。
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
