var a = ['a','b','c'];
var b=['x','y', 'z'];

/*========== PUSH, POP, SHIFT, UNSHIFT AND FLATTEN ARRAY ===========*/
// Array doesn't have any name
// That's why there is no way to return back the array element
var item = [].push(a,b,true); // item = 3; 

var item =  [];
item.push(a,b,true); // mutate array
// [['a','b', 'c'], ['x', 'y', 'z'], true]

// flatten array
var merged = [].concat.apply([], item);
// ["a", "b", "c", "x", "y", "z", true]

var pop = a.pop(); // mutate array
// a = ['a', 'b'], pop = 'c'
var shift = a.shift(); // mutate array
// a = ['b'], shift = 'a'

var unshift = a.unshift('a'); // mutate array - return array length
// ["a", "b"]


/*========== JOIN AND CONCAT =============*/

// flatten automatically
var c = a.concat(b, true); // creates new array
// ["a", "b", "c", "x", "y", "z", true]

var c = a.join('*');
// "a*b*c"

var d = [1,2,3];
var sum = d.join('+');
// "1+2+3"
eval(sum);
// 6

/*========== REVERSE, SLICE =============*/
var a = ['a', 'b'];

a.reverse(); // mutate array
// ["b", "a"]

var a = ['a','b','c'];
var b = a.slice(0,1); // doesn't alter original array
// a=['a','b','c'] b=["a"]

/*========== SORT ====================*/
var fruits = ['apple','orange', 'meat', 'monaco'];
fruits.sort();
// ["apple", "meat", "monaco", "orange"]

var nums = [44, '44', 55, 20, 1, 11, 100];
nums.sort();
// [1, 100, 11, 20, 44, "44", 55]

// for number we've to give custom func as parameter
// 0 = if two are equal, negative if first should come first
// positive if second should come first

/*========== SPLICE ====================*/
var a = ['a', 'b', 'c'];
var r = a.splice(1,1,'ace','bug');
// a = ["a", "ace", "bug", "c"]
// r = ["b"]

// to determine array
var a = ['a', 'b', 'c'];
if(a && typeof a==='object' && typeof a.length === 'number' && !(a.propertyIsEnumerable('length'))){
	// true
}