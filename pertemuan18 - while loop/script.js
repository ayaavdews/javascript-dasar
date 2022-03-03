/**
 * WHILE
 *    - while (condition) {       * selama kondisi bernilai true 
 *        action;                   aksi dalam blok {} akan terus dilakukan.
 *      }
 * 
 *    - nilai awal 
 *      while(kondisi terminasi) {
 *        aksi
 *        increment/decrement
 *      }
 * 
 *    - Infinite Loop
 *      bisa dihentikan dengan 2 cara : 
 *          1. dihentikan berdasarkan aksi dari user.
 *          2. dihentikan oleh program.
 *        
 *    - Contoh : 
 *      1. var ulang = true;                      2. var nilaiAwal = 1;
 *         while(ulang) {                            while(nilaiAwal <= 5) {
 *            console.log('hello world!');              console.log('hello world');
 *            ulang = confirm('ulang lagi?');           nilaiAwal++;
 *          }                                        }
 * 
 */

// var i = 1;
// while(i <= 10) {
//   console.log('hello world ' + i + 'x');
//   i++;
// }