function sayHi() {
console.log('Hello'); }
setTimeout(sayHi, 5000);

let timerId = setTimeout(() => alert("never happens"), 1000);
alert(timerId); // timer identifier
clearTimeout(timerId);
alert(timerId); // same identifier (doesn't become null after canceling)

let timerId = setInterval(() => console.log('tick'), 2000);
setTimeout(() => { 
clearInterval(timerId); 
console.log('stop'); 
}, 5000);

let timerId = setTimeout(function tick() {
console.log('tick');
timerId = setTimeout(tick, 2000); // (*) }, 2000); 
