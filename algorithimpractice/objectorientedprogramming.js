//object oriented programming
//encapsulation - hiding stuff self-contained code inside an object so other parts of code can't get to it. Hides from other code.
//inheritance - gets stuff from parents, gets past down. protoype inheritance. contructor function.
//abstraction - making stuff easier. hide complexity naming fuctions logically.
//modularity - legos. pieces put together used elsewhere.
//polymorphism - differenct fuctions or variables with the same name.

  var Plants = function(cost, timeToGrow, reward) {
  	this.cost = cost;
  	this.timeToGrow = timeToGrow;
  	this.reward = reward;
  }

  Plants.prototype.harvest = function(){
  	return this.reward;
  }

  var Animals = function(){
  	this.reward = reward;
  }

  Animals.prototype.harvest = function(){
  	return this.reward();
  }


  
  var beans = new Plants(5, 2, 6);
  beans.harvest();
  beans