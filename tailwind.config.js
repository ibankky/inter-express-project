module.exports = {
    mode: 'jit',
    jit: true,
    purge: {
      safelist: [],
      content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
      ],
    },
    theme: {
      extend: {
        fontFamily: {
          'kanit': ['kanit', 'Arial', 'sans-serif'],
        },
        colors: {
          blue: '#0072BC',
          'light-blue': '#0072BC15',
          yelllow: '#FEDD00',
          gray: '#A6A6A6',
          red: '#E20000',
          'gray-2' : '#919191',
          'gray-3' : '#777777',
          'gray-4' : '#ededed',
          fb: '#3B5A9B',
          linecolor: '#00B100',
          yellow: '#fede00',
          'light-yellow': '#8f7d01'
          
        },
        fontSize: {
          title: ['1.125rem' , '2'],
          'heading-1': ['1.25rem' , '2'],
          base: ['1rem', 1],
          small: ['0.75rem' , 2],
          'small-2': ['0.625rem' , 2]
        },
       /*  backgroundImage: {
          'flashsale-banner': "url('/images/flashsale-banner.png')",
          'flashsale-banner-mobile': "url('/images/flashsale-banner-mobile.png')",
        }, */
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
      //require('@tailwindcss/line-clamp'),
      //require('@tailwindcss/aspect-ratio'),
    ],
  }
  