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
const customerInfo = 
`SELECT id
        ,name
        ,email
        ,phone
        ,address
FROM customers
WHERE id = ?`;

// 등록
// set 절에 들어가야되는 컬럼이 명확하지 않을때는 객체로 들어감
const customerInsert =
 `INSERT INTO customers
  SET ?`;   // { 'name' = 'Hong', 'phone' = '010-1234-1234' }

// 수정
// 하나의 쿼리문에 객체 and 단일 값이 들어가는 상황엔 배열
const customerUpdate = 
`UPDATE customers
 SET ?
 WHERE id = ?`; // [ { 'name' = 'Hong', 'phone' = '010-1234-1234' },
                //   1 ]

// 삭제
const customerDelete = 
`DELETE FROM customers
 WHERE id = ?`;

/*
 1) ? 갯수
 1-1) 1개 : 단일 값
 1-2) 2개 이상 : 배열
 2) ? 앞에 컬럼의 유무
 2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
 2-2) 컬럼이 없는 경우 객체
*/

// 모듈 = 독립된 파일
// exports = 내보내기
module.exports = {
    customerList,
    customerInfo,
    customerInsert,
    customerUpdate,
    customerDelete
};