/**
 * 
 * REKURSIF
 * 
 *    - sebuah fungsi yang memanggil dirinya sendiri.
 *    - harus berakhir dan menghasilkan nilai.
 *    - contoh : 
 *       ____________________ ______________________________
 *      |                    |                              | output : Maximum call stack size exceeded.
 *      |  function tes() {  |  function tampilAngka(n) {   |
 *      |    return tes();   |    console.log(n);           |
 *      |  }                 |    return tampilAngka(n-1);  |
 *      |  tes();            |  }                           |
 *      |                    |  tampilAngka(10);            |
 *      |____________________|______________________________|
 * 
 * 
 *    - Base Case : kondisi akhir dari rekursif yang menghasilkan nilai.
 *    - contoh :
 *      function cetakAngka(n) {              output : 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
 *        if(n === 0) { ____
 *          return;         |---> base case
 *        }             ____|
 *        console.log(n);
 *        cetakAngka(n-1);
 *      }
 *      cetakAngka(10);
 * 
 * 
 *    - contoh lain digunakan dalam faktorial : 
 *      function faktorial(n) {       mekanisme :   faktorial(5)
 *        if(n === 0) return 1;                     5 * faktorial(4)
 *        return n * faktorial(n-1);                5 * (4 * faktorial(3))
 *      }                                           5 * (4 * (3 * faktorial(2)))
 *                                                  5 * (4 * (3 * (2 * faktorial(1))))
 *                                                  5 * (4 * (3 * (2 * 1)))
 *                                                  5 * (4 * (3 * 2))
 *                                                  5 * (4 * 6)
 *                                                  5 * 24
 *                                                  120 
 * 
 * 
 *    - semua looping bisa dibuat rekursif, tapi tidak sebaliknya.
 *       _______________________________ _______________________________
 *      |                               |                               |
 *      |            LOOPING            |            REKURSIF           |
 *      |_______________________________|_______________________________|
 *      |                               |                               |
 *      | function cetakAngka(n) {      | function cetakAngka(n) {      |
 *      |   for(var i=n; i>=1; i++) {   |   if(n === 0) return;         |
 *      |     console.log(i);           |   console.log(n);             |
 *      |   }                           |   cetakAngka(n-1);            |
 *      | }                             | }                             |
 *      |_______________________________|_______________________________|
 *      |                               |                               |
 *      | function faktorial(n) {       | function faktorial(n) {       |
 *      |   var hasil = 1;              |   if(n === 0) return 1;       |
 *      |   for(var i=n; i>0; i--) {    |   return n *= faktorial(n-1)  |
 *      |     hasil *= i;               | }                             |
 *      |   }                           |                               |
 *      |   return hasil;               |                               |
 *      | }                             |                               |
 *      |_______________________________|_______________________________|
 * 
 * 
 *    - Implementasi Rekursif : 
 *      - menggantikan looping.
 *      - Fibonacci.
 *      - pencarian dan penelusuran pada struktur data list dan tree.
 *      - bahasa pemrograman yang tidak memiliki pengulangan (contoh : Haskell, Erlang, Prolog, dll.)
 *      - dan lain-lain.
 * 
 */