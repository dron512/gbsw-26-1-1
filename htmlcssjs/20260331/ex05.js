// let num = 10;
function aa() {
    let num = 0;
    while (1) {
        console.log('무한루프');
        if (num == 1) {
            num++;
            console.log('컨티뉴걸림');
            continue;
        }
        if (num == 3) {
            break;
        }
        console.log(`여기까지옴 ${num}`);
        num++;
    }
}
aa();

// console.log(num);