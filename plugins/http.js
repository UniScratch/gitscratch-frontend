export default function ({
  $http
}) {
  $http.onRequest((config) => {
    // console.log('Making request to ' + config.url)
  })

  $http.onRetry(async (request, options, errors, retryCount) => {
  })

  $http.onError((error) => {
    if (error.statusCode === 500) {
    //   alert('Request Error!' + error.response.data.message)
      // this.$dialog.error({
      //   text: res.message,
      //   title: '登陆失败'
      // })
    }
    // Tip: error.response will be undefined if the connection dropped to the server
    // Tip: You can use error.response.data to get response message
    // Tip: You can return an object or Promise as fallback response to avoid rejection
  })
}
