/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          surface: '#F8FAFC',
          elevated: '#F1F5F9',
          primary: '#1E3A8A', // 隐形人书法深宝蓝
          secondary: '#2563EB', // 科技蓝
          accent: '#3B82F6', // 围巾天蓝
          gold: '#F59E0B', // 纸飞机与星星金黄
          border: '#E2E8F0',
          'border-hover': '#93C5FD',
          text: {
            heading: '#0F172A',
            body: '#334155',
            muted: '#64748B',
            subtle: '#94A3B8',
          }
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Noto Sans SC"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 10px 30px -4px rgba(37, 99, 235, 0.12)',
        'blue-glow': '0 0 25px rgba(37, 99, 235, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 9.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
    },
  },
  plugins: [],
}
