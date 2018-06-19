//interate throughout the array
//store
//run a truth check
//if the truth check is true
//immediately return true,
//return store

//note cannot break out of an array with for each method
//CAN break out of array with a for loop.
var arr = [54,2,34,5,3,266,23,2];
//var.forEach(x => return x);

var some = function(arr, cb) {
    //var result = false;
    // arr.forEach(x => {
    //     if(cb(x)){
    for(let x of arr){
        if (cb(x)) {
            return true;
        }
    }

           // result = true;
           return false;

        }
    

    //return result;

//}

console.log(some(arr, function (x) {
    return x < 3;
}));
