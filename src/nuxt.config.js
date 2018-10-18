module.exports = {
  router: {
    linkActiveClass: "is-active"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "ну да москва",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "история москвы норм"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }
    ]
  },
  plugins: [
    // {src: '~plugins/yandex-maps.js', ssr: false},
  ],
  modules: [
    "nuxt-buefy",
    [
      "@nuxtjs/yandex-metrika",
      {
        id: "50548663",
        webvisor: true,
        clickmap: true,
        useCDN: false,
        trackLinks: true,
        accurateTrackBounce: true
      }
    ]
  ],

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },

  /*
   ** Build configuration
   */
  buildDir: "../prod/server/nuxt",
  build: {
    publicPath: "/assets/",
    extractCSS: true,
    // babel: {
    //   presets: [
    //     'es2015',
    //     'stage-0'
    //   ],
    //   plugins: [
    //     ["transform-runtime", {
    //       "polyfill": true,
    //       "regenerator": true
    //     }],
    //   ]
    // },
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
};
