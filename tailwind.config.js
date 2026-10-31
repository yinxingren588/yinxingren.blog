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
        cyber: {
          bg: '#08090E',
          surface: '#0F121C',
          card: '#131726',
          cardHover: '#181E31',
          border: '#242B42',
          borderGlow: '#6D28D9',
          neonViolet: '#8B5CF6',
          neonPurple: '#A855F7',
          neonCyan: '#06B6D4',
          neonEmerald: '#10B981',
          neonRose: '#F43F5E',
          muted: '#94A3B8',
          text: '#F1F5F9',
        },
        brand: {
          bg: '#08090E',
          surface: '#0F121C',
          elevated: '#181E31',
          primary: '#8B5CF6',
          secondary: '#A855F7',
          accent: '#A855F7',
          'accent-hover': '#9333EA',
          border: '#242B42',
          'border-hover': '#8B5CF6',
          text: {
            heading: '#F8FAFC',
            body: '#CBD5E1',
            muted: '#94A3B8',
            subtle: '#64748B',
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
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 8px 30px -4px rgba(168, 85, 247, 0.25)',
        'neon-purple': '0 0 25px rgba(168, 85, 247, 0.35)',
        'neon-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 9.6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 24s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
}
