/**
 * 
 * VARIABLE SCOPE
 * 
 *    - lingkup variable / bagaimana sebuah variable dapat diakses dalam program.
 *    - Dalam pemrograman ada 2 jenis scope : 
 *      1. block scope
 *         digunakan oleh bahasa pemrograman seperti c dan java.
 * 
 *      2. function scope  
 *         digunakan oleh javascript
 *  
 *    - contoh :
 *      1. var a=1;                // global scope / window scope
 * 
 *      2. function tes() {        // function scope
 *           var b 2;                 output :  b is not defined
 *         }
 *         console.log(b);
 * 
 *      3. var a=1;                // output : 1
 *         function tes() {a=2;}      ini disebut name conflict
 *         tes();
 *         console.log(a);
 * 
 *      4. var a=1;                // output : 1
 *         function tes() {
 *           a=2;
 *           console.log(window.a);
 *         }      
 *         tes();
 * 
 */