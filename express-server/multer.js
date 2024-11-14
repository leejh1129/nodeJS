// multer = 파일을 업로드 할때 사용하는 모듈
const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
  destination : function(req, file, cb){
    cb(null, 'uploads/');
  },
  filename : function(req, file, cb){
    // 한글깨짐 인코딩 설정(multer 자체가 utf8이 아님)
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
    cb(null, new Date().valueOf() + path.basename(file.originalname));
  }
});

const upload = multer({ storage : storage });

// 단일등록으로 처리
app.post('/profile', upload.single('avatar'), (req, res)=>{
  console.log(req.file);
  console.log(req.body);
});

// 한번에 12개까지 등록가능 처리 (upload.array('photos', 12) = 'photos' = multer name)
app.post('/photos', upload.array('photos', 12), (req,res)=>{
  for(let file of req.files){
    console.log(file);
  }
})

app.listen(5000, ()=>{
  console.log('Server Start!!');
})