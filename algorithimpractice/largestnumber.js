//return the largest number in an array

//input array, output = number
//iterate through the array
//variable largestNumber = 1
//first number = largest number
//is next number > largest number if yes, largest number = that number
//if not move on to next number
//return largest number

var largestNumber = function(arr) {
    var result = arr.length === 0 ? 1 : arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}