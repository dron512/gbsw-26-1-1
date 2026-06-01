var a = 10 > 20; // false
var b = 30 < 40; // true

console.log(a && b);
console.log(a || b);
console.log(!a);

var a = 10;
var f = true && ++a;
console.log(f);
console.log(a);