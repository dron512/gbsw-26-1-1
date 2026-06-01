const id = "아이디";
const pw = "패스워드";

const person = {
    id,
    pw,
    name: '이창현',
    age: 20,
    phone: '010-9946-2662'
}
console.log(person);

for (const key in person) {
    const element = person[key];
    console.log(`key ${key} element ${element}`);
}