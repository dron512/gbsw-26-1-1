// var 변수선언 -> 재선언되기때문에 사용하지 않는다
// let 값 변경 가능한 변수 선언
// const 값 변경 불가능한 변수 선언 (오브젝트형만 변경 가능하다)

var a = 10;
var a = 20;
console.log(a);

let b = 10;
b = 20;
console.log(b);

const c = 10;
// c = 40;
console.log(c);

const d = {
    a: 10, b: 20, c: function (kk) {
        console.log('kk = '+kk);
        console.log('cc');
        return 10; // 생략가능한 문법
    }
}
d.e = 50;
d.ee = 60;
d.a = 30;
console.log(d);
console.log(d.a);
console.log(d.b);
d.c(d.b);
// console.log(d.c());