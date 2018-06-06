//closure
//fuction accessing something outside of itself
var happy = 3;

var apple = function(a, b) {
     happy = 2;
    console.log(happy);
    
}
apple();