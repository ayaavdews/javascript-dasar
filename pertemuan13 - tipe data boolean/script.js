/**
 * Boolean
 *  - sebuah tipe data yang digunakan untuk merepresentasikan logika true atau false.
 *  - pertama kali diciptakan oleh George Boole pada tahun 1954.
 *  - biasanya digunakan pada statement pengkondisian, untuk menentukan aksi yang berbeda
 *    dan mengatur alur kendali program.
 * 
 *  - fungsi Boolean(nilai)
 *    contoh : 1. Boolean(10<15) true
 *             2. Boolean(10)    true
 *             3. Boolean(0)     false
 *             4. Boolean(-1)    true
 * 
 *  - nilai-nilai yang ada pada javascript sebenarnya menyimpan nilai true atau false didalamnya.
 *    ini disebut dengan truthy atau falsy.
 *     __________________ _______________
 *    |                  |               |
 *    |      truthy      |     falsy     |
 *    |__________________|_______________|
 *    |  true            |  false        |
 *    |  non-zero number |  0            | 
 *    |  "string"        |  ""           |
 *    |  object          |  undefined    |---> tipe yang dihasilkan ketika mendeklarasikan variable tapi belum ada nilainya.
 *    |  arrays          |  null         |---> nilai kosong yang dapat diberikan pada sebuah variable.
 *    |  functions       |  NaN          |
 *    |__________________|_______________|
 *            
 */