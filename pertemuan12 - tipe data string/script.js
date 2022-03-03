/**
 * Tipe data String dalam javascript digunakan untuk merepresentasikan data tekstual (plain text).
 * yang perlu dilakukan adalah menuliskan di dalam tanda petik ("") ('')
 * contoh : 1. "Hello World!"                                
 *          2. 'Hello World'                                     gunakan escape character :
 *          3. "Hari ini adalah hari Jum'at"                      -     
 *          4. 'Pria itu membersihkan sampah" yang berserakan'        
 *                                                               
 *  _____________ ______________________
 * |  escape     |                      |   Escape Character :
 * |  character  |        hasil         |      menampilkan sebuah karakter yang diinterpretasikan berbeda
 * |_____________|______________________|      dalam sebuah bahasa pemrograman.
 * |     \0      | karakter NULL        |   
 * |     \'      | '                    |   contoh :
 * |     \"      | "                    |     soal  : setiap hari jum'at pria itu membersihkan sampah" yang berserakan
 * |     \\      | \                    |     jawab : 'setiap hari jum\'at pria itu membersihkan sampah" yang berserakan'
 * |     \n      | new line(baris baru) |
 * |     \t      | tab                  |   
 * |     \b      | backspace            |            
 * |   \uXXXX    | unicode              |---> contoh : 
 * |_____________|______________________|     \u00A9 (copyright), \u2122 (trademark)     
 * 
 * Concatenation (konkatenasi) (+)
 * "Hello World" == "hello world" (false)
 * 
 * fungsi string (.length) menghitung panjang string.
 * contoh : 
 *   x = 'hello world'   *karakter spasi juga dihitung.
 *   x.length = 11
 */