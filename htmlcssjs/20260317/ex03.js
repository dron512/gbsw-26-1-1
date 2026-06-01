// 오브젝트형 타입에는 
// 변수와 함수를 넣을 수 있어요
var msg ={
    a:10,
    b:function(aa){ console.log(aa); }
}
function dd(aa){
    console.log(aa);
}
dd('출력할내용');
console.log(msg.a);
// document.getElementById
msg.b('asdfasdf');