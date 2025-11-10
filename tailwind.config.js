/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF8A65",
          light: "#FFAB91",
          dark: "#E64A19",
        },
        secondary: {
          DEFAULT: "#81C784",
          light: "#A5D6A7",
          dark: "#4CAF50",
        },
        neutral: {
          background: "#FAF9F6",
          surface: "#FFFFFF",
          "text-primary": "#2C2C2C",
          "text-secondary": "#6B6B6B",
          "text-muted": "#9E9E9E",
          border: "#E0E0E0",
        },
        accent: {
          warning: "#FFB74D",
          error: "#E57373",
          info: "#64B5F6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        accent: ["Crimson Pro", "serif"],
      },
      fontSize: {
        "hero": ["3.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "section-title": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "subtitle": ["1.75rem", { lineHeight: "1.5", fontWeight: "500" }],
        "body-large": ["1.125rem", { lineHeight: "1.75", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        "body-small": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        "caption": ["0.75rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      spacing: {
        "section": "6rem",
        "section-mobile": "4rem",
      },
      borderRadius: {
        "card": "16px",
        "button": "8px",
      },
      boxShadow: {
        "card": "0 4px 12px rgba(0, 0, 0, 0.1)",
        "card-hover": "0 8px 24px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

