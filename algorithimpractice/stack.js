//build a queue with two stacks
//stack = last in, first out

var Stack = function() {
   this.storage = {};
   this.size = 0; 
}

Stack.prototype.add = function(x) {
    this.storage[this.size++] = x;
}

Stack.prototype.pop = function() {
    var result = this.storage[--this.size];
    delete this.storage[this.size];
    return result;
}

Stack.prototype.getSize = function() {
    return this.size;
}

var Queue2 = function() {
    this.stackenQueue = new Stack;
    this.stackdeQueue = new Stack;
}

//[4,3,5,3,1,8]
//8,1,3,5,3,4] pop it
//4 is first out
//dequeue stays until first array empty

Queue2.prototype.enqueue = function(x) {
    this.stackenQueue.add(x);
}

Queue2.prototype.dequeue = function() {
    if (this.stackdeQueue.getSize() === 0) {
        while(this.stackenQueue.getSize() > 0) {
            this.stackdeQueue.add(this.stackenQueue.pop())
        }
    }
    return this.stackdeQueue.pop();
}

Queue2.prototype.getSize = function() {
    return this.stackenQueue + this.stackdeQueue
}
