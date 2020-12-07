export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~plugins/veevalidate",
    "~plugins/vueFrappe",
    "~plugins/lodash",
    "~plugins/vue-quill"
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
  ],
  proxy: {
    "/api": "http://localhost:4000",
    "/public": "http://localhost:4000"
    // "/api": "http://admin.brfonline.tk",
    // "/public": "http://admin.brfonline.tk"
  },
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
