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
          yelllow: '#FEDD00',
          gray: '#A6A6A6',
          red: '#E20000',
          'gray-2' : '#919191',
          'gray-3' : '#777777',
          fb: '#3B5A9B',
          linecolor: '#00B100'
          
        },
        fontSize: {
          title: ['1.125rem' , '2'],
          'heading-1': ['1.25rem' , '2'],
          base: ['1rem', 1],
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
  