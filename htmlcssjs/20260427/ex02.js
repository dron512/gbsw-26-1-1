function solution(my_string) {
    let test = true;
    let answer = "";

    for (let i = 0; i < my_string.length; i++) {
        for (let j = i + 1; j < my_string.length; j++) {
            if (my_string[i] === my_string[j]) {
                test = false;
                console.log('aa'+my_string[i]);
                console.log('bb'+my_string[j]);
            }
        }
        if (test) {
            test = true;
            answer = answer + my_string[i];
        }
    }
    return answer;
}

// solution("people"); //"peol"
const ret = solution("We are the world"); //"We arthwold"
console.log(`ret = ${ret}`)