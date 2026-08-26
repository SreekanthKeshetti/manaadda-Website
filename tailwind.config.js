/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E65100",
          "orange-light": "#FF7043",
          "orange-dark": "#BF360C",
          indigo: "#1A237E",
          "indigo-light": "#3949AB",
          "indigo-dark": "#0D1259",
          gold: "#F9A825",
          "gold-light": "#FDD835",
        },
        warm: {
          bg: "#FAF8F5",
          bg2: "#F5F2EB",
          dark: "#1C1917",
          "dark-2": "#292524",
          gray: "#78716C",
          "gray-light": "#A8A29E",
          border: "#E7E5E4",
        },
        success: "#16A34A",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Playfair Display", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(230,81,0,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(230,81,0,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
