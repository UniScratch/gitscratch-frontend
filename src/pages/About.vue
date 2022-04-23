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
            var md = `
# About GitScratch  
GitScratch（极社）是一个 Git 风格的 Scratch 社区，正在开发中。  
# Contributor list  
项目提出: markchai, dispure  
主要开发者: wrj2009, TimFang4162  
金主:  
其他贡献者: frank-782  
还有，你。  
  
~~一个都跑不了~~


            `
            return marked.parse(md);
        }
    },
};
</script>
