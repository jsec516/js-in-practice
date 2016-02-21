var myObj = {
	value: 0,
	increment: function(inc){
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObj.increment();
myObj.value; // 1

var dObj = Object.create(myObj);
dObj.value; // 1

dObj.value=5;
dObj.increment(); 
dObj.value; // 6

myObj.value; // 1

