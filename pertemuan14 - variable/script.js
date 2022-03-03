/**
 * Variable 
 *  - sebuah tempat/wadah yang memiliki nama, yang digunakan untuk menyimpai nilai
 *  - proses pembuatan variable : deklarasi, inisialisasi, assignment.
 *     _________________________________________________________________________________
 *    |                           |                    |                                |
 *    |         Deklarasi         |    Inisialisasi    |           Assignment           |
 *    |___________________________|____________________|________________________________|
 *    | mendaftarkan variable ke  | menyediakan memori | menetapkan nilai yang spesifik |
 *    | dalam lingkup yang sesuai | untuk variable     | ke dalam variable              |
 *    |___________________________|____________________|________________________________|
 *    |                     var x;                     |            x = 10;             |
 *    |________________________________________________|________________________________|
 *  
 *  - deklarasi variable : var, let, dan const.
 *                       : var/let/const (spasi) nama variable.
 * 
 *  - Aturan penamaan variable: 
 *      > tidak boleh menggunakan spasi, bisa diganti dengan underscore (_) atau menggunakan format Camel Case (IniNamaVariable)
 *      > boleh menggunakan angka, tetapi tidak boleh diawal nama.
 *      > tidak boleh menggunakan kata dalam keyword & reserved word 
 *        (contoh : break, case, class, const, catch voild, switch, dll)
 * 
 *  - shorthand penulisan variable : 
 *    var nama;     ____
 *    var umur;         |
 *    var lulus;        |     var nama  = "Avdews",
 *                      |--->     umur  = 18,
 *    nama = "Avdews"   |         lulus = true;
 *    umur = 18         |
 *    lulus= true;  ____|
 * 
 *  - Variable Scope (Lingkup Variable)
 *    *next class after function and object
 */