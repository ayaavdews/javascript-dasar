/**
 * 
 *  Function Declaration vs Function Expression
 *  
 *    - Cara penulisan formal : 
 *       _________________________________________________________________________
 *      | function Declaration :                                                  |
 *      | function identifier (parameterList *optional) {functionBody}            |
 *      |_________________________________________________________________________|
 *      | function Expression  :                                                  |
 *      | function identifier *optional (parameterList *optional) {functionBody}  |
 *      |_________________________________________________________________________|   
 * 
 *    - Contoh : 
 *       _______________________________ _____________________________________________
 *      |                               |                                             |
 *      |      Function Declaration     |             Function Expression             |
 *      |_______________________________|_____________________________________________|
 *      |                               |                                             |
 *      | function tampilPesan(nama) {  | var tampilPesan = function(nama) {          |
 *      |   alert('halo ' + nama);      |                     alert('halo ' + nama);  |
 *      | }                             |                   }                         |
 *      |_______________________________|_____________________________________________|
 * 
 *    - Perbedaan 
 *       ___ __________________________________________ _____________________________________________________
 *      |   |                                          |                                                     | 
 *      |   |           Function Declaration           |             Function Expression                     |
 *      |___|__________________________________________|_____________________________________________________|
 *      |   |                                          |                                                     |
 *      | 1 | lebih flexibel (dapat ditulis dimanapun) | harus didefinisikan dahulu sebelum dipanggil.       |
 *      |   | karena konsep hoisting.(dimana deklarasi |                                                     |
 *      |   | sebuah function disimpan terlebih dahulu |                                                     |
 *      |   | di dalam memori)                         |                                                     |   
 *      | 2 | Mudah dipahami pemula                    | lebih powerfull :                                   |
 *      |   |                                          |   - sebagai closure                                 |
 *      |   |                                          |   - sebagai argumen untuk function lain.            |
 *      |   |                                          |   - IIFE (Immediately Invoked Function Expression)  | 
 *      |___|__________________________________________|_____________________________________________________|
 * 
 */