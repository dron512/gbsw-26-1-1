const user = {
    id: '아이디',
    pw: '패스워드',
    name: '이창현',
    age: 20
}
// const { id, pw, name, age } = user;

// const id = user.id;
// const pw = user.pw;
// const name = user.name;
// const age = user.age;

function aa({ id, pw, name, age }) {
    console.log(id);
    console.log(pw);
    console.log(name);
    console.log(age);
}

aa(user);
