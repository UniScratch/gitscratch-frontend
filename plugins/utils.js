export default ({ app }, inject) => {
  inject('utils', {
    isObjectEmpty: (object) => {
      return (Object.keys(object).length === 0)
    },
    getAvatarUrl: (avatar) => {
      return app.$axios.defaults.baseURL + '/assets/' + avatar
    }
  })
}
