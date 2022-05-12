import Vue from "vue";
import VueRouter from "vue-router";
import goTo from 'vuetify/lib/services/goto'

import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'
import Login from '/src/pages/Login.vue'
import Register from '/src/pages/Register.vue'
import UserProfile from '/src/pages/UserProfile.vue'
import Settings from '/src/pages/Settings.vue'

const NotFound = { template: '<p>Page not found: {{ $route.path }}</p>' }

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/auth/login",
        component: Login
    },
    {
        path: "/auth/register",
        component: Register
    },
    {
        path: "/users/:username",
        component: UserProfile
    },
    {
        path: "/settings",
        component: Settings
    },
    {
        path: "*",
        component: NotFound
    },
]

var router = new VueRouter({
    routes,
    //mode: "history",
    scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
})

//router.afterEach((to, from) => {
//  alert("routed")
//})

export default router;
