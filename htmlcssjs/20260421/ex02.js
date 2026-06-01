const dic = {
    boy: '소년',
    girl: '소녀',
    friend: '친구'
}
// 프로퍼티 = 속성(변수)
// 프로퍼티즈 = 속성들(변수들)
// let map = new Map();

console.log(dic);
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

dic.apple = '사과';
dic.ten = 10;

delete dic.girl;

console.log(dic.girl);

console.log(dic.apple);
console.log(dic.ten);
