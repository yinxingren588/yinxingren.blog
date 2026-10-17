/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF5FF',
          surface: '#FFFFFF',
          elevated: '#F3E8FF',
          primary: '#E9D5FF',
          secondary: '#D8B4FE',
          accent: '#9333EA',
          'accent-hover': '#7E22CE',
          border: '#E9D5FF',
          'border-hover': '#D8B4FE',
          text: {
            heading: '#1E1B4B',
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
        'subtle': '0 1px 3px 0 rgba(147, 51, 234, 0.08)',
        'card': '0 4px 20px -2px rgba(147, 51, 234, 0.08)',
        'card-hover': '0 8px 30px -4px rgba(147, 51, 234, 0.14)',
      },
      animation: {
        'pulse-slow': 'pulse 9.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
      },
    },
  },
  plugins: [],
}
