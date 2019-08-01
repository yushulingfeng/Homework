import Vue from 'vue';
import app from './app.vue';

//全局样式
import './index.css';
//weui样式
import './weui.css';

new Vue({
    el: '#demo',

    render(h) {
        return h('app');
    },
    components: {
        app
    }
});