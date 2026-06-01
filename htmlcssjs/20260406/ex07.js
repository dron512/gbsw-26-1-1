const arr = [1, 2, 3, 4, 5, 6];

const result = arr.slice(1, 3);
console.log(`result = ${result}`);
console.log(`arr = ${arr}`);

arr.splice(1, 2);
console.log(`arr = ${arr}`);

console.log([1, 2, 3].concat([4, 5, 6]));
console.log([1, 2, 3] + [4, 5, 6]);