// express 웹서버
const express = require('express');
// filesystem 모듈
const fs = require('fs/promises');
// mysql 연결 하는 모듈
const mysql = require('mysql2/promise');
// Nunjucks 모듈 추가
const nunjucks = require('nunjucks');

const app = express();

// 서버가 사용할 포트 번호
const PORT = 3000;

// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱(번역)
app.use(express.json());
// form 태그 안에 들어오는 내용 파싱(번역)
app.use(express.urlencoded({ extends: true }))

// 넌적스 환경설정 시작
nunjucks.configure('views', { express: app, watch: true });
app.set('view engine', 'html');
// 넌적스 환경설정 끝

const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1234",
    database: "bbb",
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

app.get("/", async function (req, res) {
    // res.send("<h1>main Page</h1><a href='/bb'>bb</a>");
    try {
        const [rows] = await pool.query('select * from users');
        res.render('main', { users: rows });
    } catch (e) {
        console.log('e' + e);
        res.send("잘못된 서버");
    }

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

// app.post("/deluser",(req,res)=>{ delete from users where id =? ,[1]})
app.post("/adduser", async (req, res) => {
    console.log("req.body");
    console.log(req.body);
    const { name, email } = req.body;
    try {
        await pool.query(`insert into users (name,email) values (?,?)`, [name, email])
        res.send("성공적으로 행데이터 삽입했습니다.");
    } catch (e) {
        console.log(e);
        res.send("error" + e);
    }
});

// req 요청 데이터... 
// res 응답 데이터...

app.post("/deluser", async (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    console.log(`id = ${id}`)
    try {
        await pool.query(`delete from users where id=?`, [id])
        res.send("성공적으로 행데이터 삭제되었습니다.");
    } catch (e) {
        console.log(e);
        res.send("error" + e);
    }
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

