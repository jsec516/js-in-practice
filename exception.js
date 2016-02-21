var add = function(a, b) {
	if(typeof a !== 'number' || typeof b !== 'number'){
		throw{
			name: 'TypeError',
			message: 'add needs numbers'
		};
	}
	return a + b;
};

var try_it = function() {
	try{
		add('seven');
	} catch(e){
		console.log(e.name + ': '+e.message);
	}
};

try_it(); // TypeError: add needs numbers

/*============================ more advanced =============================*/
var try_it = function() {
	try{
		add('seven');
	} catch (e) {
		if (e instanceof TypeError) {
	        // statements to handle TypeError exceptions
	        console.log('TypeError occurs');
	    } else if (e instanceof RangeError) {
	        // statements to handle RangeError exceptions
	    } else if (e instanceof EvalError) {
	        // statements to handle EvalError exceptions
	    } else {
	       // statements to handle any unspecified exceptions
	       console.log('not sure what occurs');
	   }
	}
	finally {
		console.log('finally block');
	}
};

// not sure what occurs
// finally block
try_it();

/*====================== catch actually work =======================*/
var add = function(a, b) {
	if(typeof a !== 'number' || typeof b !== 'number'){
		throw new TypeError("oops");
	}
	return a + b;
};

// TypeError occurs
// finally block
try_it();