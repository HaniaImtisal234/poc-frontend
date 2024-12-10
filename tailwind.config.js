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
        "sea-salt": "#F5F5F5",
        "light-blue": "#ADD8E6",
        "yale-blue": "#00356B",
        "carolina-blue": "#7BAFD4",
        "prussian-blue": "#003153",
      },
    },
  },
  plugins: [],
};
