<template>
  <div style="margin: 10px auto; text-align: center;">
    <div v-if="error.statusCode === 404" class="text-h5">
      {{ pageNotFound }}
    </div>
    <div v-else-if="error.statusCode === 500" class="text-h5">
      {{ internalServerError }}
    </div>
    <div v-else-if="error.statusCode === 403" class="text-h5">
      {{ forbidden }}
    </div>
    <div v-else class="text-h5">
      {{ otherError }}
    </div>
    <br>
    <v-btn
      text
      rounded
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
      rounded
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
      internalServerError: '内部服务器错误',
      forbidden: '没有权限访问目标页面',
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
