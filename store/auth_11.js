export const state = () => ({
  session: '',
  userInfo: {
  }

})

export const mutations = {
  updateSession (state, session) {
    state.session = session
    this.$cookies.set('session', session)
  },
  updateInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  logout (state) {
    this.$http.$post('/auth/logout').then((res) => {
    })
    this.$cookies.remove('session')
    state.session = ''
    state.userInfo = { }
  }
}
