// 07_Destructuring.js
// 1) Object
let person = {
    firstName : "John",
    lastName : "Doe",
    age : 37,
    email : "john@gmail.com",
    country : "USA"
};

// lastName, email = person 내부에있는 필드 값자체를 의미
let {lastName, email} = person;
console.log(lastName);
console.log(email);

function getFullName({firstName, lastName}){
    console.log(`${lastName}, ${firstName}`);
}
getFullName(person);

// 2) Array
// 배열이 가지고 있는 모든 값을 받고 원하는 값을 쓰는걸 권장함
let scores = [70, 80, 90];

let [a, b, c] = scores;

console.log(a,b,c);