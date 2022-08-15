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
                  :comment-data="comment"
                  :is-reply-jump-target="replyJumpTargetId === comment.id"
                  @reply="reply"
                  @changeState="changeState"
                  @replyJump="replyJump"
                  @clearReplyJumpTargetHighlight="clearReplyJumpTargetHighlight"
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
    totalPages: null,
    totalComments: null
  }),
  async fetch () {
    await this.fetch()
  },
  mounted () {
  },
  methods: {
    async fetch (pageId = undefined) {
      await this.$axios
        .$get(
          this.$route.path +
          '/comments' +
          (pageId !== undefined ? ('?pageId=' + pageId) : '')
        )
        .then((res) => {
          this.totalPages = res.data.totalPages
          this.$set(this.comments, res.data.pageId, res.data.comments.reverse())
          this.dataIsLoading = false
        })
      if (this.$route.query.comment !== undefined && this.$route.query.page !== undefined) {
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.replyJump(
              {
                reply: {
                  page_id: Number(this.$route.query.page),
                  id: Number(this.$route.query.comment)
                }
              })
            this.$route.query.comment = undefined
            this.$route.query.page = undefined
            window.history.replaceState(null, null, this.$route.path) // remove search params. fetch is client-side only so this is fine
          })
        })
      }
    },
    reload () {
      this.dataIsLoading = true
      this.comments = {}
      this.totalPages = null
      this.totalComments = null
      this.fetch()
    },
    async loadPage (id, force = false) {
      console.log(id)
      if (!(id in this.comments) || force) {
        await this.fetch(id)
      }
    },
    async commentSubmit (n) {
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
    clearReplyJumpTargetHighlight () {
      this.replyJumpTargetId = null
    },
    async replyJump (n) {
      // n={reply:{page_id:xx,id:xx}}
      await this.loadPage(n.reply.page_id, true)
      this.replyJumpTargetId = n.reply.id
      this.$nextTick(() => {
        this.$vuetify.goTo('#replyJumpTarget') // if this line won't work, use code below.
        // const t = setInterval(function () {
        //   try {
        //     console.log('try')
        //     this.$nuxt.$vuetify.goTo('#replyJumpTarget')
        //     console.log('ok')
        //     clearInterval(t)
        //   } catch (error) {
        //     console.log('failed')
        //   }
        // }, 100)
      })
    },
    async changeState (n, canUndo = true) {
      await this.$axios
        .$post(
          this.$route.path +
          '/comments', {
            id: n.origin.id,
            status: n.current.status,
            comment: n.current.comment
          })
      this.loadPage(n.origin.page_id, true)
      const r = await this.$dialog.message.info('修改成功', {
        position: 'bottom',
        actions: canUndo
          ? [{
              text: '撤销', color: 'primary', key: true
            }]
          : null,
        timeout: 5000
      })
      if (r === true) {
        this.changeState({
          origin: n.origin,
          current: n.origin
        }, false)
      }
    }
  }
}
</script>
