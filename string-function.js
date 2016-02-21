var name='curly';
name.charAt(0);
// "c"

name.charCodeAt(0);
// 99

var s = 'C'.concat('a','t');
// "Cat"

var s = 'C'.concat(['a','t']);
// "Ca,t"

var name='curly';
name.indexOf('ly');
// 3

var name = 'cccc';
name.lastIndexOf('c');
// 3

var text = '<html><body bgcolor=linen><p>This is <b>bold</b>!</p></body></html>';
var tags = /[^<>]+/g;
text.match(tags);
// ["html", "body bgcolor=linen", "p", "This is ", "b", "bold", "/b", "!", "/p", "/body", "/html"]
var tags = /[^<>]+/;
text.match(tags);
// ["html"]

var result = 'mother_in_law'.replace('_','-');
// mother-in_law
var result = 'mother_in_law'.replace(/_/g,'-');
// mother-in-law

// take regex instead of string as subject (indexOf difference)
var result = 'mother_in_law'.search(/_/g);
// 6

var text = 'and in it he says "Any damn fool could';
var a = text.slice(18);
// ""Any damn fool could"
var b = text.slice(0,3);
// "and"
var c = text.slice(-5); // starts at -5 + text.length, rest character of string
// "could"
var d = text.slice(19, 32); // to select n (13) character, start(19), end (19+13 = 32)
// "Any damn fool"

var ip = '127.0.0.1';
ip.split('.');
// ["127", "0", "0", "1"]
ip.split('.', 2);
// ["127", "0"]

var text = 'and';
text.toUpperCase()
// "AND"
text.toLowerCase();
// "and"
var a = String.fromCharCode(67,97,116);
// "Cat"
