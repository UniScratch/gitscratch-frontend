// /*
//  **  Nuxt
//  */
// const http = require('http')
// const {
//   Nuxt,
//   Builder
// } = require('nuxt')
const electron = require('electron')
// const config = require('./nuxt.config.js')
// config.rootDir = __dirname // for electron-builder
// // Init Nuxt.js
// const nuxt = new Nuxt(config)
// const builder = new Builder(nuxt)
// const server = http.createServer(nuxt.render)
// // Build only in dev mode
// if (config.dev) {
//   builder.build().catch((err) => {
//     console.error(err) // eslint-disable-line no-console
//     process.exit(1)
//   })
// }
// // Listen the server
// server.listen()
// const _NUXT_URL_ = `http://localhost:${server.address().port}`
// console.log(`Nuxt working on ${_NUXT_URL_}`)

/*
 **  Nuxt
 */
const {
  loadNuxt
  //   build
} = require('nuxt')
const nuxtApp = require('express')()
const port = process.env.PORT || 3000
const _NUXT_URL_ = `http://localhost:${port}`
// Check if we need to run Nuxt in development mode
// const isDev = process.env.NODE_ENV !== 'production'
async function start () {
  // Get a ready to use Nuxt instance
  const nuxt = await loadNuxt('start')
  nuxtApp.use(nuxt.render)
  nuxtApp.listen(port, '0.0.0.0')
  console.log(`Nuxt working on ${_NUXT_URL_}`)
}

start()

// Enable live build & reloading on dev
// if (isDev) {
//     build(nuxt)
// }

/*
 ** Electron
 */
let win = null // Current window
const path = require('path')
const app = electron.app
const newWin = () => {
  win = new electron.BrowserWindow({
    icon: path.join(__dirname, 'static/icon.png')
  })
  win.maximize()
  win.on('closed', () => win = null)
  //   if (config.dev) {
  //     // Install vue dev tool and open chrome dev tools
  //     const {
  //       default: installExtension,
  //       VUEJS_DEVTOOLS
  //     } = require('electron-devtools-installer')
  //     installExtension(VUEJS_DEVTOOLS.id).then((name) => {
  //       console.log(`Added Extension:  ${name}`)
  //       win.webContents.openDevTools()
  //     }).catch(err => console.log('An error occurred: ', err))
  //     // Wait for nuxt to build
  //     const pollServer = () => {
  //       http.get(_NUXT_URL_, (res) => {
  //         if (res.statusCode === 200) {
  //           win.loadURL(_NUXT_URL_)
  //         } else {
  //           setTimeout(pollServer, 300)
  //         }
  //       }).on('error', pollServer)
  //     }
  //     pollServer()
  //   } else {
  //     return win.loadURL(_NUXT_URL_)
  //   }
  win.loadURL(_NUXT_URL_)
}
app.on('ready', newWin)
app.on('window-all-closed', () => app.quit())
app.on('activate', () => win === null && newWin())
