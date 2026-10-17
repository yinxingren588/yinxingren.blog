import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '@/data/faqData';
import { ChevronDown, HelpCircle, ArrowRight, MessageSquareCode } from 'lucide-react';

/**
 * 常见问题 FAQ 手风琴组件 (FAQSection)
 * 
 * 规范要求：
 * 1. 采用可访问手风琴（Accessible Accordion），折叠答案真实保留在 DOM 中
 * 2. aria-expanded 与 aria-controls 规范对齐，支持键盘交互
 * 3. 底部链接跳转 /help/ 和 /contact/，绝不使用 AFF
 */
export const FAQSection: React.FC = () => {
  // 默认展开第1项和第4项（包含官网核对项）
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'select-plan': true,
    'verify-official-site': true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      aria-labelledby="faq-section-heading"
      className="py-16 md:py-24 border-b border-[#E9D5FF] bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>解疑释惑 · 快速指引</span>
          </div>
          <h2
            id="faq-section-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
          >
            常见问题解答 (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed max-w-2xl mx-auto">
            关于隐形人网络连接方案选型、客户端配置、官方入口核实及日常故障排查的精选解答。
          </p>
        </div>

        {/* 手风琴列表容器 */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = !!openItems[item.id];
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] overflow-hidden transition-colors hover:border-[#C084FC]"
              >
                <h3 className="text-base font-medium m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-[#1E1B4B] hover:text-[#7E22CE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#7E22CE] font-bold w-5">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base font-semibold">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`p-1 rounded-md bg-white border border-[#E9D5FF] text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#9333EA] border-[#C084FC] bg-[#F3E8FF]' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* 折叠答案面板：始终保留在 DOM 中，方便搜索引擎抓取与无障碍屏幕阅读器 */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`px-5 sm:px-6 transition-all duration-200 ease-in-out ${
                    isOpen
                      ? 'max-h-[600px] pb-5 sm:pb-6 opacity-100'
                      : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <div className="pt-2 border-t border-[#E9D5FF] text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部引导区：跳转 /help/ 和 /contact/，绝不使用 AFF */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF5FF] border border-[#E9D5FF] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-[#1E1B4B] flex items-center justify-center sm:justify-start gap-2">
              <MessageSquareCode className="w-4 h-4 text-[#9333EA]" />
              <span>仍有未解决的疑问？</span>
            </h4>
            <p className="text-xs text-slate-600">
              您可以查阅更详尽的故障排错手册，或前往社群与我们交流反馈。
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/help/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all shadow-subtle"
            >
              <span>帮助中心手册</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9333EA]" />
            </Link>

            <Link
              to="/contact/"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-[#F3E8FF] border border-[#E9D5FF] hover:border-[#C084FC] text-xs font-semibold text-[#1E1B4B] hover:text-[#7E22CE] transition-all shadow-subtle"
            >
              <span>联系官方社群</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#9333EA]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
