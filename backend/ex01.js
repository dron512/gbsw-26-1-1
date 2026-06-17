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

app.get("/", async function (req, res) {
    // 오타 저장 새로고침 1반...
    try {
        const [rows] = await pool.query('select * from tb_snack');
        console.log(rows);
        res.render('snack_list',{snacks:rows});
    } catch (e) {
        res.send("에러"+e);
    }
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});