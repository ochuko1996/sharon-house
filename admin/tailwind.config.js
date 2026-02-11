/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6FAF2E",
          dark: "#3E6F1E",
          darker: "#2F5516",
        },
        accent: {
          DEFAULT: "#e3781a",
          dark: "#c55d0f",
        },
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
