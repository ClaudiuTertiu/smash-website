import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#CC0A1E",
          50: "#FDE7EA",
          100: "#F8C2C8",
          200: "#F08A94",
          300: "#E75563",
          400: "#DF2739",
          500: "#CC0A1E",
          600: "#A30619",
          700: "#7B0413",
          800: "#52010C",
          900: "#2B0006",
        },
        dark: {
          DEFAULT: "#0B0B0B",
          50: "#1A1A1A",
          100: "#141414",
          200: "#0B0B0B",
          300: "#080808",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 26px rgba(204, 10, 30, 0.28)",
        "glow-lg": "0 0 40px rgba(204, 10, 30, 0.32)",
        "glow-sm": "0 0 14px rgba(204, 10, 30, 0.22)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay":
          "linear-gradient(135deg, rgba(204, 10, 30, 0.55) 0%, transparent 45%, rgba(11, 11, 11, 0.9) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
