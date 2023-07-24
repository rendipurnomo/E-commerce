/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'men': 'url(https://images.pexels.com/photos/11805488/pexels-photo-11805488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        'shoes': 'url(https://images.pexels.com/photos/3194609/pexels-photo-3194609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        'women': 'url(https://images.pexels.com/photos/14581929/pexels-photo-14581929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        'accesoris': 'url(https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=600)',
        'sale': 'url(https://images.pexels.com/photos/10037708/pexels-photo-10037708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        'newSeason': 'url(https://images.pexels.com/photos/2899937/pexels-photo-2899937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      }
    },
  },
  plugins: [],
}

