var jmlAngkot = 10;
var noAngkot = 1;

while(noAngkot <= jmlAngkot) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  noAngkot++;
}

/**
 * 
 * Tabel Penelusuran (trace table / cry-run test)
 * 
 *    - tulis variable apa saja yang kemungkinan isinya berubah 
 *      setiap loop-nya, dan tulis kondisi terminasinya juga.
 * 
 *    - variable : noAngkot
 *      kondisi  : noAngkot <= jmlAngkot?
 * 
 *    - Tabel :
 *       __________ ________________________ _______________________________________
 *      |          |                        |                                       |
 *      | noAngkot | noAngkot <= jmlAngkot? |                output                 |
 *      |__________|________________________|_______________________________________|
 *      |    1     |          TRUE          | Angkot No. 1 beroperasi dengan baik.  |
 *      |    2     |          TRUE          | Angkot No. 2 beroperasi dengan baik.  |
 *      |    2     |          TRUE          | Angkot No. 3 beroperasi dengan baik.  |
 *      |   ....   |         ......         |               ........                |
 *      |    10    |          FALSE         | Angkot No. 10 beroperasi dengan baik. |
 *      |    11    |          FALSE         |           KELUAR DARI LOOP            |
 *      |__________|________________________|_______________________________________|
 *   
 */