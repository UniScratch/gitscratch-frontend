<template>
  <div>
    <h1>关于 GitScratch</h1>
    <p>GitScratch 是一个 Git 风格的 Scratch 社区，正在开发中。</p>
    <v-btn target="_blank" href="https://github.com/UniScratch/gitscratch-frontend" text rounded>
      <v-icon>
        mdi-github
      </v-icon>
      GitHub
    </v-btn>
    <!-- <v-btn target="_blank" href="https://github.com/UniScratch/gitscratch-frontend/issues" text>
      <v-icon>
        mdi-record-circle-outline
      </v-icon>
      问题
    </v-btn>
    <v-btn target="_blank" href="https://github.com/UniScratch/gitscratch-frontend/discussions" text>
      <v-icon>
        mdi-forum-outline
      </v-icon>
      讨论
    </v-btn>
    <v-btn target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=YZzXfixv" text>
      <v-icon>
        mdi-pound-box
      </v-icon>
      QQ频道
    </v-btn> -->
    <v-btn target="_blank" href="https://jq.qq.com/?_wv=1027&amp;k=YZzXfixv" text rounded>
      <v-icon>mdi-qqchat</v-icon>
      QQ 群聊
    </v-btn>
    <h2>版本信息</h2>
    <p>
      <a target="_blank" :href="'https://github.com/UniScratch/gitscratch-frontend/commit/'+meta.commitHash">在 GitHub 上查看</a>
      <br>
      版本：{{ meta.appVersion }}
      <br>
      提交：{{ meta.commitHash }}
      <br>
      构建时间：{{ meta.compileTime }}
    </p>
    <h2>贡献者</h2>
    <p>
      <template v-for="(item, key) in 贡献者">
        {{ key }}：
        <a v-for="(childItem, childKey) in item" :key="childKey" target="_blank" :href="'https://github.com/'+childItem">
          @{{ childItem }}
        </a>
        <br :key="key">
      </template>
    </p>
    <p>
      还有，你。<br><del class="hide-del">一个都跑不了</del>
    </p>
  </div>
</template>

<script>
export default {
  data: () => ({
    贡献者: {
      项目提出: ['Dispure', 'HydroGest'],
      金主: [],
      主要贡献者: ['Dispure', 'HydroGest', 'TimFang4162', 'wrj2009'],
      云服务支持: ['Someone-Yang'],
      其他贡献者: ['frank-782']
    },
    meta: require('static/meta.json')
  }),
  head () {
    return {
      title: '关于'
    }
  }
}
</script>
