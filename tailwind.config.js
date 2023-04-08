/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'gray': '#757575',
        'graylight': '#BDBDBD',
        'gold2': '#FFC107',
        'gold3': '#FFA000',
        'gold1': '#FFECB3',
        'magenta2': '#FF4081',
      },
      textColor: {
        


      },
    },
    minHeight: {
      '1/2': '90%',
    },
  },
  plugins: [],
}








// 'sm': '640px', // => @media (min-width: 640px) { ... }
// 'md': '768px', // => @media (min-width: 768px) { ... }
// 'lg': '1024px', // => @media (min-width: 1024px) { ... }
// 'xl': '1280px', // => @media (min-width: 1280px) { ... }
// '2xl': '1536px', // => @media (min-width: 1536px) { ... 





