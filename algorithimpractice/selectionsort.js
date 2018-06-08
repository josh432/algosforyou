//selection sort
//worst sorting algo runs through every item in the array
 //[4,9,1,3]
    
  var selectionSort = function (array) {
    let sortedArray = [...array]
    sortedArray.forEach(function(element, index) {
      var minValue = element;
      var minIndex = index;
      for (var i = index; i<sortedArray.length; i++) {
        if (compare(sortedArray[i], minValue) < 0)
          {
            minValue = sortedArray[i];
            minIndex = i;
          }
      }
      sortedArray = swap(sortedArray, index, minIndex);
    });
    return sortedArray;
  };
  
  function swap (arr, i1, i2) {
    var temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
    return arr;
  }
  
  function compare(a,b) {
    if (a < b) return -1; // a comes first
    else if (a > b) return 1; // b comes first
    return 0;
  }

  var apple = [3,7,1,2,4] //this array is unaffected by the selection sort!!
  var maple = selectionSort(apple);
  console.log(maple);