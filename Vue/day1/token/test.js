const {
    createToken,
    decodeToken
} = require('./token');

// 后端在这里用算法生成了一块手牌，里面携带了关键的登录注册信息
// const token = createToken({
//     username: 'yao',
//     password: 123
// }, 300);

// console.log(token);


// eyJkYXRhIjp7InVzZXJuYW1lIjoieWFvIiwicGFzc3dvcmQiOjEyM30sImNyZWF0ZWQiOjE30sImNyZWF0ZWQiOjE1NjM3NjE4OTcsImV4cCI6MzAwfQ == .y3tAyL6QG5ZgeOeBNI6Qq8N1LQoDpBsrhA4zCyxqjL6QG5ZgeOeBNI6Qq8NBc =

const obj = decodeToken('eyJkYXRhIjp7InVzZXJuYW1lIjoieWFvIiwicGFzc3dvcmQiOjEyM30sImNyZWF0ZWQiOjE1NjM3NjIxMjMsImV4cCI6MzAwfQ==.8n30p9ufgWY2VBOeEiY3jBArjpC9XCLis4MYrNdJhmU=');
console.log(obj);