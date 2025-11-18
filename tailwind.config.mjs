/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#020617",
        "night-soft": "#020923",
        gold: "#facc15"
      },
      boxShadow: {
        "soft-xl": "0 22px 45px rgba(15,23,42,0.65)"
      }
    },
  },
  plugins: [],
};
