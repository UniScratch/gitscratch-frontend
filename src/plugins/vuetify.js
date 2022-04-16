import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.blue.base,
                secondary: colors.blue.darken4,
                accent: colors.blue.base,
            },
            dark: {
                primary: colors.grey.darken4,
                secondary: colors.blue.darken4,
                accent: colors.blue.base,
            },
        },
    },
})