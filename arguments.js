var sum = function(){
	var i, sum = 0;
	for(i=0; i<arguments.length; i+= 1){
		sum += arguments[i];
	}
	return sum;
}

sum(1,1,1,1); // 4