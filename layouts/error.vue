<template>
  <div style="margin: 10px auto; text-align: center;">
    <p class="text-h2">
      {{ errTypes[errType].emoji }}
    </p>
    <p class="text-h5">
      {{ errTypes[errType].text }}
    </p>
    <p>
      {{ errTypes[errType].subtitle }}
    </p>
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
  layout: 'Error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      errType: 0,
      errTypes: {
        404: { text: '404 资源不存在', emoji: '🤔', subtitle: '生活总归带点荒谬' },
        500: { text: '500 服务器错误', emoji: '🙏', subtitle: '服务器出错可能说明该雇更多程序员了' },
        403: { text: '没有权限访问目标页面', emoji: '🤚', subtitle: '总有些门是对你关闭的' },
        0: { text: '??? 未知错误', emoji: '🙏', subtitle: '服务器出错可能说明该雇更多程序员了' }
      }
    }
  },
  mounted () {
    this.errType =
      this.error.statusCode === 404 ? 404 : 0
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
