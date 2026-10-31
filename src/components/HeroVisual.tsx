import React from 'react';
import { BRAND_NAME } from '@/config/site';

/**
 * HeroVisual: 首页官方品牌核心视觉
 * 按照用户明确指令，彻底去除网格、外框、阴影卡片与伪标签，
 * 直接大图纯净呈现官方 Logo 原图，与背景浑然一体。
 */
export const HeroVisual: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[500px] mx-auto flex items-center justify-center select-none"
      aria-label={`${BRAND_NAME} 官方品牌形象`}
    >
      <img
        src="/images/hero-visual.png"
        alt={`${BRAND_NAME} 官方品牌形象`}
        className="w-full max-w-[420px] sm:max-w-[460px] h-auto object-contain select-none transition-transform duration-300 hover:scale-[1.02]"
        width={512}
        height={512}
        loading="eager"
      />
    </div>
  );
};

export default HeroVisual;
