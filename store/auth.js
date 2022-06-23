export const state = () => ({
  token: '',
  userInfo: {
    avatar: '',
    bio: '',
    email: '',
    follower: 0,
    following: 0,
    name: '',
    readme: '',
    website: ''
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
    state.token = ''
    state.userInfo = {
      avatar: '',
      bio: '',
      email: '',
      follower: 0,
      following: 0,
      name: '',
      readme: '',
      website: ''
    }
  }
}
