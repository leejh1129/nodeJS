// 03_sort.js
// sort = 문자정렬(원본 데이터 변경됨), 숫자는 앞에숫자로 정렬

let fruits = ["Banana","Orange","Apple","Mango"];
fruits.sort();
console.log(fruits);    // "Apple","Banana","Mango","Orange"


let points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);    // 1, 5, 10, 40, 100

// 앞에있는값과 계산해서 음수이면 순서가 변경됨
points.sort(function(a,b){
    return a - b;
});

console.log(points);

let emps = [
    { 
        eid : 200,
        name : "King"
    },
    {
        eid : 100,
        name : "Edward"
    },
    {
        eid : 300,
        name : "Han"
    }
];

console.log(emps);

emps.sort((pre, next) => {
    return pre.eid - next.eid;
});

console.log(emps);