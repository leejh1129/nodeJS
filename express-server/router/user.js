// router/user.js
const express = require('express');
const router = express.Router();

// /user + / => /user/
router.get('/', (req, res) => {
    res.send('회원 정보 조회');
});

// /user + /insert => /user/insert
router.post('/insert', (req, res) => {
    res.send('회원등록');
});

// module.exports 뒤는 코드작성 x 
module.exports = router;