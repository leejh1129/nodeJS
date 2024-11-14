// middleApp.js
// Content-type
// 1) application/x-www-form-urlencoded
// => QueryString(질의문자열) : key=value&key=value&...
// => req.query 속성 : GET
// => req.body 속성  : POST

// 2) application/json
// => JSON : {} or []
// => req.body 속성

// 3) pathvariable => X
// => req.params 속성

const express = require('express');
const cors = require('cors');
const session =require('express-session');

const app = express();

// 모든 요청에 응답
app.use(cors());

// 지정한 요청에 대해서만 응답
const corsOptions = {
    origin : 'htpp://192.168.0.13:5500',
    optionsSuccessStatus : 200
}
app.use(cors(corsOptions));

// application/x-www-form-urlencoded
// json = get 방식으로 못넘김(body가 있어야 넘길 수 있어서 그럼)
app.use(express.urlencoded({extended : false}));

app.post('./info',(req,res)=>{
    // 문자열로 보냄
    res.send(`keyword : ${req.body.search}`); //post => body
});

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
})

let sessionSetting = session({
    secret : '$#@1235Tsecdx',   // 암호화 키
    resave : false,             // session에 저장여부
    saveUninitialized : true,   // login이전부터 session을 생성해서 관리를 할지말지 지정
    cookie : {
        httpOnly : true,        // javascript에서 접근하는걸 막음
        secure : false,
        maxAge : 60000          // 쿠키의 유효기간
    }
    
});
app.use(sessionSetting);

app.post('/login', (req, res)=>{
    const{ id, pwd } = req.body;    //  {id : 'Hong', pwd : '1234'}
    req.session.user =id;
    req.session.pwd = pwd;
    req.session.save(function(err){     // session = save를 통해 반드시 저장
        if(err) throw err;
        res.redirect('/');
    })    
})


app.get('/', (req, res)=>{
    res.send(req.session);
});

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect('/');
})

