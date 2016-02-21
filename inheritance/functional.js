var mammal = function(spec) {
	var that = {};

	that.get_name = function() {
		return spec.name;
	}

	that.says = function () {
		return spec.saying || '';
	}

	return that;
}

var cat = function(spec){
	spec.saying = spec.saying || 'meow';
	var that = mammal(spec);
	that.purr = function(n){
		return 'purr..';
	};

	that.get_name = function() {
		return that.says() + ' '+spec.name+' '+that.says();
	}

	return that;
}

var myCat = cat({name: 'Henrietta'});

