/**
 * 
 * OBJECT (THIS)
 * 
 *    - this : adalah sebuah keyword special yang secara otomatis didefinisikan
 *             pada setiap function.
 * 
 *    - console.log(this);
 *        * saat belum menulis apapun, 'this' berisi window (object global) 
 *          sama saja dengan menulis console.log(window);
 *        * console.log(window === this)        // output : true.
 *                                              ____
 *        * var a = 10;   console.log(a)            |
 *                        console.log(this.a)       |--> output : 10
 *                        console.log(window.a) ____|
 * 
 *    - Menjalankan THIS di setiap cara pembuatan Object : 
 * 
 *      1) function declaration 
 *         function halo() {     ___
 *            console.log(this);    |
 *            console.log('halo');  |--> this mengembalikan object global.
 *         }                        |
 *         this.halo()           ___|
 *        
 *      2) object literal
 *         var obj  = {};        ___
 *         obj.halo = function() {  |
 *            console.log(this);    |
 *            console.log('halo');  |--> this mengembalikan object yang bersangkutan.
 *         }                        |
 *         obj.halo();           ___|
 * 
 *      3) function constructor
 *         function Halo() {     ___
 *            console.log(this);    |
 *            console.log('halo');  |--> this mengembalikan object yang baru dibuat menggunakan keyword 'new'
 *        }                         |
 *        new Halo();            ___|
 * 
 */