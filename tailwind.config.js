/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{html,js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'mobile': '640px', // => @media (min-width: 640px) { ... }
      'tablet': '720px', // => @media (min-width: 640px) { ... }
      'laptop': '1024px', // => @media (min-width: 1024px) { ... }
      'desktop': '1280px', // => @media (min-width: 1280px) { ... }
    },
    extend: {
        colors: {
          'gray1': '#757575',
          'gray2': '#BDBDBD',
          'gray3': '#BDBDBD',
          'gold1': '#FFC107',
          'gold2': '#FFA000',
          'gold3': '#FFECB3',
          'info': '#306cdb',
          'success': '#34eb55',
          'warning': '#db7d30',
          'danger': '#cc2740',
        },
        fontFamily: {
          sans: ['var(--font-inter)'],
          mono: ['var(--font-roboto-mono)'],
        },
        textColor: {
          skin: {
            base: 'var(--color-text-base)',
            muted: 'var(--color-text-muted)',
            inverted: 'var(--color-text-inverted)'
          }
        },
        letterSpacing: {
          tighter: '-.05em',
          wider: '.05em',
          normal: '-.025em',
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





