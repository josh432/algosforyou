//currying
var addTwo = function(a, b){
    console.log(`${a} + ${b} = ${a + b}`)
}

addTwo(5,4); //normal function

var add2 = function(a){
    return function(b){
    console.log(`${a} + ${b} = ${a + b}`)  
    }
}

add2(4)(8);

var add7 = add2(7);
add7(9);

var add8 = add2(8);
add8(10);
add7(12);