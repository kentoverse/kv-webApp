/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "class",
  purge: [
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  screens: {
    'tablet': '960px', 
    'desktop': '1248px',
  },
  colors: {
    'white': '#FFFFFF',
    'purple': '#3F3CBB',
    'midnight': '#121063',
    'metal': '#565584',
    'tahiti-blue': '#3AB7BF',
    'cool-white': '#ECEBFF',
    'bubble-gum': '#FF77E9',
    'copper-rust': '#78DCCA',
  },
  theme: {
    container: {
      center: true,
    },
    extend: {
        colors: {
          'gray1': '#757575',
          'gray2': '#BDBDBD',
          'gray3': '#BDBDBD',
          'gold1': '#FFC107',
          'gold2': '#FFA000',
          'gold3': '#FFECB3',
          'gold5': '#cc9933',
          'mint5': '#cc9933',
          'neon5': '#ccff66',
          'pink5': '#ff3399',
          'purple5': '#ff33ff',
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          mono: ['var(--font-roboto-mono)'],
        },
        letterSpacing: {
          tighter: '-.05em',
          wider: '.05em',
          normal: '-.025em',
        },
        textColor: {
          skin: {
            base: 'var(--color-text-base)',
            muted: 'var(--color-text-muted)',
            inverted: 'var(--color-text-inverted)'
          }
        },
        backgroundColor: {
          skin: {
            fill: 'var(--color-fill)',
            'button-accent': 'var(--color-button-accent)',
            'button-accent-hover': 'var(--color-button-accent-hover)',
            'button-accent-muted': 'var(--color-button-accent-muted)',
          }
        },
        gradientColorStops: {
          skin: {
            hue: 'var(--color-fill)',
            'stops-from-to': '--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);',
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern': "url('/img/hero-pattern.svg')"
        }, 
    },
  },
  plugins: [],
}



// 'sm': '640px', // => @media (min-width: 640px) { ... }
// 'md': '768px', // => @media (min-width: 768px) { ... }
// 'lg': '1024px', // => @media (min-width: 1024px) { ... }
// 'xl': '1280px', // => @media (min-width: 1280px) { ... }
// '2xl': '1536px', // => @media (min-width: 1536px) { ... 





