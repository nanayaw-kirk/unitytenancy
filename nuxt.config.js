export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Unity',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
      ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {rel : 'stylesheet', href : 'https://dev.iconly.io/public/K7jo28xgA5LZ/iconly.css'}
      ]
  },

  publicRuntimeConfig : {
    WS : process.env.WS,
    API : process.env.API
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    {src: "@/assets/app", lang : "scss"},
    ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/persist', mode : 'client' },
    {src:"@/plugins/filters", mode:'client'},
    {src : '@/plugins/ui', mode:'client'},
    {src : '@/plugins/validation'},
    {src : '@/plugins/helpers'},
    {src : '@/plugins/maps'},
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API,
  },

  auth: {
    strategies: {
      local:{
        token: {
          property: 'token',
          required: true,
          type: 'Token',
          maxAge: 60 * 60 * 24 * 30,
          prefix : 'unity_______________()_______________()________________'
        },
        user: {
          property: false,
          autoFetch : true
        },
        endpoints: {
          login:  { url: '/auth/', method: 'post' },
          logout: { url: '/logout/', method: 'post' },
          user:   { url: '/profile/', method: 'get' }
        }
      } 
    },
    redirect: {
      login: "/login",
      logout: '/login',
      home : '/'
    },
    localStorage: false,

    plugins: ['./plugins/auth'],
  },

  router: {
    middleware: ["clearErrors"]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   transpile: [/^vue2-google-maps($|\/)/]
 }
}
