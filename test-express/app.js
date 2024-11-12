const express = require('express');
const app = express();

// 서버가 제공하는 서비스
// req = request res = response
app.get('/', (req, res) => {
    res.send('Server Connect');
})

// 3000 = 포트번호
app.listen(3000, () => {
    console.log('서버가 실행됩니다');
    console.log('http://localhost:3000');
})