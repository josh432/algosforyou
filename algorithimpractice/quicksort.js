//quick sort
//.sort method

//return new array with numbers sorted. doesn't destroy old array.
//pivot last item in array
// [5, 1, 6, 4, 2, 6, 8, 5]
// pivot = 5
// left = 1, 4, 2 (less than pivot)
// right = 5, 6, 6, 8(greater than pivot)

return [left, pivot, right]

  const quickSort = nums => {
    const sortedArray = [...nums]

    if (sortedArray.length <= 1) {
      return sortedArray;
    }
    
    const pivot = sortedArray[sortedArray.length-1];
    const left = [];
    const right = [];
    
    for (let i = 0; i < sortedArray.length-1; i++) {
      if (sortedArray[i] < pivot) {
        left.push(sortedArray[i]);
      }
      else {
        right.push(sortedArray[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  };

  quickSort([4,1,2,3,5]);
  