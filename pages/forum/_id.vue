<template>
  <div>
    <v-card>
      <v-card-title class="text-h5">
        {{ !contentIsEditing ? data.title : '' }}
        <v-text-field
          v-if="contentIsEditing"
          v-model="titleEdit"
          label="标题"
          outlined
          hide-details="auto"
        />
        &nbsp;
        <v-chip
          v-if="data.status === 0"
          color="primary"
          outlined
          ripple
        >
          未发布
        </v-chip>
        <v-spacer />
        <v-btn text @click="contentSubmit({status:1-data.status})">
          <v-icon>{{ data.status === 0 ? 'mdi-upload-outline':'mdi-download-outline' }}</v-icon>
          {{ data.status === 0 ? '' : "取消" }}发布
        </v-btn>
        <v-btn text @click="contentOpenEdit()">
          <v-icon>mdi-pencil-outline</v-icon>
          编辑
        </v-btn>
      </v-card-title>
      <v-card-text>
        发布于 {{ $utils.getTimeString(data.created_at) }}，最后更新 {{ $utils.getTimeString(data.updated_at) }}
      </v-card-text>
      <UserInfoPost :user-data="data.user" />
      <v-divider />
      <MarkdownRender
        v-if="!contentIsEditing && data.content"
        :content="data.content"
        style="padding: 0 16px 8px 16px;"
      />
      <v-empty v-if="!contentIsEditing && !data.content" />
      <MarkdownEditor
        v-if="contentIsEditing"
        :content="data.content"
        textarea-label="正文"
        textarea-placeholder="畅所欲言"
        action-icon=""
        action-text="保存"
        @submit="(n) => contentSubmit({content:n})"
        @change="contentChange"
      />
    </v-card>
    <br>
    <CommentGroup />
  </div>
</template>
<script>
export default {
  data: () => ({
    data: { },
    contentIsEditing: false,
    contentEdit: '',
    titleEdit: ''
  }),
  async fetch () {
    const data = await this.$axios.$get(`/posts/${this.$route.params.id}/info`)
    this.data = data.data
  },
  head () {
    return {
      title: this.data.title
    }
  },
  methods: {
    async contentOpenEdit () {
      if (this.contentIsEditing) {
        if (this.contentEdit === this.data.content && this.titleEdit === this.data.title) {
          this.contentIsEditing = false
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
            this.contentSubmit({ content: this.contentEdit })
          } else if (confirm === 2) {
            this.contentIsEditing = false
          } else {
            this.contentIsEditing = true
          }
        }
      } else {
        this.contentEdit = this.data.content
        this.titleEdit = this.data.title
        this.contentIsEditing = true
      }
    },
    async contentSubmit (n) {
    //   console.log(n)
      const projectInfo = await this.$axios.$post('posts/' + this.$route.params.id + '/info', {
        content: Object.prototype.hasOwnProperty.call(n, 'content') ? n.content : undefined,
        title: this.titleEdit,
        status: Object.prototype.hasOwnProperty.call(n, 'status') ? n.status : undefined
      })
      if (projectInfo !== false) {
        this.$dialog.message.info('保存成功', {
          position: 'bottom'
        })
        await this.$fetch()
        this.contentIsEditing = false
      }
    },
    contentChange (n) {
      this.contentEdit = n
    },
    async operation (type) {
      await this.$axios.$post('posts/' + this.$route.params.id + '/operation', {
        type
      })
      this.$fetch()
      // console.log(res)
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
