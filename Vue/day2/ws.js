const WebSocket = require('ws');
//创建一个websocket服务器
const wss = new WebSocket.Server({
    port: 9977
});
//与客户端进行连接
wss.on('connection', (client) => {
    client.on('message', (message) => {
        // console.log(message);
        client.send(message);
    });
});
//所有的服务端
wss.clients

console.log('启动WebSocket服务器');