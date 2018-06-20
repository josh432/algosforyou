//regular expressions
//{}
//.exec
// \d any digit
// \w alphanumeric character
// \s any whitespace
// \D a character that isn't a digit
// \W a non alphanumeric character
// \S a nonwhite space
// . any character except for new line
// ^ anything but...


var someString = "I have a big apple"
var apple = new RegExp("apple");
var apple2 = /apple/
var anyNumber = /[0-9]/

console.log(/apple/.test(someString));
console.log(apple2.test(someString));
console.log(apple.test(someString));
console.log(anyNumber.test(someString));
console.log('8'.charCodeAt());



