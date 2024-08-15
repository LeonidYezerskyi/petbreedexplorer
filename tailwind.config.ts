import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: "32px",
    },
    fontSize: {
      xs: ["12px", { lineHeight: "auto" }],
      sm: ["14px", { lineHeight: "140%" }],
      base: ["16px", { lineHeight: "140%" }],
      lg: ["18px", { lineHeight: "140%" }],
      xl: ["20px", { lineHeight: "140%" }],
      "2xl": ["24px", { lineHeight: "120%" }],
      "3xl": ["32px", { lineHeight: "140%" }],
      "4xl": ["36px", { lineHeight: "120%" }],
      "5xl": ["40px", { lineHeight: "120%" }],
      "6xl": ["72px", { lineHeight: "110%" }],
    },
    extend: {
      colors: {
        primary: {
          0: "#F8FBFF",
          100: "#DDEBFE",
          200: "#A9CCFD",
          300: "#76AEFC",
          400: "#3185FB",
          500: "#0E72FA",
          600: "#055FDF",
          700: "#0450BA",
          800: "#034095",
          900: "#02306F",
        },
        secondary: {
          100: "#FAFAFB",
          200: "#F3F5F7",
          300: "#C3D4E9",
          400: "#90A3BF",
          500: "#596780",
          600: "#475266",
          700: "#3A4353",
          800: "#20252E",
          900: "#040815",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;
