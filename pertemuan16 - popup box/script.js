/**
 * alert()
 * alert yang banyak akan di jalankan setelah alert sebelumnya di click.
 */
// alert('hello world!');
// alert('today i learn javascript');
// alert('it\'s very amazing!');


/**
 * prompt()
 * fungsinya sama seperti alert(), tapi tidak hanya ada tombol 'ok' saja.
 */
// var nama = prompt('masukkan nama : ');
// alert('hello ' + nama);


/**
 * confirm()
 * meminta konfirmasi.
 */

alert('welcome...');
var i = true;

/** while (i === true) */ while (i) {
  var nama = prompt('insert name here : ');
  alert('hello ' + nama);

  i = confirm('insert again?');
}

alert('thanks...')