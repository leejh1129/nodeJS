// 전체조회
const usersList =
`SELECT  user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        ,join_date
FROM t_users
ORDER BY user_id`;

// 단건조회
const usersInfo =
`SELECT  user_no
        ,user_id
        ,user_pwd
        ,user_name
        ,user_gender
        ,user_age
        ,join_date
FROM t_users
WHERE user_no = ?`;

// 등록
const usersInsert = 
`INSERT INTO t_users
SET ?`;

// 수정
const usersUpdate = 
`UPDATE t_users
 SET ?
 WHERE user_no = ?`;

// 삭제
const usersDelete = 
`DELETE FROM t_users
 WHERE user_no = ?`;

 module.exports = {
    usersList,
    usersInfo,
    usersInsert,
    usersUpdate,
    usersDelete
 }; 