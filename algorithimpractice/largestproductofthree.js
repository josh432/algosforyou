//largest product of three
//[4,7,32,5,8,43,435,345,8,9]
//want to mutiply largest three numbers together


var largestProductOfThree = (arr) => arr.sort((a, b) => a - b).slice(arr.length - 3).reduce((a, b) => a * b);
 