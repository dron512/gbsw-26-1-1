const readline = require('readline');
// console.log(readline);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력하세요\n', function (ans) {
    // ans 짝수... 만약에 ans를 2로 나누었을때 나머지가 0이면 짝수입니다.
    if (ans % 2 == 0) {
        console.log("짝수");
    } else {
        console.log("홀수");
    }
    rl.close();
})