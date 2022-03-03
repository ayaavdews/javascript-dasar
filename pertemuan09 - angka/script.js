/**
 * Number in javascript are double-precision floating number 64-bit format IEEE 754 values.
 * intinya, dalam javascript tidak ada integer (bilangan bulat) yang ada hanya floating-point (bilangan) pecahan
 * 
 * Angka yang dapat disimpan dalam javascript :
 * 1. Integer (Angka tanpa desimal)
 *      contoh : 10, 1500, 123456
 *      * akurat sampai 15 digit. -> jika menulis pada console : 
 *                                   - 999999999999999   | output : 999999999999999
 *                                   - 9999999999999999  | output : 1000000000000000
 * 
 * 2. Pecahan (Angka dengan desimal)
 *      contoh : 3.14, 0.5, 100.00
 * 
 *      * maksimal bisa menyimpan 17 digit dibelakang koma.
 * 
 * 3. Eksponen
 *      contoh : 123e5 // 12300000, 123e-5 // 0.00123
 * 
 * 4. Bilangan Negatif
 *      contoh : -10, -100, -1000
 * 
 * pembagian number 64 bit : 
 *    *  1 bit : (sign) digunakan sebagai penanda jika bilangannya negatif.
 *    * 11 bit : (eksponent) digunakan untuk eksponen.
 *    * 52 bit : (fraction) digunakan untuk angka sebenarnya, termasuk untuk menyimpan titik untuk pecahan.
 * 
 * jangan pernah mengawali number/angka javascript dengan : 
 *    * angka 0, karena hasilnya terkadang tidak sesuai dengan harapan.
 *      contoh : ketika menulis 022, maka akan dianggap sebagai bilangan oktal dan akan diterjemahkan menjadi 18.
 *    * angka 0x, karena akan diangap sebagai hexadesimal.
 *      contoh : 0xFF = 255
 * 
 * Angka Special di JavaScript : 
 *    a. Infinity           
 *       contohnya : 2/0
 *    b. -Infinity          
 *       contohnya : -2/0
 *    c. NaN (Not a Number) 
 *       contohnya : 0/0, 100/"apel"
 * 
 *    * jika membagi number dengan string yang didalamnya terdapat angka, maka javascript akan menganggapnya sebagai angka.
 *       contoh : 100/"10" = 10
 * 
 */