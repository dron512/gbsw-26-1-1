// function account(){}

//docu.onclick =function(){}
const savedUser = '최인성님';

const account = function () {
    // 지역변수를 찾아보고 없으면 전역변수를 찾는다
    const savedUser = '인은성님';
    console.log(savedUser + ' 함수안');
}

account();
console.log(savedUser + ' 함수안');