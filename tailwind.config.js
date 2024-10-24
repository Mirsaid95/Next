/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0",
        margin : "0 auto",
        screens:{
          lg: '1240px',

        }
      },
      
    },
  },
  plugins: [],
}