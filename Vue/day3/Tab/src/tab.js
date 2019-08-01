const Vue = require('../../node_modules/vue/dist/vue');

let obj = [
    { "tab": "选项一" },
    { "tab": "选项二" },
    { "tab": "选项三" }
];

let obj2 = [{
    cont: "11111",
    bool: true,
    color: 'background:#58bc58'
}, {
    cont: "22222",
    bool: false,
    color: 'background:yellow'
}, {
    cont: "33333",
    bool: false,
    color: 'background:pink'
}];

var vm = new Vue({
    el: "#app",
    data: {
        list: obj,
        list2: obj2,
        classA: 'cont'
    },
    template: `
             <div>
                <ul>
                    <li v-for="(item,index) in list" @click="tab(index)" v-text="item.tab"></li>
                </ul>
                <div :class="[classA]">
                    <div v-for="(item,index) in list2" v-show="item.bool" v-text="item.cont" :style="item.color"></div>
                </div>
             </div>
             `,
    methods: {
        tab: function(index) {
            // console.log(index);
            for (let i = 0; i < obj2.length; i++) {
                obj2[i].bool = false;
                obj2[index].bool = true;
            }
            // console.log(obj2[index].bool);
        }
    }
})