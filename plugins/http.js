export default function ({ $axios, $dialog, $auth, error: nuxtError }) {
  // $axios.onResponse((response) => {
  //   // console.log(response.headers['x-gitscratch-user'] && response.headers['x-gitscratch-user'] === 'None')
  //   // if (response.status === 401) {
  //   //   $auth.logout()
  //   // }
  //   if (response.headers['x-gitscratch-user'] && response.headers['x-gitscratch-user'] === 'None') {
  //     console.log('unauth')
  //     $auth.logout()
  //   }
  //   return response
  // })
  $axios.onResponseError((error) => {
    let errorMsg = ''
    errorMsg += `请求失败: ${error.message}\n`
    if (error.response) {
      if (error.response.status) {
        errorMsg += `<br>响应码: ${error.response.status} ${error.response.statusText}`
        if (error.response.status === 401) {
          console.log('session expired, logout.')
          $auth.logout()
          return Promise.resolve(false)
        }
      }
      if (error.response.data.message) {
        errorMsg += `<br>信息: ${error.response.data.message}`
      }
    }
    try {
      setTimeout(() => {
        $dialog.notify.error(errorMsg, {
          position: 'bottom-left',
          timeout: 5000
        })
      }, 500)
    } catch (error) {
      console.log(error)
    }

    return Promise.resolve(false)
  })
}
