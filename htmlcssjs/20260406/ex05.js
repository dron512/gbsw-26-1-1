const obj = {
    //메서드 입니다.
    doA:function(){
        console.log("살려주세요");
    }
}

const doB = function(){
    console.log('함수 선언');
}

obj.doA();
doB();