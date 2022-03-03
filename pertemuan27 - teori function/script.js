/**
 * 
 * FUNCTION
 * 
 * Definisi : 
 *    - function adalah kunci utama pada javascript, yang membuat javascript sangat powerfull.
 * 
 *    - sebuah sub-program / sub-routine yang dapat dipanggil di bagian lain pada program.
 *    - merupakan struktur dasar dari pembentuk javascript.
 *    - disebut juga prosedur (kumpulan statement untuk melakukan tugas atau menghitung sebuah nilai)
 *    - untuk dapat menggunakannya, kita harus membuat terlebih dahulu function tersebut, lalu memanggilnya.
 * 
 *    - function termasuk dalam First-Class Object. 
 * 
 * 
 * Kenapa Function?
 *    - Reusability (DRY : Do Not Repeat Yourself)
 *    - Dekomposisi / Abstraksi
 *    - Modularitas
 * 
 * 
 * Kategori Function : 
 * berdasarkan pembuatannya 
 *    1. Built-in Function
 *       - fungsi yang sudah disediakan/dibuat oleh javascript.
 *       - kita tinggal menggunakan/memanggilnya saja.
 *       - contoh : alert(), confirm(), prompt(), dll.
 * 
 *    2. User-Defined Function
 *       - dibuat oeh user sendiri.
 *       - menggunakan keyword function
 *       - nama function (opsional)
 *       - parameter / argumen
 *            - disimpan dalam ()
 *            - boleh ada atau tidak, jika ada boleh lebih dari satu.
 *            - dipisahkan oleh koma.
 *       - function body, dibungkus dengan {}
 *       - dapat mengembalikan nilai (return value) atau tidak
 * 
 * 
 * Membuat user-defined function
 *  ________________________________ _______________________________________
 * |                                |                                       |
 * |           Deklarasi            |               Ekspresi                |
 * |     (function declaration)     |         (function expression)         |
 * |________________________________|_______________________________________|
 * | function jumlahBilangan(a,b) { | var jumlah bilangan = function(a,b) { |
 * |    var total;                  |     var total;                        |
 * |    total = a + b;              |     total = a + b;                    |
 * |                                |                                       |
 * |    return total;               |     return total;                     |
 * | }                              | }                                     |
 * |________________________________|_______________________________________|
 * 
 * 
 * Memanggil / menjalankan function : 
 * cukup panggil nama function diikuti kurung buka dan kurung tutup.
 * 
 */