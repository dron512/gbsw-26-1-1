// 객체 분해
function doA({ a, b, c }) {
    // console.log(obj);
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
}

// 배열 분해 
const [a,b,c] = [1,2,3];

// es2015
const obj = { a: 'aa', b: 'bb', c: 'cc' };
doA(obj);