import colors from 'vuetify/lib/util/colors'
const isDev = process.env.NODE_ENV !== 'production'
const apiUrl = process.env.API_URL ? process.env.API_URL : 'http://127.0.0.1:3000'
console.log(apiUrl)
module.exports = {
  components: true,
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
    htmlAttrs: {
      lang: 'zh-CN'
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
      content: 'Endless Possiblities with GitScratch. 与 GitScratch 共赴诗和远方。'
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
    },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: '/highlight.js/styles/github-dark.css'
    }
    ]
  },

  // https://nuxtjs.org/api/configuration-modules
  modules: [
    // https://github.com/frenchrabbit/nuxt-precompress
    'nuxt-precompress',
    'vuetify-dialog/nuxt',
    '@nuxtjs/axios',
    // https://dev.auth.nuxtjs.org
    '@nuxtjs/auth-next'

  ],

  plugins: [
    '~/plugins/dateFormatter',
    '~/plugins/http'

  ],
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',

    // https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'

  ],
  axios: {
    baseURL: apiUrl
  },
  auth: {
    rewriteRedirects: false,
    redirect: {
      login: '/auth/login',
      logout: '/',
      home: '/'

    },
    strategies: {
      local: {
        token: {
          property: 'data.session',
          name: 'X-GitScratch-Session',
          type: ''
        },
        user: {
          property: 'data.data',
          autoFetch: true
        },
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/session',
            method: 'get'
          }
        }
      }
    }
    // Options
  },

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: false
      },
      icons: false
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
          primary: colors.blue.base,
          secondary: colors.blue.darken4,
          accent: colors.blue.accent3,
          grey_background: colors.grey.darken3
        }
      }
    }
  },
  vuetifyDialog: {
    property: '$dialog',
    confirm: {
      icon: false
    },
    warning: {
      icon: false
    },
    error: {
      icon: false
    },
    prompt: {
      icon: false
    }
  },
  // https://github.com/nuxt-community/eslint-module
  eslint: {
    fix: true,
    threads: true
  },

  // https://nuxtjs.org/api/configuration-css
  css: ['./assets/styles/global.css'],

  // https://nuxtjs.org/api/configuration-build
  build: {
    // ssr: !isElectron,
    ssr: true,
    parallel: isDev,
    // terser: {
    //   parallel: true,
    //   terserOptions: { // https://github.com/terser/terser
    //     compress: {
    //       drop_console: true,
    //       arguments: true,
    //       passes: 1
    //     },
    //     format: {
    //       comments: false,
    //       max_line_len: 1024
    //     }
    //   }
    // },
    extractCSS: !isDev,
    extend (config, {
      isDev,
      isClient
    }) {
      config.output.globalObject = 'this'
    }
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  loading: {
    color: '#2196F3'
  },
  pageTransition: {
    name: 'slide-top',
    mode: 'out-in'
  },
  router: {
    prefetchLinks: false
  }

}
