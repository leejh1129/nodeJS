// sql.js
// 전체조회
const customerList = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
ORDER BY id`;

// 단건조회

// 등록

// 수정

// 삭제

module.exports = {
    customerList
};