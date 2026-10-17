import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import OfficialLink from '@/components/OfficialLink';
import { ROUTES } from '@/config/routes';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  // 匹配当前路由项，精准判断是否允许展示 AFF
  // 确保 /terms/、/privacy/ 和 404 页面严格为 false
  const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const matchedRoute = ROUTES.find((r) => r.path === location.pathname || r.path === currentPath);
  const isSpecialNoAffPage =
    location.pathname.startsWith('/terms') ||
    location.pathname.startsWith('/privacy') ||
    !matchedRoute ||
    matchedRoute.id === 'not-found';
  const showAff = matchedRoute ? matchedRoute.showAff && !isSpecialNoAffPage : false;

  // 导航栏展示项目（标记为 isNav: true 的项）
  const navItems = ROUTES.filter((r) => r.isNav);

  // 切换路由时自动关闭移动端抽屉
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // 控制背景滚动锁定与恢复
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      // 聚焦到关闭按钮或第一个链接
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalStyle === 'hidden' ? '' : originalStyle;
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // 监听键盘按键：Escape 关闭与焦点返回
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (isOpen) {
      setIsOpen(false);
      toggleButtonRef.current?.focus();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E9D5FF] bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo：仅能返回首页 */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="主要导航">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path.slice(0, -1)));
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#9333EA] ${
                  isActive ? 'text-[#9333EA] font-semibold' : 'text-slate-600'
                }`}
              >
                {item.navLabel}
              </Link>
            );
          })}
        </nav>

        {/* 桌面端商业操作 CTA 入口 */}
        <div className="hidden md:flex items-center gap-4">
          {showAff && (
            <OfficialLink className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-md transition-all shadow-subtle focus:outline-none focus:ring-2 focus:ring-[#9333EA]/50">
              <span>立即体验</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </OfficialLink>
          )}
        </div>

        {/* 移动端菜单切换按钮 */}
        <div className="flex md:hidden items-center gap-2">
          {showAff && (
            <OfficialLink className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-md transition-all mr-1">
              <span>立即体验</span>
            </OfficialLink>
          )}

          <button
            ref={toggleButtonRef}
            type="button"
            onClick={handleToggle}
            aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-[#F3E8FF] border border-[#E9D5FF] focus:outline-none focus:ring-2 focus:ring-[#9333EA] transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* 移动端侧滑/浮层抽屉导航 */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="移动端全站导航"
          className="fixed inset-0 top-16 z-50 md:hidden overflow-hidden"
        >
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 top-16 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => {
              setIsOpen(false);
              toggleButtonRef.current?.focus();
            }}
            aria-hidden="true"
          />

          {/* 抽屉内容容器，杜绝横向溢出 */}
          <div className="relative w-full max-w-sm ml-auto h-full bg-white border-l border-[#E9D5FF] shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E9D5FF]">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  导航菜单
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    toggleButtonRef.current?.focus();
                  }}
                  aria-label="关闭菜单"
                  className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-[#F3E8FF] transition-colors"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>

              <nav className="flex flex-col space-y-2" aria-label="移动端栏目列表">
                {navItems.map((item, index) => {
                  const isActive =
                    location.pathname === item.path ||
                    (item.path !== '/' && location.pathname.startsWith(item.path.slice(0, -1)));
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      ref={index === 0 ? firstNavLinkRef : undefined}
                      onClick={() => setIsOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#F3E8FF] text-[#9333EA] font-semibold border border-[#E9D5FF]'
                          : 'text-slate-600 hover:text-[#1E1B4B] hover:bg-[#FAF5FF]'
                      }`}
                    >
                      {item.navLabel}
                    </Link>
                  );
                })}

                {/* 移动端额外提供下载入口 */}
                <Link
                  to="/downloads/"
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/downloads')
                      ? 'bg-[#F3E8FF] text-[#9333EA] font-semibold border border-[#E9D5FF]'
                      : 'text-slate-600 hover:text-[#1E1B4B] hover:bg-[#FAF5FF]'
                  }`}
                >
                  客户端下载
                </Link>
              </nav>
            </div>

            {/* 底部商业 CTA 或免责说明（仅在允许页面展示 AFF，条款/隐私/404绝对为 0） */}
            <div className="pt-6 border-t border-[#E9D5FF] space-y-3">
              {showAff ? (
                <OfficialLink
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#9333EA] hover:bg-[#7E22CE] rounded-lg transition-all shadow-subtle"
                >
                  <span>立即体验</span>
                  <ArrowUpRight className="w-4 h-4" />
                </OfficialLink>
              ) : (
                <div className="text-[11px] text-slate-500 text-center py-2">
                  本页面为合规纯净页，不含任何商业推广链接。
                </div>
              )}

              <p className="text-[10px] text-slate-500 text-center leading-relaxed">
                第三方信息导航平台 · 严守合规
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
