import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      screens: {
        '2xl': '1320px'
      },
      colors: {
        primary: '#F9F9F9',
        secondary: '#3366FF',
        accent: '#8BE8CB',
        'primary-text': '#2F4858',
        'secondary-text': '#81A4CD',
        'black-text': '#1A3A3A',
        'white-text': '#DBE4EE',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
