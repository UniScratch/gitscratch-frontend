<template>
    <v-app>
        <v-main>
            <Appbar />
            <v-container v-html="renderMd()">
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import Appbar from '/src/components/Appbar.vue'
const { marked } = require('marked');

export default {
    name: 'App',

    components: {
        Appbar
    },

    data: () => ({
        //
    }),
    methods: {
        renderMd: function () {
            var md = "# About GitScratch"
            return marked.parse(md);
        }
    },
};
</script>
