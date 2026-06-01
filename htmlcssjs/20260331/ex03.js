function cc(test) {
    console.log(test);
}
// 함수를 호출할때
// 매개변수로 기본자료형타입(10,'str',true)
// 매개변수로 함수를 보낼 수 있다.
// 매개변수로 오브젝트형도 보낼 수 있다.
const obj = {
    aa: 10, 
    bb: 20,
    cc: function () { }
};
cc(obj);