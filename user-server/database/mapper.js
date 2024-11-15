const mysql = require('mysql');
const sqlList = require('./sqls/users.js');

const connectionPool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PORT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_LIMIT,
    debug: true // 보내는쿼리문과 돌아오는 결과 볼수있는 log4j 비슷한거
});

const query = (alias, values)=> {
    return new Promise((resolve, reject)=>{
        let executeSql = sqlList[alias]; // 중요부분 코드 100%이해하자
        connectionPool.query(executeSql, values, (err, result, fields)=>{
            //console.log(fields)
            if(err) {
                console.log(err);
                reject({err});                                
            }else{
                resolve(result);
            }
        });
    });
};

module.exports = {
    query,
}