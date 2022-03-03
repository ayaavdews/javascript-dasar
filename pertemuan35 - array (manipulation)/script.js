/**
 * 
 * MANIPULASI ARRAY
 * 
 *    - yang akan dilakukan : 
 *        > menambahkan elemen pada array.  
 *        > menghapus elemen pada array.
 *        > menampilkan seluruh isi array.
 * 
 *    - Manipulasi Elemen pada array (Manual)
 *       ___________________     _____________________________________________     ____________________________________________
 *      |                   |   |                                             |   |                                            |
 *      |     Menambah      |   |                 Menampilkan                 |   |                 Mengurangi                 |
 *      |___________________|   |_____________________________________________|   |____________________________________________|
 *      | var arr=[];       |   | for(var i=0; i<arr.length; i++) {           |   | var arr=['dimas', 'budi', 'agus', 'dodi']; |
 *      | arr[0] = 'doni';  |   |    console.log('Siswa ke-'+i+' : '+arr[i]); |   | arr[1] = undefined;                        |
 *      | arr[1] = 'tio';   |   | }                                           |   |____________________________________________|
 *      | arr[2] = 'dimas'; |   |_____________________________________________|
 *      |___________________|
 * 
 *    - Method pada Array 
 *        > length  : mengetahui jumlah elemen pada array 
 *        > join    : menggabungkan seluruh isi array dan mengubahnya menjadi string.
 *        > push    : mendorong / memasukkan elemen baru diakhir array.
 *        > pop     : menghilangkan elemen terakhir di array.
 *        > unshift : menambah elemen array diawal array.
 *        > shift   : menghilangkan elemen pertama di array.
 * 
 */


var nama = ['alfian', 'ardana', 'ardive', 'aya', 'aziz'];

// 1. join()
console.log(nama);
console.log(nama.join());      // separator default (,) memisahkan antar element dalam array.
console.log(nama.join(', '));   // separator custom


/**
 * 2. push() & pop()
 *      - push() : menambah elemen array diakhir array.
 *      - pop()  : menghilangkan elemen terakhir di array.
 */ 
nama.push('bayu', 'bernandito');
console.log(nama);

nama.pop();
console.log(nama);


/**
 * 3. unshift() dan shift()
 *    
 */

nama.unshift('yudha');
console.log(nama);

nama.shift();
console.log(nama);
