//merge sort
//.sort either quick or merge sort
//very efficient

// [4, 1, 9, 2]
// //chop in half
// [4, 1] [9, 2]
// [4] [1] [9] [2]
// merge([4], [1]) =>[1,4]
// merge([9], [2]) =>[2,9]
// merge([1,4], [2,9]) =>[1,2,4,9]

//[4,1,9,2]

const mergeSort = nums => {
    const sortedArray = [...nums];
    if (sortedArray.length < 2) {
      return nums;
    }
    const length = sortedArray.length;
    const middle = Math.floor(length / 2);
    const left = sortedArray.slice(0, middle);
    const right = sortedArray.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
  };
  
  const merge = (left, right) => {
    const results = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    return results.concat(left, right);
  };

  