var fs = require('fs');
try {
var stats = fs.statSync("E:/MCA/Web Prectical/Standard-callback-pattern.js");
console.log('is file ? ' + stats.isFile());
var stats = fs.statSync("E:/MCA/Web Prectical/Standard-callback-pattern");
} catch (err) {
  console.log('is directory ? ' + stats.isDirectory());
}


