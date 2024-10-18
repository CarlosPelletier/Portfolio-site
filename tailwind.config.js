/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background' : "url('src/assets/images/home-banner-background.png')",
        'aboutbg' : "url('src/assets/images/aboutbg.png')",
        'projectbg' : "url('src/assets/images/Projectbg.png')"
      }
    },
  },
  plugins: [],
}