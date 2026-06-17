const aa=10;
// aa=20;

const obj={
    name:'이철수'
}
console.log(obj.name);
obj.name='박철수';
console.log(obj.name);

obj.fn = ()=>{ console.log('test'); };
obj.fn();

// 객체의 프로퍼티는 변경 가능하다
// object의 properties는 변경 가능하다
// obj={ name:"김철수" }
// console.log(obj.name);

a=10;

a=a*'aaa';
console.log(a);
