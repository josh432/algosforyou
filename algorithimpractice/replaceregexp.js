//..replace with regexp

let someString = "Blue birds are blue and some orange birds are yellow";
let reg = /birds/g //g = global, i = case insensitive
let test = someString.replace(reg, 'turtles'); //doesn't replace it everywhere must put 'g' in regexp

console.log(test);


//remove the dashes gets rid of spaces, non alphanumeric characters, non-digits
let somestring2 = "345-876-5432";
let reg2 = /-/g //can use /\D/g or /\d/g
let test2 = somestring2.replace(reg2, '');
console.log(test2);
