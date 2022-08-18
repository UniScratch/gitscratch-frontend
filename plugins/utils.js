export default ({ app }, inject) => {
  inject('utils', {
    getAvatarUrl: (avatar) => {
      return app.$axios.defaults.baseURL + '/assets/' + avatar
    }
  })
}
