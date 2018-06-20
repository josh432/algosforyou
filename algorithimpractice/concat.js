var apple = [4];
var test = apple.concat(5);
console.log(test);
console.log(apple);

//concat doesn't change original array, returns a new copy
 var test2 = apple.push(5);
 console.log(test2); //returns the length of the array
 console.log(apple);

 //push changes original array
