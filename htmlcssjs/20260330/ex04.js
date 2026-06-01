const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('팩토리얼 구하기\n', (data) => {
    console.log(data);
    // 5 * 4 * 3 * 2 * 1
    let value = 1;
    for (let num = 1; num <= data; num++) {
        value = value * num;
    }
    console.log(`value = ${value}`);
    rl.close();
});