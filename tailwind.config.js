/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
  animation: {
    'slow-zoom': 'zoom 20s infinite alternate',
  },
  keyframes: {
    zoom: {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(1.1)' },
    }
  }
},
  },
  plugins: [],
};
