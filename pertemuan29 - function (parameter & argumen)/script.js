/**
 * 
 * FUNCTION
 * 
 *    - parameter : variable yang ditulis di dalam kurung pada saat function
 *                  dibuat. digunakan untuk menampung nilai yang dikirimkan 
 *                  saat function dipanggil.
 *    - argument  : nilai yang dikirimkan ke parameter saat fungsi dipanggil.
 *    - contoh    :
 *       ___________________________ ____________________________
 *      |                           |                            |
 *      |  (a,b) sebagai parameter  |   (a,b) sebagai argument   |
 *      |___________________________|____________________________|
 *      |                           |                            |
 *      |  function tambah(a,b) {   |  var coba = tambah(5,10);  |
 *      |    return a + b;          |                            |
 *      |  }                        |                            |
 *      |___________________________|____________________________|
 * 
 *    - Bagaimana jika parameter dan argument-nya tidak sesuai?
 *      1. jika parameter lebih sedikit dari argument, maka argument kelebihannya akan diabaikan.
 *      2. jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined.
 * 
 *    - Khusus di dalam javascript, terdapat sebuah variable khusus yang namanya arguments,
 *      yang definisinya adalah array yang berisi nilai yang dikirimkan saat fungsi dipanggil. (sudo variable)  
 *      contoh : 
 *                                            _____
 *      1. function tambah() {                        |      output : 
 *           return arguments;                        |      Arguments(5)
 *         }                                          |--->    0: 5
 *         var coba = tambah(5,10,20,'hi', false);    |        1: 10
 *         console.log(coba);                    _____|        2: 20
 *                                                          3: "hi"
 *                                                          4: false
 *    - a
 *      2. function tambah() {
 *            var hasil = 0;
 *            for(var i=0; i<arguments.length; i++) {
 *              hasil += arguments[i];
 *            }
 *            return hasil;
 *         }
 *         console.log(tambah(1,2,3,4,5)); // output 15.
 *    -
 * 
 */