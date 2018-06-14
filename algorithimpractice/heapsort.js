//heapsort
//turn array into a max-heap
//swap max number with the last number
//pretend max number doesn't exist
//make new max heap, make a top swap, pretend it doesn't exist.
//keep doing this until finished the array is now sorted.
//leftChild = index * 2 + 1
//rightChild = index * 2 + 2
//goal bigger numbers move up, every parent larger than its children
//maximum number at top
// [9,3,2,6,8,9,2,5,4,2,7,6,5]


const heapSort = arr => {
    arr = makeFirstMaxHeap(arr);
    let size = arr.length;
    let temp;
    for (let i = arr.length - 1; i > 0; i--) {
      temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      size--;
      makeMaxHeap(arr, 0, size);
    }
    return arr;
  }
  
  const makeFirstMaxHeap = arr => {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
      makeMaxHeap(arr, i, arr.length);
    }
    return arr;
  }
  
  const makeMaxHeap = (arr, index, heapSize) => {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    
    let largestNum = index;
    
    if (heapSize > left && arr[largestNum] < arr[left]) {
      largestNum = left;
    }
    
    if (heapSize > right && arr[largestNum] < arr[right]) {
      largestNum = right;
    }
    
    if (largestNum !== index) {
      const temp = arr[index];
      arr[index] = arr[largestNum];
      arr[largestNum] = temp;
      makeMaxHeap(arr, largestNum, heapSize);
    }
  }

