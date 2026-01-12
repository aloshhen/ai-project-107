/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
          400: '#94a3b8'
        },
        electric: {
          coffee: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)'
        }
      },
      backgroundImage: {
        'glass-blur': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}