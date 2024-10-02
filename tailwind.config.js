/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_local-components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(197, 30, 30)",
        secondary: "rgb(41, 36, 36)",
        accent: "black",
        bg: "rgb(17, 17, 17)",
      },
    },
  },
  plugins: [],
}
