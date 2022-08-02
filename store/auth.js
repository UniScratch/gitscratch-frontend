export const state = () => ({
  session: '',
  userInfo: {
  }

})

export const mutations = {
  updateSession (state, session) {
    state.session = session
    localStorage.setItem('session', session)
  },
  updateInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  logout (state) {
    this.$http.$post('/auth/logout').then((res) => {
    })
    localStorage.clear()
    state.session = ''
    state.userInfo = { }
  }
}

export const actions = {
  updateSession (context, session) {
    // state.session = session
    // localStorage.setItem('session', session)
    context.commit('updateSession', session)
    this.$http.setHeader('x-gitscratch-session', session)
    this.$http.$get('/auth/session').then((res) => { // 获取用户信息
      console.log(res.data.data)
      context.commit('updateInfo', res.data.data)
      // state.userInfo = res.data.data
    })
    // const a = await this.$http.$get('/auth/session')
    // state.userInfo = a.data.data
    // this.$store.commit('auth/updateInfo', a.data.data)
  }
}
