export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'www',
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
    'bulma-carousel/dist/css/bulma-carousel.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
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
    "@nuxtjs/proxy"
  ],

  axios: {
    proxy: true,
    credentials: true,
  },

  proxy: {
    '/api': 'http://localhost:4000',
    '/public': 'http://localhost:4000'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
