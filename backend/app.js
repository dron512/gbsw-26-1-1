const express = require('express');
const fs = require('fs/promises');
const app = express();

// 서버가 사용할 포트 번호
const PORT = 3000;

// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱
app.use(express.json());

// 임시 데이터베이스 (메모리 배열)

let users = [
    { id: 1, name: '홍길동', email: 'hong@example.com' },
    { id: 2, name: '이순신', email: 'lee@example.com' }
];

app.get("/", function(req,res){
    res.send("<h1>main Page</h1>");
});

app.get("/aa", async function(req,res){
    try{
        const data = await fs.readFile('aa.html');
        res.send(data);
    }catch(e){
        console.log(e);
        res.send("<h1>aa Page 에러</h1>"+e);
    }
});

// get 조회
// [{},{}]
app.get("/users",(req,res)=>{
    console.log("test 누가 요청 왔음");
    console.log(req.url,req.ip);
    res.json(users);
})

// post 추가
app.post("/user",(req,res)=>{ 
    console.log(req.body);
    const { id, name, email } = req.body;
    console.log(`id = ${id}`);
    console.log(`name = ${name}`);
    console.log(`email = ${email}`);
    users.push({
        id,
        name,
        email
    });
    res.send( "msgsuccess");
})



// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});