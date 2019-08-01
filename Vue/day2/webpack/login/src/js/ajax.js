const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.get('/login', (req, res) => {
    res.send('去你吗，就是不出来');
})
app.post('/login', (req, res) => {

    res.append('Access-Control-Allow-Origin', '*');

    // let body = '';
    // // 监听数据正在流入
    // req.on('data', (chunk) => {
    //         body = body + chunk;
    //     })
    //     // 监听数据流动结束
    // req.on('end', () => {
    //     console.log(body);
    // });
    console.log(req.body);

    res.send('ok');

});

app.listen(3999);
console.log('启动');