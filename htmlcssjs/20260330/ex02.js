// 1~10 까지 더해서 출력하는거 만들기
let num = 1;
// console.log(1+2+3+4+5+6+7+8+9+10???)
let sum = 0;

for (; num != 11; num++) {
    console.log(num);
    sum = sum + num;
    console.log(`sum = ${sum}`);
}
console.log(`sum = ${sum}`);