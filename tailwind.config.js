/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'background-color': '#8BC6EC',
        
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        'skills-background' : "url('/public/Image/skillls-bg.jpg')",
        'hero-background' : "url('/public/Image/hero-bg.png')",
      },
      fontFamily: {
         'Roboto': ['Poppins", sans-serif'],
      }
    },
  },
  plugins: [],
}

