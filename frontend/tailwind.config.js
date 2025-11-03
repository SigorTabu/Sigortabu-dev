const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1A73E8',     // Ana mavi
          '50': '#E8F0FE',
          '100': '#D2E3FC',
          '200': '#AECBFA',
          '300': '#8AB4F8',
          '400': '#669DF6',
          '500': '#4285F4',
          '600': '#1A73E8',
          '700': '#1967D2',
          '800': '#185ABC',
          '900': '#174EA6'
        },
        'secondary': {
          DEFAULT: '#34A853',     // Ana yeşil
          '50': '#E6F4EA',
          '100': '#CEEAD6',
          '200': '#A8DAB5',
          '300': '#81C784',
          '400': '#5CB85C',
          '500': '#34A853',
          '600': '#2E8B57',
          '700': '#257D4D',
          '800': '#1E6B3F',
          '900': '#165930'
        },
        'accent': {
          DEFAULT: '#FBBC05',     // Sarı/Turuncu
          '50': '#FFF9E6',
          '100': '#FFF3CC',
          '200': '#FFE999',
          '300': '#FFDF66',
          '400': '#FFD633',
          '500': '#FBBC05',
          '600': '#E6A600',
          '700': '#CC9300',
          '800': '#B38000',
          '900': '#996D00'
        },
        'dark': {
          DEFAULT: '#202124',     // Koyu gri
          '50': '#F5F5F5',
          '100': '#E0E0E0',
          '200': '#BDBDBD',
          '300': '#9E9E9E',
          '400': '#757575',
          '500': '#616161',
          '600': '#424242',
          '700': '#303030',
          '800': '#212121',
          '900': '#121212'
        },
        'light': {
          DEFAULT: '#F8F9FA',     // Açık gri
          '50': '#FFFFFF',
          '100': '#F8F9FA',
          '200': '#F1F3F4',
          '300': '#E8EAED',
          '400': '#DADCE0',
          '500': '#BDC1C6',
          '600': '#9AA0A6',
          '700': '#80868B',
          '800': '#5F6368',
          '900': '#3C4043'
        }
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'hard': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-hard': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
      keyframes: {
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        }
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.8s ease-out',
        'fade-in-right': 'fade-in-right 0.8s ease-out',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite'
      },
      borderRadius: {
        'large': '1rem',
        'extra-large': '2rem',
        'super-large': '3rem'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #1A73E8, #34A853)',
        'gradient-secondary': 'linear-gradient(to bottom right, #FBBC05, #FF5722)',
        'gradient-dark': 'linear-gradient(to right, #202124, #424242)'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'transform': 'transform'
      },
      scale: {
        '102': '1.02',
        '103': '1.03'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};
