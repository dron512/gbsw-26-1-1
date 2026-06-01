const readline = require('readline');
// console.log(readline);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력하세요\n', function (ans) {
    console.log(ans);
    rl.close();
})