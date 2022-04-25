import Vue from "vue";
import VueRouter from "vue-router";

import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'

const NotFound = { template: '<p>Page not found: {{ $route.path }}</p>' }

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
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