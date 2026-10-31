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
 * 场景体验走马灯组件 (ScenarioCarousel) - 深色极客科技感暗黑紫主题
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

  // 自动播放时钟
  useEffect(() => {
    if (prefersReducedMotion || isManualPaused || isHovered || isFocused || isPageHidden) {
      return;
    }

    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [prefersReducedMotion, isManualPaused, isHovered, isFocused, isPageHidden, handleNext]);

  // 触摸手势
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
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
      className="py-16 sm:py-24 border-b border-slate-200 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 头部标题与控制按钮条 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-blue-700 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>PRACTICE BENCHMARKS · 业务实践参考</span>
            </div>
            <h2
              id="scenarios-carousel-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              典型出海业务场景实践与体验
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              汇集不同跨境工作流在专线连接、多端协同与隐私防护方面的代表性实践示例。
            </p>
          </div>

          {/* 交互控制器：前翻、后翻与自动播放暂停按钮 */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setIsManualPaused((prev) => !prev)}
              aria-label={isManualPaused ? '开启自动播放' : '暂停自动播放'}
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              {isManualPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="查看上一组场景"
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="查看下一组场景"
              className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 官方规范要求声明条 */}
        <div className="mb-8 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left">
          <span className="font-semibold text-slate-900">声明：</span>
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
          className="relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-3xl"
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
                <div className="h-full p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-100 mb-5">
                      <span className="text-[11px] font-mono text-blue-600 font-semibold uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                        <Briefcase className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.sceneName}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.experienceSummary}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-800">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      <span>{item.targetRole}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-normal font-mono">
                      {item.workflowContext}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部指示器 */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`跳转到第 ${idx + 1} 页`}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx
                  ? 'w-6 bg-blue-600 shadow-sm'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioCarousel;
