# 隐形人 (Invisible) 官方服务指引平台

专注隐形人（Invisible）跨境网络连接特性解析、多平台客户端配置教程与服务选型参考。

---

## 🛠️ 技术栈

- **前端框架**：React 18 + TypeScript + Vite 6
- **样式方案**：Tailwind CSS 3 (浅紫紫罗兰品牌定制主题)
- **路由方案**：React Router DOM 6
- **预渲染机制**：Vite SSR + Headless SSG 预渲染流水线
- **SEO & 结构化**：动态 TDK、Open Graph、Twitter Card、JSON-LD (WebSite, WebPage, FAQPage, BreadcrumbList)、Sitemap、Robots、IndexNow

---

## 📦 9 大官方配套规格

包含 **6 款周期循环订阅方案** 与 **3 款一次性买断永不过期流量包**：

1. **⚡ 星耀风暴 365天不熄**：¥109.00/年，80GB/月，全 IPLC 专线，年付折合约 8 元/月
2. **👑 隐形人 白银纪元**：¥24.00/月，144GB/月，日常网课、高清会议与开发首选
3. **💥 隐形人 黄金序列**：¥48.00/月，360GB/月，BGP 专线优化，4K/8K 流媒体主力
4. **🔱 隐形人 铂金至臻**：¥105.00/月，750GB/月，高频下载与大文件传输
5. **💎 隐形人 钻石穹顶**：¥185.00/月，1.6TB/月，团队超大流量池
6. **✈️ 王者定制版**：¥680.00/月，500GB/月独立带宽，顶配商业级解决方案
7. **🪐 一次性小流量**：¥229.00/一次性，160GB 永不过期备用网络安全气囊
8. **🌀 一次性标准流量包**：¥549.00/一次性，420GB 永不过期商旅跨年黄金组合
9. **🌊 一次性精英流量包**：¥1199.00/一次性，1.0TB 永不过期旗舰独享买断

---

## 🚀 常用命令

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发服务 (默认端口 3000)
npm run dev

# 3. 生产全量打包构建 (含资源自动生成、客户端打包、SSR构建与预渲染)
npm run build

# 4. 本地预览生产构建产物
npm run preview
```

---

## 🌐 部署指南 (如 Cloudflare Pages / Vercel)

- **构建命令 (Build Command)**：`npm run build`
- **输出目录 (Output Directory)**：`dist`
- **Node.js 版本**：`>= 18`
