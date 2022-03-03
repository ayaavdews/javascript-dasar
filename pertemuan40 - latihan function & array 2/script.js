/**
 *  
 * Ilustrasi :                                         
 *     ____        ____ ____ ____ ____ ____ ____ ____
 *    |    |  ||  |    |    |    |    |    |    |    |    * 00    : supir
 *    | 00 |  ||  | 01 | 02 | 03 | 04 | 05 | 06 | 07 |      01-15 : penumpang
 *    |____|  ||  |____|____|____|____|____|____|____|                                            
 *     ____   ||                                           
 *    | 13 |  ||   ____      ____ ____ ____ ____ ____
 *    |____|  ||  |    |    |    |    |    |    |    | 
 *    | 14 |  ||  | 15 |    | 08 | 09 | 10 | 11 | 12 |
 *    |____|  ||  |____|    |____|____|____|____|____|
 * 
 * 
 * Fungsionalitas :   
 *    1. penumpang naik
 *       tambahPenumpang(namaPenumpang, arrayPenumpang)
 * 
 *    2. penumpang turun
 *       hapusPenumpang(namaPenumpang, arrayPenumpang)
 * 
 * 
 * Rules : 
 *  1. Tambah Penumpang : 
 *    - jika angkot kosong, penumpang naik duduk di kursi pertama.
 *    - penumpang berikutnya duduk di kursi selanjutnya secara berurutan.
 *    - jika ada kursi kosong (karena penumpang turun), 
 *      penumpang yang naik berikutnya duduk di kursi kosong terlebih dahulu.
 *    - asumsi kursi tidak akan penuh dan akan bertambah terus jika ada penumpang naik.
 *    - nama penumpang tidak boleh sama, untuk menghindari kebingungan ketika nanti penumpang turun
 * 
 *  2. Hapus Penumpang
 *    - jika angkot kosong, tampilkan pesan bahwa angkot kosong.
 *    - jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined.
 *    - jika tidak ada penumpang yang namanya sesuai, tampikan pesan kesalahannya.
 * 
 * PseudoCode : 
 *    - jika angkot kosong
 *        - tambah penumpang di awal array
 *        - kembalikan isi array & keluar dari function
 *    - else
 *        - telusuri seluruh kursi dari awal
 *            - jika ada kursi kosong
 *                - tambah penumpang di kursi tersebut
 *                - kembalikan isi array & keluar dari function
 *            - jika sudah ada nama yang sama
 *                - tampilkan pesan kesalahannya
 *                - kembalikan isi array dan keluar dari function
 *            - jika seluruh kursi terisi
 *                - tambah penumpang di akhir array
 *                - kembalikan isi array & keluar dari function
 * 
 */

var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {
  if(penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang)
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for(var i=0; i<penumpang.length; i++) {
      // jika ada kursi yang kosong
      if(penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }

      // jika sudah ada nama yang sama
      else if(penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahan
        console.log(namaPenumpang + ' sudah ada di dalam angkot.');
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
      
      // jika seluruh kursi terisi
      else if(i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang)
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
  // jika angkot kosong 
  if(penumpang.length == 0) {
    // tampilkan pesan bahwa angkot kosong, dan
    // tidak mungkin ada penumpang turun.
    console.log('Angkot masih kosong.');
    // kembalikan isi array & keluar dari function
    // return penumpang;
  } else {
    for(var i=0; i<penumpang.length; i++) {
      if(penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined; 
        return penumpang;
      } 
      
      else if(i == penumpang.length - 1) {
        console.log(namaPenumpang + ' tidak ada di dalam angkot.');
        return penumpang;
      }
    }
  }
  
  return penumpang;
} 
