/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    fontFamily : {
      global : ['Inter', 'sans-serif'],
    },
    fontSize : {
      'heading' : ['30px', {
          lineHeight : '40px',
          letterSpacing : '0px',
          fontWeight : '700',
        }
      ],
    'section' : ['20px', {
        lineHeight : '32px',
        letterSpacing : '0px',
        fontWeight : '500',
      }
     ],
    'regular' : ['15px', {
        lineHeight : '28px',
        letterSpacing : '0px',
        fontWeight : '400',
      }
    ],
  },
    screens: {
      'mobile' : '375px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
