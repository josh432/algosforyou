//array counter
//given an array with nested arrays, return
//the most deeply nested non array value's depth level
//[[[]], 4] = 1 (4 is at the first level, it is a non array value)
//var test =[[4], 5, [[[[6]]]], [[[[[[[]]]]]]] = 4 (6 is at the 4th level, it is a non array value)
//test[2][0][0][0][0] = 6

var arrCounter = function(arr) {
    var counter = 0;
    var maxCount = 0;
    var inner = function(n) {
        if(!Array.isArray(n)) {
            maxCount = Math.max(maxCount, counter);
            counter = 0;
            return
        }
        n.forEach(num => {
            counter++;
            inner(num);
        })
    }
    inner(arr);
    return maxCount;
}