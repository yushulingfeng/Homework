import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.prototype.$axios = axios

import {
    Cell,
    CellGroup
} from 'vant';
Vue.use(Cell).use(CellGroup);

import {
    Search
} from 'vant';
Vue.use(Search);

import {
    Grid,
    GridItem
} from 'vant';
Vue.use(Grid).use(GridItem);

import {
    Swipe,
    SwipeItem
} from 'vant';
Vue.use(Swipe).use(SwipeItem);

import {
    Divider
} from 'vant';
Vue.use(Divider);

//下拉菜单 排序筛选
import {
    DropdownMenu,
    DropdownItem
} from 'vant';

import router from './router'
Vue.use(DropdownMenu).use(DropdownItem);

import {
    Tabbar,
    TabbarItem
} from 'vant';
Vue.use(Tabbar).use(TabbarItem);

import {
    Field
} from 'vant';
Vue.use(Field);


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')