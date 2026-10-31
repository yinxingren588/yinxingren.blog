import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '@/config/site';
import { HELP_ARTICLES, HelpArticle } from '@/data/helpData';
import {
  ChevronRight,
  Search,
  X,
  BookOpen,
  Filter,
  ChevronDown,
  Sparkles,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';

/**
 * /help/ 帮助中心与故障排错手册页面
 * 
 * 规范要求：
 * 1. 唯一 H1、独立介绍与面包屑导航
 * 2. 纯前端搜索与分类筛选，不产生动态 URL 路由污染
 * 3. 分类数量与搜索匹配结果数量基于实际数组动态计算
 * 4. 具有清晰的空结果提示与一键清除入口
 * 5. 全文内容直接在页内交互展开，不额外产生子路由
 * 6. 严格 0 AFF 入口
 */
export const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(HELP_ARTICLES[0].id);

  useEffect(() => {
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', 'index, follow');
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
      // 分类筛选
      const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
      if (!matchCategory) return false;

      // 文本搜索匹配
      if (!q) return true;
      const inTitle = article.title.toLowerCase().includes(q);
      const inContent = article.content.toLowerCase().includes(q);
      const inTags = article.tags.some((tag) => tag.toLowerCase().includes(q));

      return inTitle || inContent || inTags;
    });
  }, [searchQuery, selectedCategory]);

  const toggleArticle = (id: string) => {
    setExpandedArticleId((prev) => (prev === id ? null : id));
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
  };

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
              帮助中心
            </li>
          </ol>
        </nav>

        {/* 页面唯一 H1 与导言头屏 */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>实用指南 · 知识库</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E1B4B] leading-tight">
            {BRAND_NAME}机场帮助中心与官网排错手册
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            为您整理从入门使用、官方 9 大配套规格考量、多端客户端导入到日常网络排错的详尽指南。所有内容立足于真实通用的工程逻辑，协助您快速排除疑问，顺畅建立连接。
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
              className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white border border-[#E9D5FF] text-sm text-[#1E1B4B] placeholder-slate-400 focus:outline-none focus:border-[#9333EA] focus:ring-1 focus:ring-[#9333EA] transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="清除搜索关键字"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-[#1E1B4B]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 分类筛选药丸标签（动态统计数量） */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-500 flex items-center gap-1.5 mr-1 font-mono">
              <Filter className="w-3.5 h-3.5" />
              <span>主题筛选：</span>
            </span>
            {categoryStats.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#9333EA] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-[#1E1B4B] border border-[#E9D5FF] hover:border-[#C084FC]'
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
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-[#E9D5FF]">
            <span>
              已为您匹配到{' '}
              <strong className="text-[#1E1B4B] font-mono">{filteredArticles.length}</strong>{' '}
              篇相关指引
            </span>
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="text-[#9333EA] hover:text-[#7E22CE] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>清除筛选条件</span>
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* 文章手风琴展示区 */}
        {filteredArticles.length > 0 ? (
          <div className="space-y-4 mb-16">
            {filteredArticles.map((article: HelpArticle) => {
              const isExpanded = expandedArticleId === article.id;
              const headingId = `help-h-${article.id}`;
              const panelId = `help-p-${article.id}`;

              return (
                <div
                  key={article.id}
                  className="rounded-xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-sm transition-all overflow-hidden"
                >
                  <h2 className="text-base font-medium m-0">
                    <button
                      id={headingId}
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() => toggleArticle(article.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-[#1E1B4B] hover:text-[#7E22CE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] transition-colors"
                    >
                      <div className="flex items-start sm:items-center gap-3">
                        <BookOpen className="w-4 h-4 text-[#9333EA] mt-0.5 sm:mt-0 flex-shrink-0" />
                        <div>
                          <span className="text-xs font-mono text-[#7E22CE] font-semibold uppercase tracking-wider mr-2 px-1.5 py-0.5 rounded bg-[#FAF5FF] border border-[#E9D5FF]">
                            {article.categoryName}
                          </span>
                          <span className="text-sm sm:text-base font-semibold">
                            {article.title}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`p-1 rounded-md bg-white border border-[#E9D5FF] text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                          isExpanded ? 'rotate-180 text-[#9333EA] bg-[#F3E8FF] border-[#C084FC]' : ''
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                  </h2>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    className={`px-5 sm:px-6 transition-all duration-200 ease-in-out ${
                      isExpanded
                        ? 'max-h-[600px] pb-5 sm:pb-6 opacity-100'
                        : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="pt-3 border-t border-[#E9D5FF] space-y-3">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {article.content}
                      </p>

                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {article.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] text-slate-500 px-2 py-0.5 rounded bg-[#FAF5FF] border border-[#E9D5FF]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* 空结果提示面板 */
          <div className="my-12 p-12 rounded-2xl bg-white border border-[#E9D5FF] text-center max-w-xl mx-auto space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA] mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#1E1B4B]">未找到匹配的指引内容</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              抱歉，没有找到与“<span className="text-[#9333EA] font-semibold">{searchQuery}</span>”匹配的帮助文章。请尝试缩短关键词，或切换分类筛选。
            </p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all shadow-subtle"
            >
              <span>清除全部搜索与分类条件</span>
            </button>
          </div>
        )}

        {/* 底部引导区：跳转 /contact/（站内 Link，0 AFF） */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-white to-[#F3E8FF] border border-[#E9D5FF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-card">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-base sm:text-lg font-bold text-[#1E1B4B] flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#9333EA]" />
              <span>仍未排查出故障原因？</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              若遇到复杂的网络协议冲突或特定账户配置问题，您可以进入官方支持中心获取专属客服工单与官方交流社群。
            </p>
          </div>

          <Link
            to="/contact/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#9333EA] hover:bg-[#7E22CE] text-white text-sm font-semibold transition-all shadow-sm flex-shrink-0"
          >
            <span>前往支持与联系中心</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
