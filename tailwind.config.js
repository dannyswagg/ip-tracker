/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGrey: "hsl(0, 0%, 17%)",
        darkGrey: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};

