/**
 * 
 * FILTER & FIND
 * 
 * find   : mengembalikan satu nilai. 
 * filter : mengembalikan banyak nilai.
 *        : mencari nilai pada array dan mengembalikannya dalam bentuk array.
 * 
 */


// FILTER
var angka1 = [1,3,5,7,9,11,13,15,17,19];
var angka2 = angka1.filter(function(e) {
  // return e == 5;
  // return e == 2;   output : [] *array kosong.
  return e>13;     // output : [15,17,19];
})
console.log(angka2)


// FIND
var angka3 = [1,3,5,7,9,11,13,15,17,19];
var angka4 = angka3.find(function(e) {
  return e > 5;
  // return e == 2;   output : [] *array kosong.
  // return e>13;     output : [15,17,19];
})
console.log(angka4)

// link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array