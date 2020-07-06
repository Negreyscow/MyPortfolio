import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Resume from './views/Resume/Resume'
import Portfolio from './views/Portfolio/Portfolio'

Vue.use(VueRouter)

const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'contact',
        path: '/contact',
        component: Contact
    },
    {
        name: 'resume',
        path: '/resume',
        component: Resume
    },
    {
        name: 'portfolio',
        path: '/portfolio',
        component: Portfolio
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router