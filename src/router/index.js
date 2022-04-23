import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'
import Auth from '/src/pages/Auth.vue'

// 要告诉 vue 使用 vueRouter
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
        path: "/auth",
        component: Auth
    },
]

var router = new VueRouter({
    routes
})
export default router;