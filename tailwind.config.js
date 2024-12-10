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
        "light-blue": "#ADD8E6",
        "gray-blue": "#00356b",
        "gray-dark": "#e4e9ed",
        "yale-blue": "#000000",
        "carolina-blue": "#7BAFD4",
        "prussian-blue": "#003153",
      },
    },
  },
  plugins: [],
};
