//Fizzbuzz
//print #'s 1-100 to console but if divisible by 3
//print buzz
//if divisible by 7 print fizz
//for loop start with 1 if i < 101
//print i if i / 3 = 0 print fizz if i / 7 = 0 print buzz
//if i / 3 and 7 print fizzbuzz

var fizzBuzz = function() {
    for (var i = 1; i < 101; i++) {
        if (i % 7 === 0 && i % 3 === 0) {
           console.log("fizzbuzz");
        }
        else if(i % 7 === 0){
            console.log("buzz");
        }
        else if(i % 3 === 0) {
            console.log("fizz")
        }
        else {
            console.log(i);
        }
    }
}