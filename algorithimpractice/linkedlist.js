var LinkedList = function(){
  this.head = null;
  this.tail = null;
  this.size = 0;
}

LinkedList.prototype.add = function(value){
 var newNode = new NewNode(value);
  if (!this.head){
    this.head = newNode;
    this.tail = newNode;
    this.size++;
    return;
  }
  this.tail.next = newNode;
  this.tail = newNode;
  this.size++;
}

var NewNode = function(val){
  this.value = val;
  this.next = null;
  }

  LinkedList.prototype.returnHead = function(){
    if (!this.head) return null;
    var head = this.head.value;
    if(this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return head;
    }
    this.head = this.head.next;
    this.size--;
    return head;
  }

LinkedList.prototype.getSize = function(){
  return this.size;
}


  var maple = new LinkedList();
  maple;
  maple.add(5);
  maple;
  maple.add(6);
  maple;
  maple.add(7);
  maple;
  maple.returnHead();
  maple;
  maple.getSize();