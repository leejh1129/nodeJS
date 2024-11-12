// 11_class.js

// 생성자 함수
function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
    this.getInfo = () => {
        return `${this.name}, ${this.age}, ${this.city}`;
    }
}

let hong = new User("Hong", 30, "Daegu");
console.log(hong.getInfo()); 

let kim = new User("Kim", 25, "Jeju");
console.log(kim.getInfo());

// class (생성자함수랑 같은 방식으로 생성이 되는데 구지 class방식을 쓸수있는건 java 개발자를 위해)
class Emp{
    //constructor = 필드선언
    constructor(id, name, dept){
        // 해당 클래스가 가지는 필드 등록
        // _로 선언된 필드는 private 로 생각하고 접근안함
        this._id = id;
        this._name = name;
        this._dept = dept;
    }
    // get , set 접근 제어자
    // javascript 개발자가 많이 쓴느방식
    get id(){
        return this._id;
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    // java 개발자가 많이 쓰는 방식
    setDept(dept){
        this._dept = dept;
    }

    getDept(){
        return this._dept;
    }

}

let kang = new Emp(100, "Kang", "Sales");
// id = set 제어자가 없어서 id로는 접근이 불가능하고 _id로만 접근이 가능함
// javascript 개발자가 많이 쓴느방식
kang.id = 200;
kang.name = "King";
// java 개발자가 많이 쓰는 방식
kang.setDept("Marketing");
console.log(kang);