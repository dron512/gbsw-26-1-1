const arr = ['javascript', 'c++', 'python'];// forof 배열
const obj = { a: '10', b: 20 };// forin 오브젝트
for (const item of arr) {
    console.log(item);
}
console.log(arr);// 배열내용 다 출력

// forEach 사용 es2015 새로운 문법 추가 let const `` ()=>{}
console.log('forEach 사용');
arr.forEach(item => {
    console.log(item);
})
arr.forEach(function(item){
    console.log(item);
})

