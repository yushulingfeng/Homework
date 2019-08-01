const Vue = require('../../../vue');

Vue.component('my-header', {
    props: ['text', 'col', 'cla', 'op'],
    template: `<div :class="[this.cla]" :style="{background:this.col,opacity:this.op}">{{this.text}}</div>`
});

let isok = true;
const vm = new Vue({
    el: '#demo',
    data: {
        text: 'One迷糊 迷糊 迷糊 迷糊 迷糊',
        color: '#58bc58',
        classA: 'box1',
        opacity: 1
    },
    template: ` <div @click="tab">
                    <my-header :cla="classA" :text="text" :col="color" :op="opacity"></my-header>
                </div>`,
    methods: {
        tab() {

            if (isok) {
                this.opacity = .5;
                this.color = 'red';
                this.text = 'Two不迷糊 不迷糊 不迷糊 不迷糊 不迷糊';
                isok = !isok;
            } else {
                this.opacity = 1;
                this.color = '#58bc58';
                this.text = 'One迷糊 迷糊 迷糊 迷糊 迷糊';
                isok = !isok;
            }
        }
    }
});