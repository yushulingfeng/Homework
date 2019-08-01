const Vue = require('../node_modules/vue/dist/vue');
// const $ = require('./jquery');

const Vu = new Vue({
    el:'#demo',
    data:{
        name:'feng',
        html:`<p>567<h1>标题</h1><span style="color:red">abc</span></p>`,
        w:200,
        h:100,
        color:'#58bc58',
        bool:1,
        classA:'username',
        classB:'username1',
        arr:[{
                name:'孙悟空',
                age:18,
                address:'东胜神洲 傲来国 齐天府'
            },{
                name:'猪八戒',
                age:28,
                address:'高老庄'
            },{
                name:'沙和尚',
                age:38,
                address:'流沙河'
            }],
            
    },
    template:`<div>
                <p v-text='name' :class="[classA,classB]"></p>
                <div v-html="html"></div>
                <div :style="{width:w+'px',height:h+'px',background:color}" v-show="bool">bool为真，block显示</div>
                <h1 v-if="bool<1">ABC</h1>
                <h1 v-else>伍六七</h1>
                <ul>
                    <li v-for="item in arr">
                        <p :class="[classA]">姓名：<span v-text="item.name"></span></p>
                        <p :class="[classB]">住址：<span v-text="item.age"></span></p>
                        <p :class="[classB]">年龄：<span v-text="item.address"></span></p>
                    </li>
                </ul>
                <button @click="update()">按钮</button>
                <hr/>
                <input v-model="name" />
                
            </div>
            `,
            methods:{
                update() {
                    Vu.name = '玉树凌风';
                }
            }
});
// console.log(Vu);

// const Vm = new Vue({
//     el:'#tab',
//     data:{
//         classP:'btns',
//         classD:'conts',
//         classBox:'box'
//     },
//     template:`
//     <div :class="[classBox]">
//         <p :class="[classP]" @click="Tab()">
//             <button>选项卡1</button>        
//             <button>选项卡2</button>        
//             <button>选项卡3</button>        
//         </p>
//         <div :class="[classD]">Content1</div>
//         <div :class="[classD]">Content2</div>
//         <div :class="[classD]">Content3</div>
    
//     </div>
//     `,
//     methods:{
//         Tab() {
//             // let index = $(this).children('button').index();
//             console.log(this);
//         }
//     }
// });