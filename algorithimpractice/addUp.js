//add all numbers array return the total
//input = array, output = number

//iterate over array, variable total = 0 add each number to total.
//var arr = [1,2,3];
//addUp(arr)
var addUp = function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
