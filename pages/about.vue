<template>
  <div v-html="renderMd()" />
</template>

<script>
const { marked } = require('marked')
export default {
  name: 'About',
  data: () => ({
    //
  }),
  head () {
    return {
      title: '关于'
    }
  },
  methods: {
    renderMd () {
      const md = `
# 关于 GitScratch  
GitScratch（极社）是一个 Git 风格的 Scratch 社区，正在开发中。  
[GitHub 仓库](https://github.com/UniScratch/GitScratchFrontend)  
[GitScratch 预览站](https://git.sc.cn/)
## 贡献者
项目提出：[@HydroGest](https://github.com/HydroGest) [@Dispure](https://github.com/Dispure)  
金主：  
主要贡献者：[@Tim-Fang](https://github.com/Tim-Fang) [@wrj2009](https://github.com/wrj2009) [@HydroGest](https://github.com/HydroGest) [@Dispure](https://github.com/Dispure)  
云服务支持：[@Someone-Yang](https://github.com/Someone-Yang)  
其他贡献者：[@frank-782](https://github.com/frank-782)  
还有，你。  
~~一个都跑不了~~  
      `
      return marked.parse(md)
    }
  }
}
</script>
