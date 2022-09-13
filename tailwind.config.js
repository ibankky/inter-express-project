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
          'db-heavent': ['DB Heavent', 'Arial', 'sans-serif'],
        },
        colors: {
          blue: '#0072BC',
          yelllow: '#FEDD00',
          gray: '#A6A6A6',
          'gray-2' : '#919191',
          
        },
        fontSize: {
          'heading-1': ['1.632rem', 1],
          'heading-2': ['1.316rem', 1],
          'heading-3': ['1rem', 1],
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
  