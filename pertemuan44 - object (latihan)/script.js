// membuat Object Angkot
function Angkot(sopir, trayek, penumpang, kas) {
  // properti
  this.sopir     = sopir;
  this.trayek    = trayek;
  this.penumpang = penumpang;
  this.kas       = kas;

  // method
  this.penumpangNaik = function(namaPenumpang) {
    this.penumpang.push(namaPenumpang)
    return this.penumpang
  }

  this.penumpangTurun = function(namaPenumpang, bayar) {
    if(this.penumpang.length === 0) {
      alert('angkot masih kosong')
      return false;
    } 

    for (var i=0; i<this.penumpang.length; i++) {
      if(this.penumpang[i] == namaPenumpang)  {
        this.penumpang[i] = undefined
        this.kas += bayar
        return this.penumpang
      }
    }
  }
}

// instansiasi object baru
var angkot1 = new Angkot('Rikzy', ['Gremet', 'Tirtonadi'], [], 0);
var angkot2 = new Angkot('Rudy', ['Pasar Kliwon', 'Bekonang'], [], 0);