/*========== NUMBER TO STRING =============*/
3.1416.toExponential(0);
// "3e+0"
3.1416.toExponential(2);
// "3.14e+0"

3.1416.toFixed(0);
// "3"
3.1416.toFixed(2);
// "3.14"

// precision parameter value should be 1-21
3.1416.toPrecision();
// "3.1416"
3.1416.toPrecision(2);
// "3.1"

3.1416.toString(16);
// "3.243fe5c91d14e"
var num = 16;
num.toString(16);
// "10"

// determine whether a value can be used 
// as number or not
isFinite('oops');
// false
isFinite('22');
// true