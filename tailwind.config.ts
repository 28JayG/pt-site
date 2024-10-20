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
        onset: ["Onset", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "green-light": "#D6FFE9",
        "green-dark": "#012D13",
        grey: {

        },
        primary: "#40BA77",
        secondary: "#000",
        footerBg: "#E5F4EB",
        skyblue: "#D6DFFF",
        mellowYellow: "#E8F9CD",
        purple: "#E5D6FF",
        darkGray: "#F6F7F9",
        oliveGreen: "#E1F5F0",
        textSecondary: "#484A61",
        darkBlue: "#161C52",
      },
      width: {
        "87": "348px",
        "175": "580px",
        "150": "485px",
        "160": "505px",
        "145": "465px",
        "165": "535px",
        "105": "424px",
        "185": "650px",
      },
      padding: {
        'max-width-single-spacing': 'calc((100vw - 1312px) / 2)'
      },
      spacing: {
        footerHeight: "710px",
      },
      height: {
        "148": "520px",
        "150": "435px",
        "68": "270px",
      },
      zIndex: {
        appBar: "2000",
      },
      lineHeight: {
        heroTitle: "74px",
        heroSubtitle: "27px",
        "12.5": "50px",
        "15": "60px",
        "7.5": "30px"
      },
      fontSize: {
        "12.5": "54px",

        xs: "0.75rem",
        sm: "0.875rem", //14px
        base: "1rem", //16px
        lg: "1.125rem", //18px 
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "2.5rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
};
export default config;
