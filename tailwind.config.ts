import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        onset: ['Onset', 'sans-serif'],
      },
      colors: {
        primary: "#40BA77",
        footerBg: "#E5F4EB",
        skyblue: "#D6DFFF",
        leafGreen: "#D6FFE9",
        mellowYellow: "#E8F9CD",
        purple: "#E5D6FF",
      }
    },
  },
  plugins: [],
};
export default config;
