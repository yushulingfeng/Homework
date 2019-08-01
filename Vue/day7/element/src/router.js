import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Details from './views/Details'
import Mine from './views/Tabbar/Mine'
import Order from './views/Tabbar/Order'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Details',
            name: 'details',
            component: Details

            // // route level code-splitting
            // // this generates a separate chunk (about.[hash].js) for this route
            // // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ './views/Details.vue')
        }, {
            path: '/Mine',
            name: 'mine',
            component: Mine
        }, {
            path: '/Order',
            name: 'order',
            component: Order
        }
    ]
})