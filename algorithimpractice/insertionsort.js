//insertion sort
 var insertionSort = function(array) {
 	for (var i = 1; i < array.length; i++) {
 		for(var j = 0; j < i; j++) {
 			if(array[i] < array[j]) {
 				var temp = array.splice(i, 1);
 				array.splice(j, 0, temp[0]);
 			}
 		} 
 	}
 	return array;
 }

 var x = [5, 7, 9, 11, 13, 6, 10, 50, 66];

 insertionSort(x);
