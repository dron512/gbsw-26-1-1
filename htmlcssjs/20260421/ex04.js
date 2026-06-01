// const ret = require('./ex02')
const readline = require('readline');
const fs = require('fs');

const test = fs.readFileSync('ex01.js','utf-8');
console.log(test);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dic = {
    boy: "소년",
    girl: "소녀",
    friend: "친구"
}
rl.question('찾을 단어를 입력하세요:', function (data) {
    let word = data;
    console.log(dic[word]);
    rl.close();// 종료하기 위해서 close() 해야함
});
// 오타 저장 새로고침

