/**
 * Operator dalam javascript adalah sebuah simbol yang digunakan untuk melakukan operasi.
 * Jenis operator :
 *  a. aritmatika   __
 *  b. penugasan      |
 *  c. perbandingan   |--> binary
 *  d. logika         |
 *  e. string       __|
 *  f. kondisional  -----> ternary
 *  g. typeof       -----> unary  
 * 
 * 
 * Unary   membutuhkan 1 operand : operand operator atau operator operand.
 * Binary  membutuhkan 2 operand : operand1 operator operand2.
 * Ternary membutuhkan 3 operand : *part2
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator Aritmatika                                                                         -
 * -----------------------------------------------------------------------------------------------
 * terdiri atas +, -, *, dan / serta % di beberapa bahasa pemrograman. 
 * Operator precedence : urutan operasi matematika.
 *                     : urutannya kurung(), kali*, bagi/, tambah+, kurang-.
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator Penugasan (assignment)                                                             -
 * -----------------------------------------------------------------------------------------------
 * yang paling sering digunakan adalah tanda (=) selain itu ada juga +=, -=, *= /=, dan %=
 *  ______________________________________
 * |  operator penugasan  |  sama dengan  |
 * |______________________|_______________|
 * |        x += y        |   x = x + y   |
 * |        x -= y        |   x = x - y   |
 * |        x *= y        |   x = x * y   |
 * |        x /= y        |   x = x / y   |
 * |        x %= y        |   x = x % y   |
 * |______________________|_______________|
 * contoh : x = 10
 *          x += 5 = 15
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator Perbandingan (comparison)                                                          -
 * -----------------------------------------------------------------------------------------------
 * membandingkan dua buah operand.
 *  ______________ ___________________________
 * | operator     |                           |  * menghasilkan boolean (true false)
 * | perbandingan | keterangan                |  * contoh :  
 * |______________|___________________________|    - 10 == 10 (true)
 * |   ==         | sama dengan               |    - 10 == 15 (false)
 * |   !=         | tidak sama dengan         |    - 10 != 10 (false)
 * |   ===        | strict sama dengan        |    - 10 != 15 (true)
 * |   !===       | strict tidak sama dengan  |
 * |   >          | lebih besar dari          |    - 10 == "10" (true)
 * |   <          | lebih kecil dari          |    - 10 === "10" (false)
 * |   >=         | lebih besar sama dengan   |
 * |   <=         | lebih kecil sama dengan   |
 * |______________|___________________________|
 * 
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator Logika (logical)                                                                   -
 * -----------------------------------------------------------------------------------------------
 *  ____________ ______________      _______________________      _______________________      ____________________________
 * |  operator  |              |    |        AND (&&)       |    |        OR (||)        |    |           NOT (!)          |
 * |  logika    |  keterangan  |    |_______________________|    |_______________________|    |____________________________|
 * |____________|______________|    | FALSE | FALSE | FALSE |    | FALSE | FALSE | FALSE |    |  membalikan hasil boolean  |
 * |    &&      |      AND     |    | FALSE | TRUE  | FALSE |    | FALSE | TRUE  | TRUE  |    |____________________________|
 * |    ||      |      OR      |    | TRUE  | FALSE | FALSE |    | TRUE  | FALSE | TRUE  |
 * |    !       |      NOT     |    | TRUE  | TRUE  | TRUE  |    | TRUE  | TRUE  | TRUE  |
 * |____________|______________|    |_______|_______|_______|    |_______|_______|_______|
 *                                 
 * contoh :
 * - AND (&&)                        - OR (||)                     - NOT (!)
 *   x = 12                            x = 12                        x = 10
 *   (x % 2 == 0) && (x < 10)          (x % 2 == 0) && (x < 10)      !(x < 20)
 *   false                             true                          false
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator String                                                                             -
 * -----------------------------------------------------------------------------------------------
 * dibuat dengan menggunakan tanda (+)
 * jika operand-nya string maka akan menjadi operator string, jika operand-nya number akan menjadi operator aritmatika.
 * contoh :  
 *  1. a = "hello"; b = "world";   2. 10 + "10"   3. 10 + "10"   4. 10 + 10 + "10"    5. "10" + 10 + 10
 *     a+""+b = hello world.          "1010"         "1010"         "2010"               "101010"
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator TypeOf                                                                             -
 * -----------------------------------------------------------------------------------------------
 * mengetahui tipe data dari nilai yang dimasukkan kedalamnya, dengan cara typeof(operand).
 * contoh :
 *  - typeof(10)   - typeof("10")   - typeof(true)
 *    number         string           boolean
 * 
 * 
 * -----------------------------------------------------------------------------------------------
 * - Operator Kondisional                                                                        -
 * -----------------------------------------------------------------------------------------------
 *   * termasuk jenis ternary (membutuhkan tiga operand)
 *   * digunakan untuk melakukan pengecekan pada sebuah kondisi, dan menentukan nilai yang dihasilkan ketika pengisinya bernilai true/false
 *     (condition) ? true : false
 * 
 * contoh :
 * (x % 2 == 0) ? "genap" : "ganjil"
 */