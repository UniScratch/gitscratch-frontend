import Vue from 'vue'
import App from './pages/App.vue'
import About from './pages/About.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const NotFound = {
  template: '<p>Page not found</p>'
}
const routes = {
  '/': App,
  '/about': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  vuetify,
  render(h) {
    return h(this.ViewComponent)
  }
}).$mount('#app')