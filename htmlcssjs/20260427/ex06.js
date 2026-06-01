// 배열끼리 결합
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];

console.log([...arr1 ,...arr2]);

const ss = new Set();

ss.add('a');
ss.add('a');
ss.add('a');
ss.add('b');
ss.add('c');
console.log(ss);
console.log([...ss]);
console.log(ss.size)

const ss1 = new Set('We are the world');
console.log(ss1);
console.log([...ss1]);
console.log([...ss1].join('+')); //문자열변경