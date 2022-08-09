export default function ({ $axios, $dialog, error: nuxtError }) {
  $axios.onResponseError((error) => {
    let errorMsg = ''
    errorMsg += `请求失败: ${error.message}\n`
    if (error.response) {
      if (error.response.status) {
        errorMsg += `<br>响应码: ${error.response.status} ${error.response.statusText}`
      }
      if (error.response.data.message) {
        errorMsg += `<br>信息: ${error.response.data.message}`
      }
    }
    console.log(error.response)
    console.log(error)
    $dialog.notify.error(errorMsg, {
      position: 'bottom-left',
      timeout: 0
    })
    return Promise.resolve(false)
  })
}
