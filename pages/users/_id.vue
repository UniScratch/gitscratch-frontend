<template>
  <v-row>
    <v-col
      cols="12"
      xl="2"
      md="3"
      sm="4"
      style="padding-right: 20px;"
    >
      <div style="text-align: center;">
        <v-avatar style="width: 100%; height: auto; max-width: 200px; margin-bottom: 20px;">
          <v-img :src="data.avatar" />
        </v-avatar>
        <div style="display: flex;">
          <span style="display: block; min-width: 20px; height: 20px; background-color: rgb(34, 149, 242); color: white; border-radius: 50%; font-size: 12px;">{{ data.level }}</span>&nbsp;
          <v-progress-linear :value="data.exp" class="rounded-pill" height="20" />
        </div>
      </div><br>
      <span class="text-h4" style="margin-right: 8px;overflow-wrap: break-word;">
        {{ data.name }}
      </span>
      <v-tooltip v-if="data.verified !== 0" bottom>
        <template #activator="{ on, attrs }">
          <v-icon color="rgba(33,150,243)" v-bind="attrs" v-on="on">
            mdi-check-decagram-outline
          </v-icon>
        </template>
        <span>社区官方认证</span>
      </v-tooltip>
      <v-tooltip v-if="data.muted !== 0" bottom>
        <template #activator="{ on, attrs }">
          <v-icon color="rgb(255, 87, 34)" v-bind="attrs" v-on="on">
            mdi-comment-remove-outline
          </v-icon>
        </template>
        <span>账户被禁言，{{ data.muted }} 天后解禁</span>
      </v-tooltip>
      <v-tooltip v-if="data.banned !== 0" bottom>
        <template #activator="{ on, attrs }">
          <v-icon color="rgb(238, 54, 37)" v-bind="attrs" v-on="on">
            mdi-gavel
          </v-icon>
        </template>
        <span>帐户被封禁，{{ data.banned }} 天后解禁</span>
      </v-tooltip>
      <template v-if="data.bio">
        <p class="text-body">
          {{ data.bio }}
        </p>
      </template>
      <v-btn v-if="$auth.loggedIn && data.id === $auth.user.id" to="/settings#profile" block depressed rounded>
        编辑个人资料
      </v-btn>
      <v-btn v-else block color="primary" depressed rounded>
        <v-icon>mdi-plus</v-icon>
        关注
      </v-btn><br>
      <v-icon>mdi-account-multiple-outline</v-icon>
      <router-link :to="'/users/' + $route.params.id + '/followers'">
        {{ data.follower }} 粉丝
      </router-link>
      <span> · </span>
      <router-link :to="'/users/' + $route.params.id + '/following'">
        {{ data.following }} 正在关注
      </router-link>
      <br>
      <template v-if="data.website">
        <v-icon>mdi-web</v-icon>
        <a :href="data.website" target="_blank">{{ data.website }}</a>

        <br>
      </template>
      <v-divider />
      <v-dialog v-model="reportDialog" overlay-opacity="0.3" max-width="500">
        <template #activator="{ on, attrs }">
          <p
            v-if="isLogin"
            class="text-body"
            style="color: grey;"
            size="18"
            v-bind="attrs"
            v-on="on"
          >
            Block or Report
          </p>
        </template>
        <v-card class="cardblur">
          <v-card-title class="text-h5">
            举报
          </v-card-title>

          <v-card-text>
            <v-form ref="reportForm" v-model="reportValid" lazy-validation>
              <v-textarea
                v-model="reportReason"
                label="举报原因"
                counter="1024"
                :rules="reportReasonRules"
                outlined
                style="border-radius: 4px;"
                auto-grow
                rows="2"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              text
              rounded
              @click="reportDialog = false"
            >
              取消
            </v-btn>
            <v-btn
              color="red"
              text
              rounded
              :disabled="!reportValid"
              :loading="reportLoading"
              @click="report"
            >
              举报
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
    <v-divider vertical class="hidden-xs-only" />
    <v-col cols="12" xl="10" md="9" sm="8" style="padding: 12px 0;">
      <v-tabs
        v-model="toggleTab"
        group
        mandatory
        color="primary"
        style="padding: 0 12px;"
      >
        <v-tab>
          <v-icon>mdi-book-open-outline</v-icon><span>概览</span>
        </v-tab>
        <v-tab>
          <v-icon>mdi-book-outline</v-icon><span>作品</span>
        </v-tab>
        <v-tab>
          <v-icon>mdi-account-group-outline</v-icon><span>组织</span>
        </v-tab>
        <v-tab>
          <v-icon>mdi-comment-text-multiple-outline</v-icon><span>留言</span>
        </v-tab>
      </v-tabs>
      <v-window
        v-model="toggleTab"
        style="display: block; padding: 16px;"
      >
        <!-- 概览 -->
        <v-window-item>
          <v-card>
            <v-card-title class="text-h5">
              <span>README</span><span class="grey-text">.md</span>
              <v-spacer />
              <v-btn v-if="$auth.loggedIn && data.id === $auth.user.id" icon @click="readmeOpenEdit">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider />
            <MarkdownRender
              v-if="!readmeIsEditing"
              :content="data.readme"
              style="padding: 0 16px 8px 16px;"
            />
            <MarkdownEditor
              v-else
              :content="data.readme"
              textarea-label="README"
              textarea-placeholder="介绍你自己"
              action-icon=""
              action-text="保存"
              @submit="readmeSubmit"
              @change="readmeChange"
            />
          </v-card>
          <ProjectGroupSmall title="置顶作品" style="margin-top: 8px;" />
        </v-window-item>
        <!-- 作品 -->
        <v-window-item>
          <div class="d-flex">
            <p class="text-h5" style="margin: 0;">
              最近收藏的作品
            </p>
            <v-spacer />
            <v-btn :to="'/users/' + $route.params.id + '/stars'" text rounded>
              更多
              <v-icon right>
                mdi-chevron-right
              </v-icon>
            </v-btn>
          </div>
          <ProjectGroupSmall />
        </v-window-item>
        <!-- 组织 -->
        <v-window-item>
          <p>？？？？？</p>
        </v-window-item>
        <!-- 留言 -->
        <v-window-item>
          <CommentGroup />
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>
<script>
export default {
  async asyncData ({ params, $axios }) {
    const data = await $axios.$get(`/users/${params.id}/info`)
    return { data: data.data }
  },
  data: () => ({
    readmeIsEditing: false,
    readmeEdit: '',
    toggleTab: 0,
    userNameIsHover: false,
    isLogin: true,
    reportDialog: false,
    reportValid: false,
    reportLoading: false,
    reportReason: '',
    reportReasonRules: [
      v => !!v || '请选择举报原因',
      v => v.length <= 1024 || '举报原因不能超过 1024 个字符'
    ]
  }),
  head () {
    return {
      title: this.data.name
    }
  },
  mounted () {
    if (this.$route.query.comment !== undefined && this.$route.query.page !== undefined) {
      this.toggleTab = 3
    }
  },
  methods: {
    validateReport () {
      this.$refs.reportForm.validate()
    },
    report () {
      this.validateReport()
      if (this.reportValid) {
        this.reportLoading = true
        setTimeout(() => {
          this.reportLoading = false
          this.reportDialog = false
          this.reportReason = ''
        }, 1000)
      }
    },
    async readmeOpenEdit () {
      if (this.readmeIsEditing) {
        if (this.readmeEdit === this.data.readme) {
          this.readmeIsEditing = false
        } else {
          const confirm = await this.$dialog.confirm({
            text: '编辑内容已更改，是否保存？',
            title: '提示',
            actions: [{
              text: '返回编辑', key: 3
            }, {
              text: '不保存', key: 2
            }, {
              text: '保存', color: 'blue', key: 1
            }]
          })
          if (confirm === 1) {
            this.readmeSubmit(this.readmeEdit)
          } else if (confirm === 2) {
            this.readmeIsEditing = false
          } else {
            this.readmeIsEditing = true
          }
        }
      } else {
        this.readmeEdit = this.data.readme
        this.readmeIsEditing = true
      }
    },
    async readmeSubmit (n) {
      // console.log(n)
      const userInfo = await this.$axios.$post('users/' + this.$auth.user.id + '/info', {
        readme: n
      })
      if (userInfo !== false) {
        this.$dialog.message.info('保存成功', {
          position: 'bottom'
        })
        this.data.readme = n
        this.readmeIsEditing = false
      }
    },
    readmeChange (n) {
      this.readmeEdit = n
    }
  }
}
</script>
<style>
/* .v-icon {
  bottom: 6px;
} */
</style>
