import Vue from "vue";
import VueRouter from "vue-router";

import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'
import Auth from '/src/pages/Auth.vue'
import UserProfile from '/src/pages/UserProfile.vue'

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
        path: "/auth",
        component: Auth
    },
    {
        path: "/users/:username",
        component: UserProfile
    },
    {
        path: "*",
        component: NotFound
    },
]

var router = new VueRouter({
    routes
})
export default router;