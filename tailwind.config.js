/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        "sea-salt": "#FFFFFF",
        "light-blue": "#ADD8E6",
        "gray-blue": "#00356b",
        "gray-dark": "#F2F5F7",
        "yale-blue": "#000000",
        "carolina-blue": "#7BAFD4",
        "prussian-blue": "#003153",
      },
    },
  },
  plugins: [],
};
