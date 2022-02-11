module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/utils/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: '7.29rem'
    },
    screens: {
      xl: '1920px',
      lg: { 'max': '991px' },
      md: { 'max': '767px' },
      sm: { 'max': '479px' }
    },
    extend: {
      keyframes: {
          rainbow: {
            '0%, 100%': {backgroundColor: '#FC4754'},
            '25%': {backgroundColor: '#5FA5FA'},
            '50%': {backgroundColor: '#C084FC'},
            '75%': {backgroundColor: '#4ADE80'}
          }
      },
      animation: {
        rainbow: 'rainbow 60s ease-in-out infinite'
      },
      colors: {
        "primary": "#FC4754",
        "secondary-dark": "#10061E",
        "blue": "#5FA5FA",
        "purple": "#C084FC",
        "green": "#4ADE80" 
      },
      fontSize: {
        'html-xl': '19.2px',
        'html-base': '1vw',
        'html-lg': '1.7vw',
        'html-md': '2.2vw',
        'html-sm': '3.1vw',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
