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
# 关于 GitScratch  
GitScratch（极社）是一个 Git 风格的 Scratch 社区，正在开发中。  
项目提出：[@HydroGest](https://github.com/HydroGest) [@Dispure](https://github.com/Dispure)  
金主：  
贡献者：[@Tim-Fang](https://github.com/Tim-Fang) [@wrj2009](https://github.com/wrj2009) [@HydroGest](https://github.com/HydroGest)  
其他贡献者：[@frank-782](https://github.com/frank-782)  
还有，你。  
~~一个都跑不了~~
            `
            return marked.parse(md);
        }
    },
};
</script>
