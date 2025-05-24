/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B4513', // Saddle Brown
          light: '#A0522D',   // Sienna
          dark: '#654321',    // Dark Brown
        },
        secondary: {
          DEFAULT: '#D2B48C', // Tan
          light: '#DEB887',   // Burlywood
          dark: '#CD853F',    // Peru
        },
        accent: {
          DEFAULT: '#FFD700', // Gold
          light: '#FFE5B4',   // Peach
          dark: '#DAA520',    // Goldenrod
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 