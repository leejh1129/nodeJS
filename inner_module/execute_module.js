// execute_module.js
// require 로 불러와야 모듈로 인식
const cal = require('./calculator.js');
const {add} = require('./calculator.js');

let result = cal.add(10,5);
console.log(result);

result = add(20,50);
console.log(result);