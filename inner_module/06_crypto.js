// 06_crypto.js
const crypto = require('crypto');
const data = 'pw1234';

let encData = crypto.createHash('sha512')   // 알고리즘
                        .update(data)
                        .digest('base64'); // < hex (basse64) 더길게 암호화
console.log(encData);