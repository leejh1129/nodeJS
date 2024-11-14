// mapper.js
const mysql = require('mysql');
const sql = require('./sql.js');

const pool = mysql.createPool({
    host : `localhost`,
    post : `3306`,
    user : `dev01`,
    password : `1234`,
    database : `dev`,
    connectionLimit : 10 //내가 선점하고자 하는 connection 최대 개수
});

// 
const query = (alias, values) => { //비동기작업 (awwait)
    return new Promise((resolve, reject)=>{
        let excuteSql = sql[alias];     // sql.customerInfo
        console.log(excuteSql);
        pool.query(excuteSql, values, (err, results)=>{
            //실제로 실행한 결과를 반환
            if(err){
                console.log(err);
                reject({err});
            }else{
                resolve(results);
            }
            })
        });
}

    module.exports = {
        query
    };
