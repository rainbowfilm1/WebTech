config.js

module.exports = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydatabase'
};

==============Select.js=============
let mysql = require('mysql');
let config = require('./config.js');
let connection = mysql.createConnection(config);
let sql = `SELECT * FROM todos`; connection.query(sql, (error, results, fields) => { if (error) { return console.error(error.message); } console.log(results); }); connection.end();

====================Select.js2=================
let mysql = require('mysql');
let config = require('F:/Web tech/Practical3/config.js');
let connection = mysql.createConnection(config);
let sql = 'SELECT * FROM emp_27 WHERE eid=3';
connection.query(sql, [true], (error, results, fields) => {
if (error) {
return console.error(error.message);
}
console.log(results);
});
connection.end();