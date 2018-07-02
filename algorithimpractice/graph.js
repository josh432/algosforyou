//how to build a graph in javascript

var Graph = function() {
    this.storage = {};
    this.size = 0;
}

Graph.prototype.add = function(value) {
    this.storage[value] = {};
    this.size++;
}

Graph.prototype.addConnection = function(fr, to) {
    this.storage[fr][to] = true;
    this.storage[to][fr] = true;
}

Graph.prototype.removeConnection = function(fr, to) {
    delete this.storage[fr][to];
    delete this.storage[to][fr];
}

Graph.prototype.contains = function(target) {
    return this.storage.hasOwnProperty(target);
}

Graph.prototype.hasConnection = function(fr, to) {
    return this.storage[fr].hasOwnProperty(to);
}

Graph.prototype.remove = function(val) {
    delete this.storage[val];
    this.size--;
    for (var key in this.storage) {
        if (this.storage[key][val]) {
            delete this.storage[key][val]
        }
    }
}

var maple = new Graph();
maple.add("Sony");
maple.add("PS3");
maple.add("PS4");
maple.add("VR");
maple.add("Nintendo");
maple.add("Wii");
maple.add("Wii U");
maple.add("Xbox");
maple.add("Xbox1");
maple.addConnection("Sony", "PS3");
maple.addConnection("Sony", "PS4");
maple.addConnection("Sony", "VR");
maple.addConnection("Nintendo", "Wii");
maple.addConnection("Nintendo", "Wii U");
maple.addConnection("Xbox", "Xbox1");




