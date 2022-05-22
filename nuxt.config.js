// import goTo from 'vuetify/lib/services/goto'
import colors from 'vuetify/lib/util/colors'
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
    },
    theme: {
      themes: {
        light: {
          primary: colors.blue.base,
          secondary: colors.blue.darken4,
          accent: colors.blue.accent2,
          grey_background: colors.grey.lighten2
        },
        dark: {
          primary: colors.blue.lighten1,
          secondary: colors.blue.darken4,
          accent: colors.blue.accent3,
          grey_background: colors.grey.darken3
        }
      }
    }
  },

  // https://github.com/nuxt-community/eslint-module
  eslint: {},

  // https://nuxtjs.org/api/configuration-plugins
  plugins: [],

  // https://nuxtjs.org/api/configuration-css
  css: ['./assets/styles/global.css'],

  // https://nuxtjs.org/api/configuration-build
  build: {
    extractCSS: !isDev
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  loading: {
    color: '#1E88E5'
  }
}
