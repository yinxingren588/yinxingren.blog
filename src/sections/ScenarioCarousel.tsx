import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SCENARIOS_DATA, SCENARIO_DISCLAIMER } from '@/data/scenarioData';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';

/**
 * 场景体验走马灯组件 (ScenarioCarousel)
 * 
 * 规范实现：
 * 1. 桌面 3 项、平板 2 项、手机 1 项
 * 2. 支持 Prev/Next 按钮、触摸滑动 (Touch Swipe)、键盘方向键控制
 * 3. 悬停、聚焦、后台切屏时暂停
 * 4. 显式提供播放/暂停手动切换按钮 (A11y)
 * 5. prefers-reduced-motion 下强制关闭自动播放
 * 6. 无虚假评论、无假头像、无假评分，标注官方规范免责说明
 */
export const ScenarioCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPageHidden, setIsPageHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 监听视口尺寸，计算每屏展示项目数量
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerPage(3);
      } else if (width >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 监听 prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // 监听标签页可见性变化 (document.visibilityState)
  useEffect(() => {
    const handleVisibility = () => {
      setIsPageHidden(document.visibilityState === 'hidden');
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, []);

  const maxIndex = Math.max(0, SCENARIOS_DATA.length - itemsPerPage);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // 自动播放逻辑：受控于悬停、聚焦、后台、用户手动暂停及 reduced-motion
  useEffect(() => {
    const shouldPause =
      isManualPaused ||
      isHovered ||
      isFocused ||
      isPageHidden ||
      prefersReducedMotion;

    if (shouldPause) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [
    isManualPaused,
    isHovered,
    isFocused,
    isPageHidden,
    prefersReducedMotion,
    handleNext,
  ]);

  // 触摸滑动事件处理
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // 键盘操作响应
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      aria-labelledby="scenarios-carousel-heading"
      className="py-16 md:py-24 border-b border-[#E9D5FF] bg-[#FAF5FF]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 头部标题与控制按钮条 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] text-xs text-[#7E22CE] font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
              <span>实际应用 · 经验参考</span>
            </div>
            <h2
              id="scenarios-carousel-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1E1B4B] leading-tight"
            >
              典型业务场景体验示例
            </h2>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              汇集不同跨境工作流在网络连接、多端协同与隐私防护方面的代表性实践示例。
            </p>
          </div>

          {/* 交互控制器：前翻、后翻与自动播放暂停按钮 */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsManualPaused((prev) => !prev)}
              aria-label={isManualPaused ? '开启自动播放' : '暂停自动播放'}
              className="p-2.5 rounded-lg bg-white border border-[#E9D5FF] hover:border-[#C084FC] text-slate-700 hover:text-[#7E22CE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            >
              {isManualPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="查看上一组场景"
              className="p-2.5 rounded-lg bg-white border border-[#E9D5FF] hover:border-[#C084FC] text-slate-700 hover:text-[#7E22CE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="查看下一组场景"
              className="p-2.5 rounded-lg bg-white border border-[#E9D5FF] hover:border-[#C084FC] text-slate-700 hover:text-[#7E22CE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9333EA]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 官方规范要求声明条：不冒充真实实名评价 */}
        <div className="mb-8 p-3.5 rounded-lg bg-[#F3E8FF]/60 border border-[#E9D5FF] text-xs text-slate-600 text-left">
          <span className="font-semibold text-[#1E1B4B]">声明：</span>
          {SCENARIO_DISCLAIMER}
        </div>

        {/* 走马灯轮播容器 */}
        <div
          ref={containerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="典型使用场景示例轮播"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#9333EA] rounded-2xl"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            }}
          >
            {SCENARIOS_DATA.map((item, index) => (
              <div
                key={item.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`第 ${index + 1} 项，共 ${SCENARIOS_DATA.length} 项：${item.sceneName}`}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#E9D5FF] hover:border-[#C084FC] hover:shadow-md transition-all flex flex-col justify-between text-left shadow-card">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E9D5FF] mb-5">
                      <span className="text-[11px] font-mono text-[#7E22CE] font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <div className="w-7 h-7 rounded-md bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center text-[#9333EA]">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-[#1E1B4B] mb-2">
                      {item.sceneName}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.experienceSummary}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E9D5FF] space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1E1B4B]">
                      <Layers className="w-3.5 h-3.5 text-[#9333EA]" />
                      <span>{item.targetRole}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal">
                      {item.workflowContext}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部点状指示器 */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`跳转到第 ${idx + 1} 页`}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx
                  ? 'w-6 bg-[#9333EA]'
                  : 'w-1.5 bg-[#E9D5FF] hover:bg-[#D8B4FE]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioCarousel;
