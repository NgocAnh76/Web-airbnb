/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '0',
        },
      },
      width: {
        sm: '24rem', // 384px
        md: '32rem', // 512px
        lg: '48rem', // 768px
      },
      colors: {
        primary: '#3554d1',
        secondary: '#051135',
        dark: '#697488',
        'dark-2': '#f5f6fc',
        'dark-3': '#eee',
        'blue-1': '#e5f0fd',
        'blue-2': '#2B7FFF',
        'blue-3': '#111827',
      },
    },
  },
  plugins: [],
};
