/**
 * 
 * ARRAY
 * 
 *    - Definisi : 
 *        > secara umum : susunan sistematis dari objek-objek yang serupa.
 *        > programming : tipe data yang digunakan untuk mendeskripsikan
 *                        kumpulan elemen (nilai atau variabel), yang tiap-tiap
 *                        elemennya memiliki index.
 * 
 *    - Kenapa Array?
 *        > mempermudah pengelolaan nilai/value/data (dalam hal penelusuran dan pencarian)  
 *        > manajemen memori.
 *   
 *    - Karakteristik : 
 *        > variable jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama.
 *        > kumpulan pasangan key dan nilai (key and value pair)
 *        > key adalah index pada array dengan tipe integer yang dimulai dari 0.
 *        > array pada javascript bertipe object.
 *        > array pada javascript memiliki fungsi/method length untuk menghitung jumlah elemen di dalamnya.
 *        > elemen pada array boleh memiliki tipe data yang berbeda.
 * 
 *    - Key and value pair
 *       _________    ________   _________   ________   _______   _______   ______
 *      |         |  |        | |         | |        | |       | |       | |      |    // console.log(binatang[4]);
 *      |   KEY   |  |    0   | |    1    | |    2   | |   3   | |   4   | |   5  |       output : koala
 *      |_________|  |________| |_________| |________| |_______| |_______| |______|
 *      |         |  |        | |         | |        | |       | |       | |      |    // console.log(typeof(binatang));
 *      |  VALUE  |  | kucing | | kelinci | | monyet | | panda | | koala | | sapi |       output : object
 *      |_________|  |________| |_________| |________| |_______| |_______| |______|   
 *                                                                                     // console.log(binatang.length);
 *      var binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];         output : 6
 *        atau
 *      var binatang = [];
 *      binatang = ['kucing', 'kelinci', 'monyet', 'panda', 'koala', 'sapi'];
 * 
 *    - Elemen pada array boleh beda tipe
 *        > kita juga bisa menyimpan array di dalam array (array multidimensi / array bersarang).
 *        > contoh : 
 *          var myArr = ['teks', 2, false, myfunction, [4, 5, 6]];
 *          console.log(myArr[4][1]) // output : 5
 * 
 */