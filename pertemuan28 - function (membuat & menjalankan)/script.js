/**
 * 
 * Membuat Function
 *    - cara kerja : 
 *       _____________________        ______________________        ____________________
 *      |                     |      |                      |      |                    |
 *      |        input        | ---> |       function       | ---> |       output       |
 *      |_____________________|      |______________________|      |____________________|
 *      masukkan bahan/material      lakukan sesuatu terhadap      menghasilkan sesuatu.
 *      ke dalam function.           bahan/material tadi.
 * 
 *      * function yang baik adalah function yang hanya mengerjakan 1 hal saja.
 *      * blok code yang dibuat untuk melakukan tugas spesifik.
 *      * dapat dipanggil berulang kali -> memudahkan penelusuran
 *                                      -> reusability     
 * 
 *    - bentuk umum :             ______________________________________________________________________________________
 *      function nama(a,b) {     | function : keyword function untuk memberitahu interpreter                            |
 *        return ...             |            javascript bahwa kita akan mulai menulis sebuah fungsi.                   |
 *      }                        |______________________________________________________________________________________|
 *                               | nama     : beri nama funcion yang menjelaskan apa yang akan dilakukan.               |
 *                               |______________________________________________________________________________________|
 *                               | ()       : selalu dituliskan untuk menyimpan parameter/argumen/bahan baku            |
 *                               |            untuk nantinya digunakan dalam function.                                  |
 *                               |______________________________________________________________________________________|
 *                               | a,b      : data yang dikirim dari luar saat pemanggilan function untuk digunakan     |
 *                               |            dalam function.                                                           |
 *                               |______________________________________________________________________________________|
 *                               | {}       : bungkus function dengan kurung kurawal, untuk                             |
 *                               |            menandai awal dan akhir sebuah fungsi.                                    |
 *                               |______________________________________________________________________________________|
 *                               | return   : sebuah function biasanya mengembalikan sebuah nilai                       |
 *                               |            menggunakan keyword return, diikuti dengan nilai kembaliannya.            |
 *                               |            kegunaannya memberitahu interpreter bahwa kita telah selesai mengerjakan  |
 *                               |            sesuatu dan 'inilah' hasilnya. (cara memberhentikan function)             |              
 *                               |______________________________________________________________________________________|                    
 * 
 */

function jumlahVolumeDuaKubus(a,b) {
  var volumeA, 
      volumeB, 
      total;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total   = volumeA + volumeB;

  return total;
}

alert(jumlahVolumeDuaKubus(8,3));
alert(jumlahVolumeDuaKubus(10,15));