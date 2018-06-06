//hoisting

// var test = 7;

// happy(); //the call returns an error because function happy is below it. 

// var happy = function() {
//     return 4 + 4;
// }
console.log(happy()); //this call will work due to hoisting.
var test = 7;



function happy() { //this gets hoisted, moves to top of page. puts all function declarations at top of page.
    return 4 + 4;
}




