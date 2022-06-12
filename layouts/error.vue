<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <v-btn
      text
      @click="back"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      返回上一页
    </v-btn>
    <v-btn
      text
      to="/"
    >
      <v-icon left>
        mdi-home-outline
      </v-icon>
      返回首页
    </v-btn>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '找不到页面',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
