// Laundry Day

/**
 * ALGORITMA
 * 
 * 1. Foxie memasukkan pakaiannya satu-persatu (sebanyak 20) ke dalam mesin cuci
 * 2. Jika semua pakaiannya sudah masuk ke mesin cuci, maka tombol power mesin cuci akan menyala
 */

/**
 * PSEUDOCODE
 * 
 * FOR i FROM 0 TO 19 INCREMENT BY 1
 *  STORE bajuDiDalamMesinCuci WITH i
 * END FOR
 * STORE tombolPowerMesinCuci WITH TRUE
 */


// I Love Coding

// for
// console.log('LOOPING FOR PERTAMA');
// for (var i = 1; i <= 20; i++) {
//     console.log(i + ' - I love coding');
// }
// console.log('LOOPING FOR KEDUA');
// for (i = 20; i > 0; i--) {
//     console.log(i + ' - I will become fullstack developer');
// }

// while
// i = 0;
// console.log('LOOPING WHILE PERTAMA');
// while (i < 20) {
//     i += 2;
//     console.log(i + ' - I love coding');
// }
// i = 20;
// console.log('LOOPING WHILE KEDUA');
// while (i > 0) {
//     console.log(i + ' - I will become fullstack developer');
//     i -= 2;
// }


// Odd Even Numbers

// for (var i = 1; i <= 100; i += 3) {
// 1
//     if (i % 2 == 0) {
//         console.log(i + ' - genap');
//     } else {
//         console.log(i + ' - ganjil');
//     }
// }

// 2
// for (var i = 50; i <= 200; i += 5) {
//     if (i % 3 == 0) {
//         console.log(i + ' - faktor 3');
//     } else {
//         console.log(i + ' - tidak bisa dibagi 3');
//     }
// }

// 3
// for (var i = 100; i <= 200; i += 7) {
//     if (i % 8 == 0) {
//         console.log(i);
//     }
// }


// Asterisk Looping

// 1
// let rows1 = 5;
// for (let i = 0; i < rows1; i++) {
//     console.log('*');
// }

// 2
// let rows2 = 10;
// for (let i = 0; i < rows2; i++) {
//     let stars = '';
//     for (let i = 0; i < rows2; i++) {
//         stars += '*';
//     }
//     console.log(stars);
// }

// 3
// let rows3 = 5;
// let stars = '';
// for (let i = 0; i < rows3; i++) {
//     stars += '*';
//     console.log(stars);
// }

// 4
// let rows4 = 10;
// for (let i = rows4; i > 0; i--) {
//     let stars = '';
//     for (let i = rows4; i > 0; i--) {
//         stars += '*';
//     }
//     console.log(stars);
//     rows4--;
// }


// Balik Kata
// let kata = 'Javascript'
// let kataBaru = '';
// let length = 0;
// while (kata[length] !== undefined) {
//     length++;
// }
// for (let i = 1; i <= length; i++) {
//     kataBaru += kata[(length - i)];
// }
// console.log(kataBaru);

// for (let i = 1; i <= kata.length; i++) {
//     kataBaru += kata[(kata.length - i)];
// }
// console.log(kataBaru);



// XO
// var kata = 'xoxoxxooxo';
// var x = 0;
// var o = 0;
// for (var i = 0; i < kata.length; i++) {
//     if (kata[i] == 'x') {
//         x++;
//     } else if (kata[i] == 'o') {
//         o++;
//     }
// }
// console.log(x, o);
// if (x == o) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// Foxes in Borderland

// var start = '10';
// var end = '0';
// for (var i = start - 1; i > end; i--) {
//     i = i.toString
//     start += i;
//     console.log(start);
// }
// console.log(start);