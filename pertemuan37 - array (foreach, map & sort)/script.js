/**
 * 
 * ARRAY (FOREACH, MAP & SORT)
 * 
 */

// foreach
var angka = [1,2,3,4,5,6,7,8];  // var cetak = function(e) {
angka.forEach(function(e) {     //                console.log(e);
  console.log(e);               //             }
});                             // angka.forEach(cetak);

var nama = ['tom', 'christ', 'william']; 
nama.forEach(function(e, i) {
  console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
});


// map
// kelebihannya mengembalikan nilai array
var numbers  = [10,20,30,40,50,60,70,80];
var numbers2 = numbers.map(function(e) {
  return e*2;
});
console.log(numbers2.join('-'));


// sort
// mengurutkan isi array
// a-b = ascending (naik)
// b-a = descending (turun)
var shortNumber = [9,5,7,1,3];
shortNumber.sort();
console.log(shortNumber.join('-'));

var shortNumber2 = [9,5,15,11,13,7,1,3];
shortNumber2.sort(function(a,b) {
  return a-b;
});
console.log(shortNumber2.join('-'));


