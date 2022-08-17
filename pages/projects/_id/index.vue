<template>
  <v-row>
    <v-col cols="12" xl="7" md="8">
      <v-card>
        <v-card-title class="text-h5">
          {{ data.title }}
          <v-spacer />
          <v-btn text>
            <v-icon>mdi-pencil-outline</v-icon>
            作品设置
          </v-btn>
        </v-card-title>
        <v-card-text>
          <div style="display:flex;margin-bottom:10px;">
            <v-icon>mdi-eye-outline</v-icon>
            &nbsp;{{ data.view }}&nbsp;&nbsp;
            <v-icon>mdi-calendar-outline</v-icon>
            &nbsp;{{ new Date(data.updated_at * 1000).format("yyyy-MM-dd hh:mm:ss") }}&nbsp;&nbsp;
            <v-icon>mdi-update</v-icon>&nbsp;
            <nuxt-link to="/projects/1/commit/170ed1c/" class="text-color">
              {{ projectCommit }}
            </nuxt-link>&nbsp;&nbsp;
          </div>

          <v-responsive v-if="!loadPlayer" :aspect-ratio="4/3" content-class="rounded">
            <v-img
              lazy-src="/GitScratch-project-thumbnail-grey.svg"
              src="/project/64025bdca5db4938f65597e3682fddcf.svg"
              style="width: 100%; height: 100%; border-radius: 15px;"
            >
              <template #placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  />
                </v-row>
              </template>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-btn v-if="!loadPlayer" class="rounded-pill" x-large @click="loadPlayer = true">
                  <v-icon>
                    mdi-reload
                  </v-icon>
                  &nbsp;加载播放器
                </v-btn>
              </v-row>
            </v-img>
          </v-responsive>
          <LazyProjectPlayer v-if="loadPlayer" />
          <br>
          <v-row>
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn text v-bind="attrs" rounded v-on="on" @click="star()">
                  <v-icon>
                    mdi-star-outline
                  </v-icon>
                  {{ data.star }}
                </v-btn>
              </template>
              <span>星标</span>
            </v-tooltip>
            <v-tooltip v-if="data.source" bottom>
              <template #activator="{ on, attrs }">
                <v-btn text v-bind="attrs" rounded v-on="on" @click="fork()">
                  <v-icon>
                    mdi-source-branch
                  </v-icon>
                  234
                </v-btn>
              </template>
              <span>改编</span>
            </v-tooltip>
            <v-tooltip bottom>
              <template #activator="{ on, attrs }">
                <v-btn text v-bind="attrs" rounded v-on="on" @click="like()">
                  <v-icon :color="data.is_liked ? 'red' : null">
                    {{ data.is_liked ? 'mdi-heart' : 'mdi-heart-outline' }}
                  </v-icon>
                  {{ data.like }}
                </v-btn>
              </template>
              <span>喜欢</span>
            </v-tooltip>
            <v-tooltip v-if="data.source" bottom>
              <template #activator="{ on, attrs }">
                <v-btn
                  icon
                  v-bind="attrs"
                  rounded
                  style="margin-left: 10px;"
                  :to="'/projects/' + projectId + '/editor'"
                  v-on="on"
                >
                  <v-icon>
                    mdi-file-code-outline
                  </v-icon>
                </v-btn>
              </template>
              <span>源码</span>
            </v-tooltip>
            <v-spacer />
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>
                    mdi-dots-horizontal
                  </v-icon>
                </v-btn>
              </template>
              <v-card class="cardblur">
                <v-list dense min-width="150">
                  <v-list-item link>
                    <v-list-item-icon style="margin-right: 16px;">
                      <v-icon>mdi-share-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>分享</v-list-item-title>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-icon style="margin-right: 16px;">
                      <v-icon>mdi-alert-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>举报</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-menu>
          </v-row>
        </v-card-text>
      </v-card>
      <br>
      <v-card>
        <v-card-title class="text-h5">
          <span>介绍</span>
          <v-spacer />
          <v-btn v-if="$auth.loggedIn && data.id === $auth.user.id" icon @click="readmeOpenEdit">
            <v-icon>mdi-pencil-outline</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider />
        <MarkdownRender
          v-if="!readmeIsEditing && data.readme"
          :content="data.readme"
          style="padding: 0 16px 8px 16px;"
        />
        <v-empty v-if="!readmeIsEditing && !data.readme" />
        <MarkdownEditor
          v-if="readmeIsEditing"
          :content="data.readme"
          textarea-label="README"
          textarea-placeholder="介绍此作品"
          action-icon=""
          action-text="保存"
          @submit="readmeSubmit"
          @change="readmeChange"
        />
      </v-card>
      <div>
        <v-divider style="margin: 16px 0;" />

        <CommentGroup />
      </div>
    </v-col>
    <v-col cols="12" xl="5" md="4">
      <ProjectUserInfo :user-data="data.author" />
      <br>
      //推荐作品流
    </v-col>
  </v-row>
</template>
<script>
export default {
  props: {
  },
  data: () => ({
    data: {},
    loadPlayer: false,
    readmeIsEditing: false,
    readmeEdit: '',
    bio: '啊，好舒服',
    avatar: '/GitScratch-icon-background-blue.svg',
    projectTitle: 'Default Project',
    projectViews: 114514,
    projectCommit: '170ed1c',
    projectUpdate: '2022/5/28 14:39:58',
    isLogin: true,
    isMuted: true
  }),
  async fetch () {
    const data = await this.$axios.$get(`/projects/${this.$route.params.id}/info`)
    this.data = data.data
  },
  head () {
    return {
      title: this.projectTitle
    }
  },
  methods: {
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
      const projectInfo = await this.$axios.$post('projects/' + this.$route.params.id + '/info', {
        readme: n
      })
      if (projectInfo !== false) {
        this.$dialog.message.info('保存成功', {
          position: 'bottom'
        })
        this.data.readme = n
        this.readmeIsEditing = false
      }
    },
    readmeChange (n) {
      this.readmeEdit = n
    },
    async operation (type) {
      const res = await this.$axios.$post('projects/' + this.$route.params.id + '/operation', {
        type
      })
      this.$fetch()
      console.log(res)
    },
    async like () {
      await this.operation('project.like')
      this.$dialog.message.info('点赞成功', {
        position: 'bottom'
      })
    },
    star () {
      this.$dialog.message.info('收藏成功', {
        position: 'bottom'
      })
    },
    fork () {
      this.$dialog.message.info('分享成功', {
        position: 'bottom'
      })
    },
    view () {
      this.$dialog.message.info('查看成功', {
        position: 'bottom'
      })
    }
  }
}
</script>
