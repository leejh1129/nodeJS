const fs = require('fs');
const express = require('express'); // 웹 서버 기능 제공
const server = express(); // 인스턴스생성

// use = 미들웨어를 등록하는 메소드
// 해당경로에가서 router 받아오기
const userRouter = require('./router/user.js');

// /user로 userRouter()안에있는 router.get 실행을 선언
server.use('/user', userRouter);

// images 폴더가 /img로 대체되서 경로지정(실제경로 = /images)
server.use('/img', express.static('./images'));
server.use(function(err, req, res, next){
    res.status(500).json({statusCOde: res.statusCode,
                          errMessage  : err.message});
})

// 강제 에러코드
server.get('/error', (req, res, next) => {
    next(new Error('Process Fail! Check Data!'));
});

// 미들웨어 등록(express보조기능)
server.use(express.json());


// DB 설정
const jsonFile = fs.readFileSync('data.json');
const jsonData = JSON.parse(jsonFile);  // JSON.parse() = json을 객체배열로 변환

const query = (crud, target, where = null)=>{
    let result = null;
  
    let emps = jsonData;
    switch(crud){
    // 조회
    case 'SELECT' :
      result = (where == null) ? emps :  emps.filter(emp => {
        return findEmp(emp, where);
      });
      break;  
  
    // 등록
    case 'INSERT' :
      emps.push(target);
      break;
    // 수정
    case 'UPDATE' :
      emps.forEach(emp => {
        if(findEmp(emp, where)){
          for(let field in target){
            emp[field] = where[field];
          }
        }
      });
      break;
    // 삭제
    case 'DELETE' :
      let selected = null;
      emps.forEach((emp, idx) => {
        if(findEmp(emp, where)){
          selected = idx;
        }
      });
  
      emps.splice(selected, 1);
      break;
    }
    return result;
  };
  
  function findEmp(emp, where){
    let selected = 0;   // 총 검색조건 갯수
    let fieldNum = 0;   // true인 검색조건 갯수
    for(let field in where){
      fieldNum++;
      if(emp[field] == where[field]){
        selected++;
      }
    }
    return (fieldNum == selected);
  }

// (port,())
server.listen(3000, () => {
    console.log('Server Start');
    console.log('http://localhost:3000');
});

// 루트경로
server.get('/', (req, res) => {
    //res.send('Server Connect!');
    res.sendFile('index.html', { root : __dirname });
});

// 전체조회 : GET, emps
// http://localhost:3000/emps
server.get('/emps', (req, res) => {
    //res.send(jsonData);
    res.send(query('SELECT'));
});

/*
req.params  => pathvariable
content-type가 없음

req.body    =>  JSON
content-type = application/json

req.query   =>  QueryString
Content-type = application/x-www-form-urlencoded

Content-type
1) application/x-www-form-urlencoded
=> QueryString(질의문자열) : key=value&key=value&....
=> req.query속성

2) application/json
=> JSON : {} or []
=> req.body 속성

3) pathvariable => x
=> req.params 속성
*/

// : = 값을 받는 위치
// 단건조회 : GET, emps/:id => pathvariable(경로에붙는 변수)
// http://localhost:3000/emps/1
server.get('/emps/:id', (req, res) => {
    //res.send('Emp Info');
    res.send(query('SELECT', null, {id : req.params.id }));
});

// 등록    : POST, emps
server.post('/emps', (req, res) => {
    //res.send('Emp Insert');
    console.log(req.body);
    res.send(query('INSERT', req.body));
});

// 수정    : PUT, emps/:id
server.put('/emps/:id', (req, res) => {
    //res.send('Emp Update');
    res.send(query('UPDATE', req.body, { id : req.params.id }));
});

// 삭제    : DELETE, emps/:id
server.delete('/emps/:id', (req, res) => {
    //res.send('Emp Delete');
    res.send(query('DELETE', null, {id : req.params.id }));
});
