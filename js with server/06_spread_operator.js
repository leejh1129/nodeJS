// 펼침연산자 : 06_spread_operator.js

let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];
// 기존
let arr3 = [];
arr1.forEach(val => arr3.push(val));
arr2.forEach(val => arr3.push(val));
console.log(arr3);

// 펼침연산자 활용
let newArr = [...arr1, ...arr2];
console.log(newArr);

let str = "CD";
let strAry = [...str];
console.log(strAry);
// 문자열도 인덱스로 접근 가능
console.log(str[0]);