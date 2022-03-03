/**
 * 
 * MANIPULASI ARRAY
 * 
 *    - Method pada Array 
 *        > length  : mengetahui jumlah elemen pada array 
 *        > join    : menggabungkan seluruh isi array dan mengubahnya menjadi string.
 *        > push    : mendorong / memasukkan elemen baru diakhir array.
 *        > pop     : menghilangkan elemen terakhir di array.
 *        > unshift : menambah elemen array diawal array.
 *        > shift   : menghilangkan elemen pertama di array.
 *        
 *        > slice   : mengiris sebuah array menjadi array baru.
 *        > splice  : menyisipkan elemen di tengah-tengah array.
 * 
 * 
 */


var nama = ['alfian', 'ardana', 'ardive', 'aya', 'aziz'];
console.log(nama.join());

// splice
// bentuk umum : splice(indexAwal, mauDihapusBerapa*optional, elemenBaru1, elementBaru2, ...)
nama.splice(3, 0, 'catur');
console.log(nama.join()); // output : alfian, ardana, ardive, catur, aya, aziz

nama.splice(1, 2, 'budi');
console.log(nama.join()); // alfian,budi,catur,aya,aziz


/**
 * SLICE
 * 
 * bentuk umum : slice(awal, akhir)
 * slice menghasilkan array baru
 * indeks awal akan terbawa ke array baru tetapi indeks akhir tidak.
 */
var nama2 = nama.slice(2,5)
console.log(nama2.join());
