/**
 * 
 * OBJECT
 * 
 *    - Definisi : 
 *      > kumpulain nilai, yang memiliki nama.
 *      > pasangan key dan value
 * 
 *    - Kenapa Object?
 *       _______________________________________ _______________________________________ _____________________________________
 *      |                                       |                                       |                                     |
 *      |                native                 |                 array                 |               object                |
 *      |_______________________________________|_______________________________________|_____________________________________|
 *      | var nama  : 'Aya Avdews';             | var siswa = [                         | var siswa = {                       |
 *      |     usia  : 20;                       |   'Aya Avdews',                       |   nama   : 'Aya Avdews',            |
 *      |     lulus : true;                     |   20,                                 |   lulus  : true,                    |
 *      |     nilai : [85,90,93,82,86,91];      |   [85,90,93,82,86,91]                 |   nilai  : [85,90,93,82,86,91],     |   
 *      | function median(nilai) {              | ];                                    |   median : function() {             |
 *      |   var total = 0;                      | function median(nilai) {              |     var total = 0;                  |
 *      |   for(var i=0; i<nilai.length; i++) { |   var total = 0;                      |     var n     = this.nilai;         |
 *      |     total += nilai[i];                |   for(var i=0; i<nilai.length; i++) { |     for(var i=0; i<n.length; i++) { |
 *      |   }                                   |     total += nilai[i];                |       total += nilai[i];            |
 *      |   return total/nilai.length;          |   }                                   |     }                               |
 *      | }                                     |   return total/nilai.length;          |     return total/n.length;          |
 *      |                                       | }                                     |   }                                 |
 *      |                                       | median(siswa[2]);                     | }                                   | 
 *      |                                       |                                       | siswa.median()                      |
 *      |_______________________________________|_______________________________________|_____________________________________|
 * 
 *    - Anatomi Object : 
 *      var siswa = {                     _______
 *         nama   : 'Aya Avdews',                |
 *         lulus  : true,                        |---> PROPERTY
 *         nilai  : [85,90,93,82,86,91],  _______|
 *         median : function() {          _______
 *            var total = 0;                     |
 *            var n     = this.nilai;            |
 *            for(var i=0; i<n.length; i++) {    |---> METHOD
 *                total += nilai[i];             |
 *            }                                  |
 *            return total/n.length;      _______|
 *         }
 *      }
 * 
 *    -
 * 
 */

var mhs = {
  nama   : 'aya',
  umur   : 20,
  nilai  : [80,82,90,87,88,91],
  alamat : {
    kota: 'pacitan',
    provinsi : 'jawa timur'
  }
};
// mhs.nama = 'Aya' // menambahkan properti baru ke object.
console.log(mhs.nama); // console.log(mhs[nama]); 
console.log(mhs.alamat.kota);
console.log(mhs['nilai'][5]);
