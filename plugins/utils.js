export default ({ app }, inject) => {
  inject('utils', {
    isObjectEmpty: (object) => {
      return (Object.keys(object).length === 0)
    },
    getAssetUrl: (avatar) => {
      if (avatar) {
        if (avatar.match(/^[a-fA-F0-9]{32}\.\w{1,5}?$/)) {
          return app.$axios.defaults.baseURL + '/assets/' + avatar
        } else {
          return avatar
        }
      } else {
        return '/GitScratch-project-thumbnail-grey.svg'
      }
    },
    getTimeString: (time) => {
      if (time) {
        return new Date(time * 1000).format('yyyy/MM/dd hh:mm:ss')
      }
      return ''
    }
  })
}
