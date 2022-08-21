module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '90vh': '90vh',
        '80vh': '80vh',
        '70vh': '70vh',
        '50vh': '50vh',
        '20vh': '20vh',
      },
      colors: {
        bg_header_shadow: 'rgba(0,0,0,0.8)',
        violet: '#6d81fe',
        blue: '#3598da',
      },
      backgroundImage: {
        bg_header: 'url(/src/assets/images/desktop.jpg)',
      },
      gridAutoRows: {
        '2fr': 'minmax(0, 1fr)',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease',
        fadeOut: 'fadeOut 0.3s ease',
      },
      keyframes: {
        fadeIn: {
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' },
        },
        fadeOut: {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(0)' },
        },
      },
    },
  },
  plugins: [],
};
