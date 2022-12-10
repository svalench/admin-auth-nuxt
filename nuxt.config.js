export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'admin-auth',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Oswald:300,400,500,700,900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/scss/index.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/dotenv', { path: './' }],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  axios: {
     proxy: false,
    baseURL: process.env.apiServer || 'http://localhost:8000'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: null,
    transpile: ["mdb-vue-ui-kit"],
  },

auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          maxAge: 60*60*24*5,
          global: true,
           type: 'Bearer'
        },
        user: {
          property: '',
        },
        endpoints: {
          login: { url: '/token', method: 'post', propertyName: 'token' },
          logout: false,
          refresh: { url: '/refresh/token/', method: 'post' },
          user: { url: '/users/me/', method: 'get' }
        },
        refreshToken: {
        property: 'refresh_token',
        data: 'refresh_token',
        maxAge: 60 * 60 * 24 * 30
      },
        tokenType: '',
      },
    },
    redirect: {
      login: '/login',
      home: '/',
      callback: false,
      logout: '/login'
    },
    cookie:{
      option:{
        maxAge:60*60*8,
      }
    }
  },
}
