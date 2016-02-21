var Quo = function (string){
	this.status = string;
}

// Give all instances of Quo a public method called `get_status`
Quo.prototype.get_status = function(){
	return this.status;
}

// make an instance of Quo
var myQuo = new Quo("gotcha!");
myQuo.get_status(); // gotcha!
var anotherQuo = new Quo("happy");
anotherQuo.get_status(); // happy
