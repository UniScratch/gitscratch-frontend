<template>
  <div id="comments">
    <div class="d-flex">
      <p class="text-h5" style="margin: 0">
        留言
      </p>
      <v-spacer />
      <v-btn text rounded :disabled="dataIsLoading" @click="reload()">
        <v-icon> mdi-cached </v-icon>
        重新加载
      </v-btn>
    </div>
    <v-card>
      <MarkdownEditor
        content=""
        :reply="commentReply"
        :is-reply="isReply"
        textarea-label="留言"
        textarea-placeholder="Leave a comment"
        action-icon="mdi-send"
        action-text="发送"
        :disabled="!$auth.loggedIn"
        disable-text="请先登录后再留言"
        @clearReply="clearReply"
        @submit="commentSubmit"
      />
    </v-card>
    <div style="margin-top: 24px">
      <div v-if="!dataIsLoading">
        <template v-if="totalComments !== 0">
          <v-list>
            <!-- <template v-for="currentPageId in [...Object.keys(comments)].reverse()"> -->
            <template v-for="currentPageId in totalPages">
              <template v-for="comment in comments[totalPages-currentPageId+1]">
                <CommentSingle
                  :id="replyJumpTargetId === comment.id ? 'replyJumpTarget' : null"
                  :key="'commentid'+comment.id"
                  :style="replyJumpTargetId === comment.id ? 'background: #eee' : null"
                  :comment-data="comment"
                  @reply="reply"
                  @replyJump="replyJump"
                />
              </template>
              <div v-if="comments[totalPages-currentPageId+1] === undefined " :key="'commentpage'+currentPageId" class="d-flex justify-center">
                <v-btn text @click="loadPage(totalPages-currentPageId+1)">
                  加载第 {{ totalPages-currentPageId+1 }} 页
                </v-btn>
              </div>
            </template>
          </v-list>
          <!-- <div class="d-flex justify-center">
            <v-btn text :disabled="pageId === 1 " @click="nextPage()">
              {{ pageId !== 1 ? "加载更多" : "没有更多了" }}
            </v-btn>
          </div> -->
        </template>
        <template v-else>
          <p class="text-center">
            暂时没有留言
          </p>
        </template>
      </div>
      <div v-else class="text-center">
        <v-progress-circular indeterminate color="primary" />
        <br>
        <p>正在加载留言。坐和放宽</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    dataIsLoading: true,
    isReply: false,
    replyJumpTargetId: null,
    commentReply: {},
    comments: {},
    pageId: null,
    totalPages: null,
    totalComments: null
  }),
  async fetch () {
    await this.$axios
      .$get(
        this.$route.path +
          '/comments' +
          (this.pageId !== null ? '?pageId=' + this.pageId : '')
      )
      .then((res) => {
        this.totalPages = res.data.totalPages
        this.pageId = res.data.pageId
        this.$set(this.comments, this.pageId, res.data.comments.reverse())
        this.dataIsLoading = false
      })
  },
  methods: {
    reload () {
      this.dataIsLoading = true
      this.comments = {}
      this.pageId = null
      this.totalPages = null
      this.totalComments = null
      this.$fetch()
    },
    async loadPage (id) {
      // console.log(id)
      this.pageId = id
      await this.$fetch()
    },
    async commentSubmit (n) {
      // console.log(n)
      const res = await this.$axios.$post(this.$route.path + '/comments/new', {
        comment: n,
        reply: this.isReply ? this.commentReply.id : null
      })
      if (res !== false) {
        this.$dialog.message.info('发送成功', {
          position: 'bottom'
        })
        this.reload()
      }
    },
    reply (n) {
      this.$vuetify.goTo('#comments')
      this.commentReply = n
      this.isReply = true
    },
    clearReply () {
      this.commentReply = {}
      this.isReply = false
    },
    async replyJump (n) {
      await this.loadPage(n.reply.page_id)
      this.replyJumpTargetId = n.reply.id
      // nextTick
      console.log('ok')
      this.$nextTick(() => {
        this.$vuetify.goTo('#replyJumpTarget')
      })
    }
  }
}
</script>
