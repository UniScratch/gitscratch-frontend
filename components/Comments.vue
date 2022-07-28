<template>
  <div v-if="!dataIsLoading">
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
  </div>
  <div v-else class="text-center">
    <v-progress-circular indeterminate color="primary" />
    <br>
    Getting comments. Sit and relax.
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
    await this.$http.$get(this.$route.path + '/comment?pageId=' + this.page).then((res) => {
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
