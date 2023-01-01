let s = "abc"
console.log(typeof s)

let p = "run"
let q = Number(p)
console.log(typeof q); 
// run is string value chenge to Number value _ its data type

let r = true
console.log(r)
let o = Number(r);
console.log(typeof o);
console.log(o);


let j = 0
let k = Boolean(j);
console.log(typeof k);
console.log(k);

let ab = "12abc"
let bc = Boolean(ab);
console.log(typeof bc);

let abc = null
console.log(abc);
console.log(typeof abc);
let bcd = Number(abc);
console.log(bcd);

let xy = undefined
console.log(xy);
console.log(typeof xy);
let yz = Number(xy);
console.log(yz);
let yy = Boolean(xy);
console.log(yy);
let xx = String(xy);
console.log(xx);

// "12" = > 12
// "12abc" = > NaN (not a Number)
// true = > 1  (if datatype is Number)
// false = > 0
// 1 = > true (if datatype is Boolean)
// 0 = > false  (only one value is false that is 0)
// "pallavi" = > true