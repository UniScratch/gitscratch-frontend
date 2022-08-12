<template>
  <div>
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
        textarea-label="留言"
        textarea-placeholder="Leave a comment"
        action-icon="mdi-send"
        action-text="发送"
        @submit="commentSubmit"
      />
    </v-card>
    <div style="margin-top: 24px">
      <div v-if="!dataIsLoading">
        <template v-if="totalComments !== 0">
          <v-list>
            <template v-for="currentPageId in [...Object.keys(comments)].reverse()">
              <template v-for="comment in comments[currentPageId]">
                <CommentSingle :key="comment.id" :comment-data="comment" />
              </template>
            </template>
          </v-list>
          <!-- <div class="d-flex justify-space-between">
            第 {{ pageId }}/{{ totalPages }} 页
            <v-btn text :disabled="pageId === 1 " @click="nextPage()">
              {{ pageId !== 1 ? "加载更多" : "没有更多了" }}
            </v-btn>
            共 {{ totalComments }} 条留言
          </div> -->
          <div class="d-flex justify-center">
            <v-btn text :disabled="pageId === 1 " @click="nextPage()">
              {{ pageId !== 1 ? "加载更多" : "没有更多了" }}
            </v-btn>
          </div>
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
        // console.log(res.data)
        this.totalPages = res.data.totalPages
        this.totalComments = res.data.totalComments
        this.pageId = res.data.pageId
        this.$set(this.comments, this.pageId, res.data.comments.reverse())
        // this.comments.
        // this.comments[this.pageId] = res.data.comments
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
    nextPage () {
      if (this.pageId !== 1) {
        this.pageId--
        this.$fetch()
      }
    },
    async commentSubmit (n) {
      // console.log(n)
      const res = await this.$axios.$post(this.$route.path + '/comments/new', {
        comment: n
      })
      if (res !== false) {
        this.$dialog.message.info('发送成功', {
          position: 'bottom'
        })
        this.reload()
      }
    }
  }
}
</script>
