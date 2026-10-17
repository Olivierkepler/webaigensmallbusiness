
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // Theme-aware colors
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",

        // Borders and typography
        line: "rgb(var(--line) / <alpha-value>)",
        txt: "rgb(var(--txt) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        dim: "rgb(var(--dim) / <alpha-value>)",

        // WebAIgen brand colors
        accent: "#FAAA32",
        "accent-ink":
          "rgb(var(--accent-ink) / <alpha-value>)",
      },

      borderRadius: {
        card: "18px",
      },

      keyframes: {
        marquee: {
          to: {
            transform: "translateX(-50%)",
          },
        },
      },

      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-slow": "marquee 55s linear infinite",
      },
    },
  },

  plugins: [],
};

export default config;
