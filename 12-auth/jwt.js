const jwt = require('jsonwebtoken');

let data = 100;
let secret = 'super';

const token = jwt.sign(data, secret);
const decodeToken = jwt.verify(token, secret);
console.log(token);
console.log(decodeToken);
