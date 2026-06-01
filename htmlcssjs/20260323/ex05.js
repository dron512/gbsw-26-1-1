const num = 5;
let a = 10;
// num이 10보다 크면 10보다 큽니다.
if (num > 10) {
    console.log('10보다 큽니다.');
}
else if (num < 10 || a++ ) {
    console.log("num은 10보다 작습니다.")
}
else{
    console.log("num은 10이랑 같습니다.");
}
console.log("a = "+a);
// num이 10보다 작으면 10보다 작습니다.
// num이 10이랑 같으면 10과 같습니다.
