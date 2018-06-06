//closure
//fuction accessing something outside of itself
var happy = 3;

var apple = function(a, b) {
 var happy = 2;
 return function(){
     happy+=2;
     console.log(happy)
 }
}
apple()();
apple()();
//happy = 2 each time. doesn't increment