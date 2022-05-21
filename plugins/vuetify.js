import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import colors from 'vuetify/lib/util/colors'
import minifyTheme from 'minify-css-string'
const LRU = require('lru-cache')

Vue.use(Vuetify)

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.base,
        secondary: colors.blue.darken4,
        accent: colors.blue.accent2,
        grey_background: colors.grey.lighten2,
      },
      dark: {
        primary: colors.blue.lighten1,
        secondary: colors.blue.darken4,
        accent: colors.blue.accent3,
        grey_background: colors.grey.darken3,
      },
    },
    options: {
      minifyTheme,
      themeCache
    }
  }
})
