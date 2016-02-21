function mega(){
	var b = 99;
	var that = this;
	function tega(){
		console.log('calling for b: ',that.b); 
	}
	tega();
}

// b will be undefined because it's search b in global scope
mega(); // calling for b:  undefined

myObject = {
	value: 0,
	double: function(){
		console.log('double() this is ', this); // `this` = myObj
		var helper = function(){
			// `this` should bound to myObject
			// but interesting `this` bound to global
			console.log('helper() this is ', this); // `this` = global object (window)
			// this.value = this.value + this.value;
		}
		helper();
	}
}

// double() `this` is `myObj`
// helper() `this` is `window`
myObject.double();
childObj = Object.create(myObject);

// double() `this` is `childObj`
// helper() `this` is `window`
childObj.double();

/*================= workaround (es6) ===================*/
myObject = {
	value: 0,
	double: function(){
		console.log('double() this is ', this); // `this` = myObj
		var helper = ()=>{
			// `this` now bound to myObject
			console.log('helper() this is ', that); // `this` = myObj
			// this.value = this.value + this.value;
		}
		helper();
	}
}


/*================= workaround (es5) ===================*/
myObject = {
	value: 0,
	double: function(){
		console.log('double() this is ', this); // `this` = myObj
		var that = this;
		var helper = function(){
			// `this` should bound to myObject
			// but interesting `this` bound to global
			console.log('helper() this is ', that); // `this` = myObj
			// this.value = this.value + this.value;
		}
		helper();
	}
}