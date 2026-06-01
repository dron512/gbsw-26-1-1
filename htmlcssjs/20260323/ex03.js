
console.log(!true);
console.log(!false);

if (!false && 10 < 20 || false) {
    console.log("출력");
}

const tt = '';
if(!tt) { console.log('tt false'); }

const test = {}
if(test){ console.log('test true'); }

const str = "true";
if(str){
    console.log("실행되냐?");
    console.log(Boolean(str));
}

// string -> number
const num = Number('10');
