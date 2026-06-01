// const ret = require('./ex02')
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력하세요', function (obj) {
    let dic = {
        [obj]: "친구"
    }
    console.log(dic);
    console.log(dic[obj]);
    rl.close();// 종료하기 위해서 close() 해야함
});
// 오타 저장 새로고침

