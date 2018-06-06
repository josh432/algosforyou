//hoisting

// var test = 7;

// happy(); //the call returns an error because function happy is below it. 

// var happy = function() {
//     return 4 + 4;
// }
// console.log(happy()); //this call will work due to hoisting.
// var test = 7;



// function happy() { //this gets hoisted, moves to top of page. puts all function declarations at top of page.
//     return 4 + 4;
// }

//walk thru code as interpreter would from top down, single threadly.
var bar = 2;
function foo() {
    var apple = 1;
    zed();
    function zed() { //this function within foo gets hoisted to top of function.
        return 6 + 6; //this line just disappears. doing nothing with it.
    }
    return 2 + 2;
}



 //returns 4 in the console when you type foo(); due to HOISTING^^

