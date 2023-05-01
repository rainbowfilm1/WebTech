var thisIsTrue = false;
exports.test = function(request, response, cb){
if (thisIsTrue) {
response.send('All is good!');
cb(null, response)
} else {
response.send('ERROR! ERROR!');
return cb("THIS ISN'T TRUE!");
}
console.log('I do not want this to happen. If there is an error.');
}