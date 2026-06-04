const express = require('express');
const fs = require('fs/promises');
const mysql = require('mysql2/promise');
const app = express();

// 서버가 사용할 포트 번호
const PORT = 3000;

// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱(번역)
app.use(express.json());
// form 태그 안에 들어오는 내용 파싱
app.use(express.urlencoded({ extends: true }))

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "gbsw1-1",
    port: "3306",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 임시 데이터베이스 (메모리 배열)
// let users = [
//     { id: 1, name: '홍길동', email: 'hong@example.com' },
//     { id: 2, name: '이순신', email: 'lee@example.com' }
// ];

app.get("/", function (req, res) {
    res.send("<h1>main Page</h1><a href='/bb'>bb</a>");
});

app.get("/bb", function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/bb.html');
});

app.get("/aa", async function (req, res) {
    try {
        const data = await fs.readFile('aa.html');
        res.send(data);
    } catch (e) {
        console.log(e);
        res.send("<h1>aa Page 에러</h1>" + e);
    }
});

// get 조회
// [{},{}]
app.get("/users", async (req, res) => {
    // console.log("test 누가 요청 왔음");
    // console.log(req.url, req.ip);

    try {
        const [rows, columns] = await pool.query("SELECT * FROM users");
        console.log(rows);
        res.json(rows);
    } catch (e) {
        console.log(e);
        res.send('망했다요 배열 분해 기억 못하나요?');
    }
    // res.json(users);
})

// post 추가 -> insert 행넣기

// get -> req.query
// post -> req.body
app.post("/adduser", (req, res) => {
    console.log("req.body");
    console.log(req.body);
    res.send("msgsuccess");
})



// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});