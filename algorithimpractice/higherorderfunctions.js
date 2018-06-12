//higher order functions

//function that returns a function
//or that accepts a function as an argument

//not a higher order function
// var logger = function(x) {
//     console.log(x);

// }
//  logger(8);

//function that returns a function
//logger is a high order function because when you invoke it
//it returns a function
var logger = function() {
    return function(x) {
        console.log(x);
    }
}

//test is a function
var test = logger();
test(9);

//higher order function accepts a function as an argument
var maple = function (fn, value) {
    fn(value);
}

maple(test, 10);

//or can write it like this
maple(function(x) {
    console.log(x)

}, 10);

//or can write it like this
maple(x => {
    console.log(x)
}, 10);

//or like this
maple(x => console.log(x), 10);



