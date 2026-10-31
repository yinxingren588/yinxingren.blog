import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FAQ_DATA } from '@/data/faqData';
import { openCrispChat } from '@/config/site';
import { ChevronDown, HelpCircle, MessageSquareCode, MessageSquare } from 'lucide-react';

/**
 * 常见问题 FAQ 手风琴组件 (FAQSection) - 深色极客科技感暗黑紫主题
 */
export const FAQSection: React.FC = () => {
  // 默认展开第1项和第4项
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
      className="py-16 sm:py-24 border-b border-slate-200 bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>KNOWLEDGE BASE & FAQ · 官方常见问答</span>
          </div>
          <h2
            id="faq-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            常见问题与官方服务指南 (FAQ)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            关于隐形人官方专线方案选型、客户端配置、1.0x 真实倍率保障与官方控制台登录的精选解答。
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
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all hover:border-blue-400 shadow-sm"
              >
                <h3 className="text-base font-medium m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-slate-800 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-blue-600 font-bold w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm sm:text-base font-semibold">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-600 border-blue-200' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed text-left space-y-3">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部知识库指引 */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 flex-shrink-0">
              <MessageSquareCode className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                未找到您需要的解答？
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                欢迎查阅官方详尽使用知识库，或直接在控制台提交 7×24 官方技术工单。
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              to="/help/"
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors shadow-sm"
            >
              官方帮助文档
            </Link>
            <Link
              to="/contact/"
              className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors shadow-sm"
            >
              官方客服渠道
            </Link>
            <button
              type="button"
              onClick={openCrispChat}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>联系在线客服</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
