import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  Sparkles,
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Terminal,
  MessageSquare,
  Search,
} from 'lucide-react';
import { BRAND_NAME, openCrispChat } from '@/config/site';
import OfficialLink from '@/components/OfficialLink';
import {
  getHelpArticleById,
  getRelatedHelpArticles,
} from '@/data/helpData';

export const HelpArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getHelpArticleById(id) : undefined;

  useEffect(() => {
    if (article) {
      document.title = `${article.title} - ${BRAND_NAME}官网帮助中心`;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          `${article.summary} 详细图文指引与${BRAND_NAME}官方专线使用说明。`
        );
      }
      const metaRobots = document.querySelector('meta[name="robots"]');
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    }
    // 页面跳转时自动滚动到顶部
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="py-16 sm:py-24 bg-white min-h-[70vh] flex items-center justify-center text-slate-800">
        <div className="max-w-md mx-auto px-4 text-center space-y-5">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mx-auto">
            <Search className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">未找到相关帮助文章</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            您访问的指引文章可能已迁移或编号有误。建议返回帮助中心检索其他指南。
          </p>
          <div className="pt-2">
            <Link
              to="/help/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>返回帮助中心首页</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedHelpArticles(article, 3);

  return (
    <article className="py-8 sm:py-16 bg-white min-h-screen text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                首页
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link to="/help/" className="hover:text-blue-600 transition-colors">
                帮助中心
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="text-blue-600 font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
              {article.title}
            </li>
          </ol>
        </nav>

        {/* 文章头屏元信息与 H1 标题 */}
        <header className="mb-10 space-y-4 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 font-mono">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>{article.categoryName}</span>
            </span>

            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-xs font-bold text-blue-800 font-mono">
              #{article.keyword}
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>更新时间: {article.updatedAt}</span>
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>阅读用时: 约 {article.readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* 摘要导言 Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-start gap-3.5 text-slate-700 text-sm sm:text-base leading-relaxed">
            <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-blue-900 block sm:inline mr-1">内容提要：</span>
              <span>{article.summary}</span>
            </div>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {article.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-mono text-slate-600 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* 正文各章节 */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed mb-14">
          {article.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2.5 pt-2">
                <span className="w-1.5 h-6 rounded-full bg-blue-600 flex-shrink-0" />
                <span>{section.heading}</span>
              </h2>

              <p className="text-slate-600 leading-relaxed">
                {section.content}
              </p>

              {/* 重点提示 Tips */}
              {section.tips && section.tips.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  {section.tips.map((tip, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 标准化操作步骤 Steps */}
              {section.steps && section.steps.length > 0 && (
                <div className="space-y-2.5 pt-1">
                  {section.steps.map((step, stepIdx) => (
                    <div
                      key={stepIdx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 text-xs sm:text-sm text-slate-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-mono text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {stepIdx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* 终端代码 / 命令片段 Code */}
              {section.code && (
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto shadow-inner space-y-2">
                  <div className="flex items-center gap-2 text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>TERMINAL COMMAND / 配置命令</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed">{section.code}</pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 文章底部快捷导航组 */}
        <div className="pt-6 pb-10 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <Link
            to="/help/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition-all border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回帮助中心文章列表</span>
          </Link>

          <OfficialLink className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm">
            <span>进入官方控制台仪表盘</span>
            <ArrowRight className="w-4 h-4" />
          </OfficialLink>
        </div>

        {/* 同类推荐指引模块 */}
        {relatedArticles.length > 0 && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900">
                相关主题推荐指引
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/help/${rel.id}/`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-2 flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-blue-700 font-semibold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {rel.categoryName}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-semibold text-blue-600 inline-flex items-center gap-1">
                    <span>阅读全文</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 底部引导区：唤起 Crisp 在线客服 */}
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
    </article>
  );
};

export default HelpArticlePage;
