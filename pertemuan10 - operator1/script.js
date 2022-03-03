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
 * Operator Aritmatika
 * terdiri atas +, -, *, dan / serta % di beberapa bahasa pemrograman. 
 * Operator precedence : urutan operasi matematika.
 *                     : urutannya kurung(), kali*, bagi/, tambah+, kurang-.
 * 
 * 
 * Operator Penugasan (assignment)
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
 * Operator Perbandingan (comparison)
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
 */