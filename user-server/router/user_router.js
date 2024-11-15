// router/user_router.js
const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');
const { userDelete } = require('../database/sqls/users.js');

/*
전체조회
내부적인 절차에서 에러가 낫을때 사용자에게 에러를 알리긴하지만 무엇 때문에 에러가 낫는지 숨기기위해서 사용하는 방법
router.get('/users', (req, res) => {
    userService
    .findAll()
    .then(list => {
        res.send(list);
    })
    .catch(err => {
        res.status(500).send('Fail Process');
    })
});
*/

// 전체조회
router.get('/users', async (req, res) => {
    let userList = await userService.findAll();
    res.send(userList);
});

// 단건조회
router.get('/users/:no', async (req, res) => {
    let userNo = req.params.no;
    let info = await userService.findByNo(userNo);
    res.send(info)
});
// 라우팅 = 사용자의 요청(URL+METHOD) + Service + view


// 등록
router.post('/users', async (req, res) => {
    let userInfo = req.body;
    let result = await userService.createNewUser(userInfo);
    res.send(result);
});

// 수정
router.put('/users/:no', async (req, res) => {
    let no = req.params.no;
    let info = req.body;
    let result = await userService.updateUserInfo(no, info);
    res.send(result);
});
// 삭제
router.delete('/users/:no', async (req, res) => {
    let userNo = req.params.no;
    let del = await userService.delUserInfo(userNo);
    res.send(del);
})

module.exports = router;