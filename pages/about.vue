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
        <a v-for="(childItem, childKey) in item" :key="childKey" target="_blank" :href="'https://github.com/' + childItem">
          @{{ childItem }}
        </a>
        <br :key="key">
      </template>
    </p>
    <p>
      还有，你。<br><del class="hide-del">一个都跑不了</del>
    </p>
    <v-overlay :value="overlay">
      <v-card class="cardblur">
        <v-card-title class="text-h5">
          输入密码以<router-link to="/help?faq=0">
            访问 GitScratch
          </router-link>。
        </v-card-title>

        <v-card-text style="max-width: 800px">
          <v-otp-input
            v-model="code"
            length="12"
            :readonly="true"
          />
          <div v-show="error" style="font-size: 10px;">
            错误
          </div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text
            rounded
            @click="close()"
          >
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
    <v-snackbar
      v-model="snackbar"
    >
      这是一个彩蛋 :D
      <template #action="{ attrs }">
        <v-btn
          text
          rounded
          v-bind="attrs"
          @click="snackbar = false"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    贡献者: {
      项目提出: ['HydroGest', 'Dispure'],
      金主: [],
      主要贡献者: ['HydroGest', 'TimFang4162', 'wrj2009'],
      云服务支持: ['Someone-Yang'],
      其他贡献者: ['frank-782']
    },
    meta: require('static/meta.json'),
    overlay: false,
    error: false,
    code: '',
    snackbar: false
  }),
  head () {
    return {
      title: '关于'
    }
  },
  mounted () {
    document.addEventListener('keydown', keydown)
    const _this = this
    // ↑↑↓↓←→←→ABAB
    const keys = {
      65: 'A',
      66: 'B',
      37: '←',
      38: '↑',
      39: '→',
      40: '↓'
    }
    function keydown (event) {
      _this.error = false
      if (event.keyCode in keys) {
        console.log(keys[event.keyCode])
        if (_this.code.length < 12) {
          _this.overlay = true
          _this.code += keys[event.keyCode]
          if (_this.code.length === 12) {
            if (_this.code === '↑↑↓↓←→←→ABAB') {
              _this.overlay = false
              _this.code = ''
              _this.snackbar = true
            } else {
              _this.error = true
            }
          }
        } else {
          _this.error = true
        }
      } else if (event.keyCode === 8) {
        _this.code = _this.code.slice(0, -1)
      }
    }
  },
  methods: {
    close () {
      this.overlay = false
      this.code = ''
    }
  }
  // unmounted () {
  //   document.removeEventListener('keydown', keydown)
  // }
}
</script>
