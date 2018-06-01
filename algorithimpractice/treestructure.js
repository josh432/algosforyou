var Tree = function(val) {
	this.value = val;
	this.children = [];
}

Tree.prototype.addChild = function(value){
	this.children.push(new Tree(value))
}

Tree.prototype.contains = function(target){
	var result = false;
	var inner = function(obj){
		if(obj.value === target){
			result = true;
		}
		obj.children.forEach(function(child){
			inner(child);
		})
	}
	inner(this);
	return result
}

var maple = new Tree('Bruce');
maple.addChild("Abe");
maple.addChild('Tom');
maple.children[0].addChild("Tom Junior");
maple.children[0].children[0].addChild("sue");
maple;