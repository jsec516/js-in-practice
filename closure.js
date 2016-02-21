var quo = function(status) {
	return {
		get_status: function(){
			return status;
		}
	};
};

var myQuo = quo('amazed');
myQuo.get_status(); // amazed

/*================= node's color changer =======================*/
var fade = function (node) {
	var level = 1;
	var step = function(){
		var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF'+hex+hex;
		if(level<15){
			level += 1;
			setTimeout(step, 100);
		}
	};
	setTimeout(step, 100);
};

fade(document.body);

/*=============== access to origin variable, not value on creation function =========*/

// BAD EXAMPLE

var add_the_handlers = function (nodes) {
	var i;
	for(i=0;i<nodes.length; i += 1){
		nodes[i].onclick = function(e){
			alert(i); // doesn't give the individual value for each node
		}
	}
}

// BETTER EXAMPLE

var add_the_handlers = function (nodes) {
	var i;
	for(i=0;i<nodes.length; i++){
		nodes[i].onclick = function(i){
			return function(e){ // bound to the value of i that was passed
				alert(e); 
			}
		}(i);
	}
}

