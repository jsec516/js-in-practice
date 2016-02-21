foo(); // working

function foo(){
	console.log('woking');
}

anotherFoo(); // Uncaught TypeError: foo1 is not a function

var anotherFoo = function(){
	console.log('woking');
}

