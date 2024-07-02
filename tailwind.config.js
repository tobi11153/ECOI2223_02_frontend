/** @type {import('tailwindcss').Config} */
export default {
  content: [],  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins" , "sans-serif"],
        cursive: ["Playwrite IT Moderna", "cursive"],
      },
      colors: {
        primary: "#FF6347",
        secondary: "#32CD32",
        brandDark:"#270c03",
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
}

