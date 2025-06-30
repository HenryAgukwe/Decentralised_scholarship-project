/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'web3-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'web3-gradient-2': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'web3-gradient-3': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'web3-gradient-4': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'web3-gradient-5': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'web3-gradient-6': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'web3-gradient-7': 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'web3-gradient-8': 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            transform: 'translateX(-50%)',
          },
          '50%': {
            transform: 'translateX(50%)',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            transform: 'translate(-50%, -50%)',
          },
          '25%': {
            transform: 'translate(50%, -50%)',
          },
          '50%': {
            transform: 'translate(50%, 50%)',
          },
          '75%': {
            transform: 'translate(-50%, 50%)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
}
