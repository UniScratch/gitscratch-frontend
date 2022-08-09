<template>
  <div>
    <div class="d-flex">
      <p class="text-h5" style="margin: 0;">
        留言
      </p>
      <v-spacer />
      <v-btn
        text
        rounded
        :disabled="dataIsLoading"
        @click="load()"
      >
        <v-icon>
          mdi-cached
        </v-icon>
        刷新
      </v-btn>
    </div>
    <CommentTextArea />
    <div style="margin-top: 24px;">
      <div v-if="!dataIsLoading">
        <template v-if="data.length !== 0">
          <v-list>
            <template v-for="(comment, index) in data">
              <CommentSingle :key="index" :comment-data="comment" />
            </template>
          </v-list>
          <v-pagination
            v-model="page"
            :length="totalPage"
            @input="load()"
          />
        </template>
        <template v-else>
          <p>暂时没有留言</p>
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
    data: null,
    page: 1,
    totalPage: null
  }),
  async fetch () {
    await this.$axios.$get(this.$route.path + '/comment?pageId=' + this.page).then((res) => {
      // console.log(res.data)
      this.data = res.data
      this.totalPage = res.totalPage
      this.dataIsLoading = false
    })
  },
  methods: {
    load () {
      this.dataIsLoading = true
      this.$fetch()
    }
  }
}
</script>
