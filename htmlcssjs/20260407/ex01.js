// 선언부
// arguments 가 자동으로 생성됨.
// 매개변수를 보내면8 생성
function doA() {
    console.log(arguments);
    console.log('A');
    return 10;
}
function doB(a, b = 20, c = 30) {
    console.log(arguments);
    console.log(`a = ${a} b=${b} c=${c}`);
}
// 호출부
const ret = doA(10);
console.log(ret);

doB(10);
