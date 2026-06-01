// n의 값이 10일때 30이 돌아와야한다.
// n이하의 짝수
// 1 ~ n 까지 반복문
function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        // 2 나누기를 했을때 나머지가 0이면 더한다
        if (i % 2 == 0)
            answer += i;
    }
    return answer;
}

const ret = solution(10);
console.log(ret);