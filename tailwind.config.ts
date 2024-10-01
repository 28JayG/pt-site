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
        darkGray: "#F6F7F9",
        oliveGreen: "#E1F5F0",
      },
      width: {
        "175": "580px",
        "150": "485px",
        "160": "505px",
        "145": "465px",
        "165": "535px",
        "105": "424px",
        "185": "650px",
      },
      height: {
        "148": "520px",
        "150": "435px",
        "68": "270px",
      },
      padding: {
        "150": "450px"
      }
    },
  },
  plugins: [],
};
export default config;
