/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        irfane: {
          dark: "#2e7d32",
          green: "#4caf50",
          light: "#a5d6a7",
          orange: "#ff9800",
          yellow: "#ffc107",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
