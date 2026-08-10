/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0c1b',
          800: '#11142a',
          700: '#1a1e3a',
          600: '#262b52',
        },
        royal: {
          50: '#eaf0ff',
          100: '#d4e0ff',
          200: '#a9c1ff',
          300: '#7ea0ff',
          400: '#4f7bff',
          500: '#2b59ff',
          600: '#1c3fe0',
          700: '#1630b3',
          800: '#102487',
          900: '#0a175c',
        },
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(43, 89, 255, 0.45)',
        'glow-lg': '0 0 120px -20px rgba(43, 89, 255, 0.6)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #2b59ff 0%, #4f7bff 50%, #7ea0ff 100%)',
        'dark-gradient': 'radial-gradient(circle at 20% 20%, #11142a 0%, #05060f 60%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
