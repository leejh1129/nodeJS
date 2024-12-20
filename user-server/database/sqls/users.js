// Table : t_users

// 전채조회
const userList = 
`SELECT  user_no
        ,user_id
        ,user_pwd
        ,user_gender
        ,user_age
        ,join_date
FROM t_users
ORDER BY user_no`;

// 단건조회
const userInfo = 
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
const userInsert = 
`INSERT INTO t_users
SET ?`;

// 수정
const userUpdate = 
`UPDATE t_users
SET ?
WHERE user_no = ?`;

// 삭제
const userDelete = 
`DELETE FROM t_users
WHERE user_no = ?`;

module.exports = {
    userList,
    userInfo,
    userInsert,
    userUpdate,
    userDelete
}

/*
{} 안에 변수들이 나열된형태
{
    userList : ``,
    userInfo : ``,
    userInsert : ``,
    userUpdate : ``,
    userDelete : ``
}
*/