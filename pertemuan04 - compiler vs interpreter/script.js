/**
 * 
 * Terdapat dua cara untuk menerjemahkan source code yang telah kita buat kedalam bahasa mesin
 * agar bisa dijalankan : 
 *    > ada source code yang harus di-compile menggunakan compiler
 *    > ada source code yang harus diterjemahkan/interpretasi menggunakan interpreter
 * 
 *       ____________________________________________________________________________
 *      |                                                                            |
 *      | sebenarnya proses compile/interpretasi ini sudah dilakukan secara otomatis |
 *      | oleh bahasa pemrograman itu sendiri.                                       |
 *      |____________________________________________________________________________|
 * 
 * 
 *    - COMPILER 
 *          Ada dua komputer A&B. A membuat program dan akan diberikan pada B. 
 *      Pertama A membuat source code, kemudian dicompile menggunakan 
 *      compiler bahasa pemrograman tersebut.
 *          setelah dikompilasi akan menghasilkan file baru, yang kemudian diberikan pada B.
 *      hasil kompilasi ini biasa disebut file executable. Baru setelah B menerima filenya
 *      ia akan menjalankannya. B tidak perlu memiliki compiler dan source codenya, 
 *      B hanya menjalankannya saja.
 *       ________            ____________                 ____________
 *      |        |          |            |               |            |
 *      | source | compile  |    file    |   dikirim     |    file    |
 *      |  code  | -------> | executable | ------------> | executable |
 *      |________|          |____________|               |____________|
 *       ________________________________                 ____________
 *      |               A                |               |     B      |
 *      |________________________________|               |____________|
 * 
 * 
 *    - INTERPRETER
 *           Ada dua komputer A&B. A membuat program dan akan diberikan pada B. 
 *      Pertama A membuat source code, kemudian di duplikat dan diberikan pada B.
 *      B menggunakan interpreter untuk menerjemahkan program A, lalu B akan
 *      menjalankan interpreternya sekaligus menjankan programnya.
 *          Interpreter berjalan real-time saat menerjemahkan source code-nya 
 *      baris per baris
 *       ________        ________               ________
 *      |        |      |        |             |        |
 *      | source | copy | source |   dikirim   | source | interpreter
 *      |  code  | ---> |  code  |   ------>   |  code  | __________
 *      |________|      |________|             |________|           |
 *                                                  |               |
 *       ________________________               ____|___            |
 *      |            A           |             |    B   |___________|
 *      |________________________|             |________|
 * 
 * 
 * Perbadingan :
 *    
 *    A. Compiler
 *       - kelebihan  :
 *          > siap untuk dijalankan
 *          > lebih cepat, karena setelah di-compile sudah teroptimasi ke dalam bahasa mesin.
 *          > source code tidak terlihat, sehingga cenderung lebih aman, karena tidak diketahui oleh user.
 * 
 *       - kekurangan :
 *          > tidak lintas platform, karena begitu di-compile file executable-nya hanya kompatibel untuk OS tersebut.
 *            bahkan ketika OS-nya sama, tetapi CPU/processor-nya berbeda ada kemungkinan program tidak berjalan.
 *          > tidak fleksibel, ketika ada kesalahan/modifikasi harus melakukan compile ulang.
 *          > langkat tambahan, setelah coding, harus di compile terlebih dahulu.
 * 
 * 
 *    B. Interpreter
 *       - kelebihan  :
 *          > lintas platform, tidak peduli OS/CPU/Processor, asalkan punya interpreternya, source codenya bisa dijalankan.
 *          > fleksibel, tidak perlu compile ulang saat ada kesalahan/modifikasi, sehingga
 *          > mudah untuk diuji
 * 
 *       - kekurangan :
 *          > butuh interpreter, contohnya pada javascript, user butuh web browser untuk menjalankannya.
 *          > lebih lambat, karena setiap kali program dibuka, harus diinterprestasi dahulu
 *          > source code mudah diakses
 * 
 * 
 * Terdapat beberapa bahasa yang menggabungkan 2(dua) teknik diatas, teknik ini disebut teknik Hybrid (Intermediate Language)
 * dia menggabungkan kelebihan compiler dan interpreter. Berikut cara kerjanya : 
 *     ________           __________             __________
 *    |        |         |          |           |          | JIT compile
 *    | source | compile | byteCode |  dikirim  | byteCode | __________
 *    |  code  | ------> |   (IL)   |  ------>  |   (IL)   |           |
 *    |________|         |__________|           |__________|           |
 *                                                                     |
 *     _____________________________             __________            |
 *    |              A              |           |     B    | __________|
 *    |_____________________________|           |__________| Run Program
 * 
 *    Ada dua komputer A&B. A membuat program dan akan diberikan pada B. 
 * Pertama A membuat source code, kemudian di-compile, tapi hasilnya bukan file executable melainkan file bernama
 * intermediate language (IL) / byte code. file ini sudah cukup teroptimasi untuk bahasa mesin, dan pada umumnya dia 
 * cross platform. setelah itu IL dikirim ke B. sebelum dijalankan B melakukan JIT (Just In Time) compilation,
 * yaitu melakukan compile sambil menjalankan programnya sekaligus.
 * 
 * 
 * Contoh Bahasa Pemrograman : 
 *    - compiler    : C, C++, Objective-C
 *    - interpreter : javascript, php
 *    - hybrid      : java, vb.net, python
 * 
 */