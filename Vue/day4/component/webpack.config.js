//原生模块，处理路径
const path = require('path');

module.exports = {
    // watch:true,
    // 打包模式
    // 开发者模式 development
    mode: 'development',
    // 发布上线模式 production
    // mode: 'production',

    //入口
    entry: './src/index.js',
    //出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // module: {
    //     // rules: [{
    //     //         test: /\.css/,
    //     //         use: ['style-loader', 'css-loader']
    //     //     }
    //         // , {
    //         //     test: /\.html/,
    //         //     use: ['html-loader']
    //         // }, {
    //         //     test: /\.js$/,
    //         //     exclude: /(node_modules|bower_components)/,
    //         //     use: {
    //         //         loader: 'babel-loader',
    //         //         options: {
    //         //             presets: ['@babel/preset-env']
    //         //         }
    //         //     }
    //         // }
    //     ]
    // }
};