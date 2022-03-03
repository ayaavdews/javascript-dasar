/**
 * 
 * MEMBUAT OBJECT
 *    
 *  - Object Literal
 *    var mhs1 = {                      
 *      nama    : 'Sandhika Galih',          
 *      nrp     : '043040023',                 
 *      email   : 'sandhikagalih@unpas.ac.id', 
 *      jurusan : 'Teknik Informatika'
 *    }
 * 
 *    var mhs2 = {                      
 *      nama    : 'Doddy',          
 *      nrp     : '033040007',                 
 *      email   : 'doddy@unpas.ac.id', 
 *      jurusan : 'Teknik Industri'
 *    }
 * 
 * 
 *  - Function Declaration
 *    function buatObjectMahasiswa(nama, nrp, email, jurusan) {
 *        var mhs = {}; ---> declaration
 *        mhs.nama    = nama; 
 *        mhs.nrp     = nrp;
 *        mhs.email   = email;
 *        mhs.jurusan = jurusan;
 *        return mhs; ---> return
 *    }
 *    var mhs3 = buatObjectMahasiswa('Nofariza', '023040123', 'nofa@yahoo.com', 'Teknik Pangan');
 * 
 * 
 *  - Constructor Function (keyword new)
 *    function Mahasiswa(nama, nrp, email, jurusan) {
 *      this.nama    = nama;
 *      this.nrp     = nrp;
 *      this.email   = email;
 *      this.jurusan = jurusan;
 *    }
 *    var mhs4 = new Mahasiswa('Erik', '013040321', 'erik@icloud.com', 'Teknik Mesin');
 * 
 * 
 *  - Object.create()
 * 
 *  - * function declaration adalah fungsi yang ditujukan untuk membuat object.
 *    * perbedaannya dengan function constructor adalah function declaration
 *      harus memiliki declaration dan return.
 *    * sedangkan function constructor harus menggunakan keyword 'new'
 *      jika tidak, akan menghasilkan undefined.
 */