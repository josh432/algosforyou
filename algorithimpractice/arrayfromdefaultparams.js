//Array.from
//arguments keyword
//default parameters

function defailtPs(a = 1, b = 6) { //if parameter blank, default params  
    console.log(arguments.length);
}

//defailtPs(); //can feed params here.

//arguments keyword arraylike object of all the objects when function get called
defailtPs(4,6,3,4,5,6,5,2,1)