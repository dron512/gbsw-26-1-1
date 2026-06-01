// 1~10 까지 더해서 출력하는거 만들기
let num = 1;
let sum = 0;

// while(조건){}
// for(초기값;조건;변화){}

while ( num != 11 ) {
    console.log(num);
    sum += num;
    console.log(`sum = ${sum}`);
    num++;
}
console.log(`sum = ${sum}`);