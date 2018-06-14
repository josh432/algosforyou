//classes in JS

class Stack {
    constructor(a, b) {
        this.happy = a;
        this.sad = b;

    }

    amHappy(){
        console.log(this.happy);
    }
    amSad(){
        console.log(this.sad);
    }

}

//type in console
// var maple = new Stack(true, false);
// maple;

//maple.amHappy();
//maple.amSad();


//Instead of doing this
// Stack.prototype.amHappy = function(){

// }

//old way 
// var Stack = function(a, b){
//     this.happy = a;
//     this.sad = b;

// }

// Stack.prototype.amHappy = function(){
//     console.log(this.happy);
// }

// Stack.prototype.amSad = function(){
//     console.log(this.sad);
// }

