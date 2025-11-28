import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Brand Colors (Global)
        google: {
          blue: "#4285F4",
          red: "#EA4335",
          yellow: "#FBBC05",
          green: "#34A853",
        },
        // Havsan Robotik Colors
        robotik: {
          blue: "#4285F4",
          platin: "#E3E5E8",
          yellow: "#FBBC05",
          navy: "#1A237E",
        },
        // Havsan AI Colors (Gradient Set)
        ai: {
          blue: "#4E85EB",
          purple: "#8875D6",
          coral: "#D9666F",
        },
        // Havsan Enerji Colors
        enerji: {
          mustard: "#F3C242",
          orange1: "#F99F1B",
          orange2: "#E87D25",
          vermillion: "#EE5F26",
          emerald: "#00A786",
          skyblue: "#009CC9",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "SF Pro",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-ai": "linear-gradient(135deg, #4E85EB 0%, #8875D6 50%, #D9666F 100%)",
        "gradient-enerji": "linear-gradient(135deg, #F3C242 0%, #F99F1B 25%, #E87D25 50%, #EE5F26 75%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px rgba(66, 133, 244, 0.5)" },
          "50%": { textShadow: "0 0 20px rgba(66, 133, 244, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
