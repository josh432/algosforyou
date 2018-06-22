//set data structure
////an array that keeps unique data.

let MySet = function() {
    this.collection = [];
}

MySet.prototype.add = function (x) {
    if (!this.collection.includes(x)) {
        this.collection.push(x);
        return true;
    }
    return false;
}

MySet.prototype.has = function (x) {
    if (this.collection.indexOf(x) == -1) {
        this.collection.push(x);
        return false;
    }
    return true;
}

MySet.prototype.remove = function (x) {
    let index = this.collection.indexOf(x);
    if (index !== -1) {
        this.collection.splice(index, 1);
         return true;
    }
    return false;
}

MySet.prototype.values = function (x) {
    return this.collection;

}

MySet.prototype.clearAll = function (x) {
    this.collection = [];
    return true;
}





let test = new MySet();
//type test.add(8) in console..
//look instead test test; in console should have 8 in it.
