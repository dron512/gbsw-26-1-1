function solution(slice, n) {
    // 7조각시 10명이 먹으면 2판
    // 4조각시 12명이 먹으면 3판

    // Math.floor 내림
    // Math.round 반올림
    // Math.ceil 올림
    // console.log(Math.ceil(n/slice)); //1.XXX

    return Math.ceil(n/slice);
}

solution(7, 10); // 2
solution(4,	12); //	3
