// app.js
require('dotenv').config({ path : './database/mysql.env'});
// console.log(process.env); 각종자료확인
const express = require('express');
const app = express();
const mysql = require('./database/mapper.js');

// content-type : application/json
app.use(express.json());

app.listen(3000, () => {
    console.log('Server Start');
    console.log('http://localhost:3000');
});
 
// db에있는 값 받음
// await = 비동기작업인데 완료되기도 전에 전송을해서 안나타남 그래서 기다려달라고 await 사용
// 다이렉트로 mapper를 호출
// 전체조회
app.get('/customers', async (req, res) => {
    let list = await mysql.query('customerList');
    res.send(list);
})     
 
// 단건조회
app.get('/customers/:id', async (req, res) => {
    let selected = req.params.id;
    // [0] = 배열 깨트리기
    let info = (await mysql.query('customerInfo', selected))[0];
    res.send(info);
}); 

// 등록 
app.post('/customers', async (req, res) => {
    let newObj = req.body;
    console.log(newObj);
    let info = await mysql.query('customerInsert', newObj);
    res.send(info);
});

// 수정
app.put('/customers/:id', async (req, res) => {
    let selected = req.params.id;
    let newObj = req.body;
    let update = await mysql.query('customerUpdate', [newObj, selected]);
    res.send(update);
});

// 삭제
app.delete('/customers/:id', async (req, res) => {
    let selected = req.params.id;
    let info = await mysql.query('customerDelete', selected);
    res.send(info);
});