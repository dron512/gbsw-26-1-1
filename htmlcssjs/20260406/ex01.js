// let 기본자료형 변경 가능한
// const 기본자료형 변경 불가 오브젝트형(객체)변경가능한
// object -> 객체

// const obj =  {} 객체형
// const answer = [] 객체형배열
function solution(st, en) {
    console.log(`st = ${st} en = ${en}`)
    const answer = [];

    // 배열 함수인 push pop slice 함수 사용 가능
    for (let i = st; i <= en; i++) {
        console.log(`i = ${i}`);
        answer.push(i);
    }
    return answer;
}

const result = solution(3, 5);//3,4,5
console.log(result);

// console.log(`st = ${st} en = ${en}`)
