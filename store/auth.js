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
