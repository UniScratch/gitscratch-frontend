import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#F3F1F8",
                secondary: colors.blue.darken4,
                accent: colors.blue.base,
            },
            dark: {
                primary: "#2B2734",
                secondary: colors.blue.darken4,
                accent: colors.blue.base,
            },
        },
    },
})