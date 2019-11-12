import Vue from "vue"
import Router from "vue-router"

import home from "@/components/home"
import about from "@/components/about"
import success from "@/components/success"
import contact from "@/components/contact"

Vue.use(Router)
export const router =  new Router({
    mode: "hash",
    routes: [ { path: '/', component: home, },
            { path: '/about', component: about, },
            { path: '/success', component: success, },
            { path: '/contact', component: contact, },
    ]
})
