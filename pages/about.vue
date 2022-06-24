<template>
  <div>
    <div v-html="renderMd()" />
  </div>
</template>

<script>
const meta = require('static/meta.json')
const { marked } = require('marked')
export default {
  data: () => ({
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

版本：${meta.appVersionFull}  
构建时间：${meta.compileTime}  

[GitHub 仓库](https://github.com/UniScratch/GitScratchFrontend) |
[反馈](https://github.com/UniScratch/GitScratchFrontend/issues) |
[讨论](https://github.com/UniScratch/GitScratchFrontend/discussions) |
[群聊](https://jq.qq.com/?_wv=1027&k=YZzXfixv)

## 贡献者
项目提出：[@HydroGest](https://github.com/HydroGest) [@Dispure](https://github.com/Dispure)  
金主：  
主要贡献者：[@Tim-Fang](https://github.com/Tim-Fang) [@wrj2009](https://github.com/wrj2009) [@HydroGest](https://github.com/HydroGest) [@Dispure](https://github.com/Dispure)  
云服务支持：[@Someone-Yang](https://github.com/Someone-Yang)  
其他贡献者：[@frank-782](https://github.com/frank-782)  
还有，你。  
~~一个都跑不了~~  
      `
      // console.log(marked.parse(md))
      return marked.parse(md)
    }
  }
}
</script>
