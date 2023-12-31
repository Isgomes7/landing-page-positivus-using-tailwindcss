/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'dark' : '#191A23',
        'green-01' : '#B9FF66',
        'gray-01' : '#F3F3F3',
        'gray-02' : '#898989',
        'gray-03' : '#292A32',
      },
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    },
  },
  plugins: [],
}

