import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import OfficialLink from '@/components/OfficialLink';
import { ROUTES } from '@/config/routes';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstNavLinkRef = useRef<HTMLAnchorElement>(null);

  // 匹配当前路由项
  const currentPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const matchedRoute = ROUTES.find((r) => r.path === location.pathname || r.path === currentPath);
  const isSpecialNoCtaPage =
    location.pathname.startsWith('/terms') ||
    location.pathname.startsWith('/privacy') ||
    !matchedRoute ||
    matchedRoute.id === 'not-found';
  const showCta = matchedRoute ? matchedRoute.showAff && !isSpecialNoCtaPage : false;

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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo 与 实时专线状态徽章 */}
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] text-slate-600 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Activity className="w-3 h-3 text-blue-600" />
            <span>全球专线骨干网: 100% 正常 (SLA 99.9%)</span>
          </div>
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
                className={`text-sm font-medium transition-all relative py-1 hover:text-blue-600 ${
                  isActive
                    ? 'text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600'
                    : 'text-slate-600'
                }`}
              >
                {item.navLabel}
              </Link>
            );
          })}
        </nav>

        {/* 桌面端官方控制台 CTA */}
        <div className="hidden md:flex items-center gap-4">
          {showCta && (
            <OfficialLink className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <span>官方控制台</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </OfficialLink>
          )}
        </div>

        {/* 移动端菜单切换按钮 */}
        <div className="flex md:hidden items-center gap-2">
          {showCta && (
            <OfficialLink className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md transition-all shadow-sm mr-1">
              <span>控制台</span>
            </OfficialLink>
          )}

          <button
            ref={toggleButtonRef}
            type="button"
            onClick={handleToggle}
            aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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

          {/* 抽屉内容容器 */}
          <div className="relative w-full max-w-sm ml-auto h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  官方导航终端
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    toggleButtonRef.current?.focus();
                  }}
                  aria-label="关闭菜单"
                  className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
                          ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200 shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {item.navLabel}
                    </Link>
                  );
                })}

                <Link
                  to="/downloads/"
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/downloads')
                      ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  官方客户端下载
                </Link>
              </nav>
            </div>

            {/* 底部控制台入口与官方标识 */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              {showCta && (
                <OfficialLink
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-sm"
                >
                  <span>进入官方控制台</span>
                  <ArrowUpRight className="w-4 h-4" />
                </OfficialLink>
              )}

              <p className="text-[11px] text-slate-500 text-center leading-relaxed font-mono">
                隐形人官方网站 · 全球专线网络加速中心
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
