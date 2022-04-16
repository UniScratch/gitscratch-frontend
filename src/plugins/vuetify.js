import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.lighten5,
                secondary: colors.blue.darken4,
                accent: colors.blue.base,
                grey_background: colors.grey.lighten2,
            },
            dark: {
                primary: colors.grey.darken4,
                secondary: colors.blue.darken4,
                accent: colors.blue.base,
                grey_background: colors.grey.darken3,
            },
        },
    },
})