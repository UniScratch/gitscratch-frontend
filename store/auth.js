export const state = () => ({
  token: '',
  userInfo: {
  }

})

export const mutations = {
  updateToken (state, token) {
    state.token = token
  },
  updateInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  logout (state) {
    this.$http.$post('/auth/logout').then((res) => {
    })
    state.token = ''
    state.userInfo = { }
  }
}
