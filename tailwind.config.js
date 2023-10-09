/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        technor: ["Technor", "sans-serif"],
        panchang: ["Panchang", "sans-serif"],
      },
    },
  },
  plugins: [],
};
