//bubble sort

//sort array [3, 7, 1, 6]
//is array [0] greater than array[1] = no
//is array[1] greater than array[2] = yes
//so, temp = array[1], array[1] = array[2]
//and array[2] = temp
//the variables changed is set to true
//now the variables changed is set to true
//now the array looks like this:
//[3, 1, 7, 6]
//is array[2] greater than array[3] = yes
//so temp = array[2]
//array[3] = temp
//the variable changed is set to true
//now the array looks like this:
//[3, 1, 6, 7]
//is array[3] greater than array [4] (array[4] is undefined)
//is change true? = yes
//so do it again
//is array[0] greater than array[1] = yes
//temp = array[0]
//array[0] = array[1]
//array[1] = temp
//set the changed variable to true(it was changed to false)
//now the array looks like this
//[1, 3, 6, 7]
//ineffecient o(n2) = quadratic

var bubbleSort = nums => {
	do{
		var changed = false;
		for(var i = 0; i < nums.length; i++){
			if(nums[i] > nums[i + 1]){
				var temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				changed = true;
			}
		}
	} while (changed)
	return nums
};
console.log(bubbleSort([7, 3, 6, 1]));