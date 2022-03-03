var jmlAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;

for(noAngkot; noAngkot<=jmlAngkot; noAngkot++) {
  if(noAngkot>angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  }
}