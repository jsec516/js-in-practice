var myObj = { add: function(a, b){ return a+b; }};
myObj.add.apply(null, [1,2]); // 3

var myObj = { add: function(){ return this.a+this.b; }};
var nums = {a: 20, b:30};
myObj.add.apply(nums); // 50


var Quo = function (string){
	this.status = string;
}
Quo.prototype.get_status = function(){
	return this.status;
}

// we can use get_status of Quo 
// without creating object of that constructor
var statusObj = { status: 'Ah-ok' }
Quo.prototype.get_status.apply(statusObj); // Ah-ok


