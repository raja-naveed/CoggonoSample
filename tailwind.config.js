/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'soft-xl': '0 10px 25px rgba(0, 0, 0, 0.1)', 
        'deep-lg': '0 8px 20px rgba(0, 0, 0, 0.2)',  
        'card-hover': '0 12px 30px rgba(0, 0, 0, 0.15)', 
        'image': '0 6px 15px rgba(0, 0, 0, 0.2)', 
        'cta': '0 15px 40px rgba(33, 150, 243, 0.3)', 
      },
    },
  },
  plugins: [],
}