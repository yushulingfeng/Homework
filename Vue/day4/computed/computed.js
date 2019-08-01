const Vue = require('vue');

const vm = new Vue({
    el: 'demo',
    data: {
        name: 'yao'
    },
    // template:`<p></p>`,
    computed: {
        nameEn() {
            return 'lao' + this.name;
        }
    }
});