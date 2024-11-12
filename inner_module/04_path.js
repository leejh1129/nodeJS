// 04_path.js

// 전역변수, 절대경로
// __filename = 현재 실행하고있는 파일의 절대경로
console.log(__filename);
// __dirname = 현재 실행하고있는 파일의 디렉토리 경로
console.log(__dirname);

const path = require('path');

console.log('폴더정보', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));