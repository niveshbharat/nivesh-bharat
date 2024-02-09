import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p_orange: "#ff9933",
        p_blue: "#000080",
        "p_green-100": "#e0f2e3",
        "p_green-200": "#b1e5b9",
        "p_green-300": "#82d891",
        "p_green-400": "#52cc67",
        "p_green-500": "#0ea362",
        "p_green-600": "#0b8e50",
        "p_green-700": "#0a753f",
        "p_green-800": "#085c2f",
        "p_green-900": "#064e23",
        "p_darkgreen": "#053D25",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
