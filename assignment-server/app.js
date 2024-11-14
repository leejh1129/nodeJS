const express = require('express');
const app = express();
const mysql = require('./mapper.js');

app.use(express.json());

app.listen(3000, () => {
    console.log('Server Start');
    console.log('http://localhost:3000');
});

// 전체조회
app.get('/users', async (req, res) => {
    let list = await mysql.query('usersList');
    res.send(list);
});

// 단건조회
app.get('/users/:user_no', async (req, res) => {
    let selected = req.params.user_no;
    let info = (await mysql.query('usersInfo', selected))[0];
    res.send(info);
});

// 등록
app.post('/users', async (req, res) => {
    let newObj = req.body;
    console.log(newObj)
    let insert = await mysql.query('usersInsert', newObj);
    res.send(insert);
});

// 수정
app.put('/users/:user_no', async (req, res) => {
    let selected = req.params.user_no;
    let newObj = req.body;
    let update = await mysql.query('usersUpdate', [newObj, selected]);
    res.send(update);
});

// 삭제
app.delete('/users/:user_no', async (req, res) => {
    let selected = req.params.user_no;
    let del = await mysql.query('usersDelete', selected);
    res.send(del);
});