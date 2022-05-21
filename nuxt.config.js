// import goTo from 'vuetify/lib/services/goto'
const isDev = process.env.NODE_ENV !== 'production'

export default {
  // https://nuxtjs.org/api/configuration-modern
  modern: !isDev,
  // https://nuxtjs.org/api/configuration-head
  head: {
    titleTemplate (title) {
      if (title) {
        return `${title} - GitScratch`
      }
      return 'GitScratch'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/GitScratch-icon-background-blue.svg'
    }]
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://http.nuxtjs.org/
    '@nuxt/http',

    // https://pwa.nuxtjs.org/
    '@nuxtjs/pwa'
  ],

  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: null // 'PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important'
      },
      icons: 'mdi'
    }

  },

  // https://github.com/nuxt-community/eslint-module
  eslint: {},

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [
    { src: '~/plugins/vuetify.js' }
  ],

  // https://nuxtjs.org/api/configuration-css
  css: [],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  loading: {
    color: 'blue',
    height: '3px'
  }
}
