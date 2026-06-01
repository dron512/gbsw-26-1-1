function aa(){
    let test = 10;
    console.log(test);
}
const bb = ()=>{ 
    let test = 10;
    console.log(test);
}
let num = 0;
for (; num < 10; num = num + 1) {
    console.log("test " + num);
    console.log(`test ${num}`);
}
console.log(`for 구문 끝나고 num = ${num}`);
// console.log(test);
console.log(aa);
aa();
bb();