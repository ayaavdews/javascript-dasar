var jmlAngkot = 10;
var angkotBeroperasi = 6;

// WPU Version :
for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if(noAngkot <= angkotBeroperasi){
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  } else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
  }
}


// My Version : 
// var noAngkot = 1;
// for(noAngkot; noAngkot<=jmlAngkot; noAngkot++) {
//   if(noAngkot>angkotBeroperasi) {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//   } else {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//   }
// }