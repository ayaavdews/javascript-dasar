var repeat = true;
while(repeat) {  
  // menangkap pilihan player
  var player = prompt('masukkan pilihanmu : \n (gajah, orang, atau semut)');

  // menangkap pilihan computer
  // membangkitkan bilangan random
  var bot = Math.random();

  if(bot < 0.34) {
    bot = 'gajah';
  } else if(bot>=0.34 && bot<=0.67) {
    bot = 'orang';
  } else {
    bot = 'semut';
  }

  // set rules
  var result = '';
  if(player == bot) {
    result = 'SERI';
  } else if(player == 'gajah') {
    result = (bot == 'orang') ? 'MENANG' : 'KALAH';
    // if(bot == 'orang') {
    //   result = 'menang';
    // } else {
    //   result = 'kalah';
    // }
  } else if(player == 'orang') {
    result = (bot == 'semut') ? 'MENANG' : 'KALAH';
    // if(bot == 'semut') {
    //   result = 'menang';
    // } else {
    //   result = 'kalah';
    // } 
  } else if(player == 'semut') {
    result = (bot == 'gajah') ? 'MENANG' : 'KALAH';
    // if(bot == 'gajah') {
    //   result = 'menang';
    // } else {
    //   result = 'kalah';
  } else {
    result = 'memasukkan pilihan yang salah.'
  }

  // output 
  alert('Kamu memilih : ' + player + ' dan komputer memilih ' + bot + ' \nMaka hasilnya, kamu ' + result );

  repeat = confirm('apa anda ingin bermain lagi ?');
}

alert('terimakasih sudah bermain :)');