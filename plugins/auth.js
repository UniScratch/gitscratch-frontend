import Vue from 'vue'

Vue.prototype.$auth_updateSession = function (session) {
  if (session !== null) {
    this.$store.commit('auth/updateSession', session)
    this.$http.setHeader('x-gitscratch-session', session)
    this.$http.$get('/auth/session').then((res) => { // 获取用户信息
      if (res.status === 'success') {
        this.$store.commit('auth/updateInfo', res.data.data)
      } else {
        this.$dialog.error({
          text: res.message,
          title: '登录失效'
        })
        this.$store.commit('auth/logout')
      }
    })
  }
}
