Function.prototype.method = function(name, func){
	this.prototype[name] = func;
	return this;
}

String.method('deentityify', function(){
	// The entity table. It maps entity names to characters
	var entity = {
		quot: '*',
		lt: '<',
		gt: '>'
	};

	// Return the deentityify method.
	return function(){
		return this.replace(/&([^&;]+);/g, function(a,b){
			var r = entity[b];
			return typeof r=== 'string' ? r:a;
		})
	};
}());

'&lt;&quot;&gt;'.deentityify();
// "<*>"

String.method('makeBigger', function(){
	var lekhi = 'lekhlam';
	return function(){
		console.log(lekhi);
		console.log('this: ', this);
		return this.big();
	};
}());

'fight'.reversed();
// lekhlam ---- local scope access of outer function
// this:  String {0: "f", 1: "i", 2: "g", 3: "h", 4: "t", length: 5, [[PrimitiveValue]]: "fight"}
// "<big>fight</big>"

var serial_maker = function() {
	// produce an object that produces unique strings. 
	// A unique string is made up of two parts: a prefix,
	// and a sequence numbers. The object comes with methods
	// for setting the prefix and sequence number, and a gensym
	// method that produces unique strings

	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function (p){
			prefix = String(p);
		},
		set_seq: function(s){
			seq = s;
		},
		gensym: function(){
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym(); // Q1000
var unique1 = seqer.gensym(); // Q1001
