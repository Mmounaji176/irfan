/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        irfane: {
          dark: "#4a148c",
          violet: "#7b1fa2",
          green: "#9c27b0",
          light: "#ce93d8",
          orange: "#f57c00",
          yellow: "#ffc107",
          blue: "#1976d2",
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
