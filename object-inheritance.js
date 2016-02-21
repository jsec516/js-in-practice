var oldObj = {d: 'do'};

// create 'newObj' from oldObj
// 'newObj' inherits properties of 'oldObj'
// newObj ---> oldObj ---> Object.prototype ---> null
newObj=Object.create(oldObj);

// prototype link only used in retrieval
console.log(newObj.d); // do

// no effect on property override on prototype chain
newObj.d = 'docs';
console.log(newObj.d); // docs
console.log(oldObj.d); // do

// inheriting method
var o = {
  a: 2,
  m: function(b){
  	// when we refer to `this` it'll try to find `a` in object scope
  	// otherwise it'll try to find `a` into global scope
    return this.a + 1;

  }
};
console.log(o.m()); // 3

// p inheriting o
var p = Object.create(o);
p.a=9;
console.log(p.m()); // 10

// d ---> null
var d = Object.create(null);

/*================ different types of object creation and inheritance =======   */
// chain - myObj ---> Object.prototype ---> null
var myObj = {a: 1}; 

// chain - myArr ---> Array.prototype ---> Object.prototype ---> null
var myArr = ["yo", "whadup", "?"]; 

// f ---> Function.prototype ---> Object.prototype ---> null
function f(){
  return 2;
}

/*========================= construtor ======================*/
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v){
    this.vertices.push(v);
  }
};
// value of Graph.prototype locate in g.__proto__
// g -----> Object.prototype --------> null
var g = new Graph();

/*========================= construtor ======================*/