module.exports = {
  apps: [{
    name: 'GitScratchFrontend',
    exec_mode: 'cluster',
    instances: 'max', // Or a number of instances
    env: {
      API_URL: 'https://git.sc.cn/api/',
      NODE_ENV: 'development'
    },
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start'
  }]
}
