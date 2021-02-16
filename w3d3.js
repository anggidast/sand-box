// Interesting Ladder Array Multidimensi

// function ladder(word) {
//     let arrExt = [];
//     for (let j = 0; j < word.length; j++) {
//         let arrIn = [];
//         for (let i = 0; i < word.length - j; i++) {
//             arrIn[i] = word[i];
//         }
//         arrExt.push(arrIn);
//     }
//     return arrExt;
// }
// console.log(ladder('hacktiv8'));

// Find The Multiply

function findTheMultiply(numbers, number) {
    let output = [];
    if (!numbers || numbers.length == 0 || !number) {
        console.log('Invalid Input');
    } else {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % number == 0) {
                output.push(numbers[i]);
            }
        }
        console.log(output);
    }
}
let numbers = [1, 2, 3];
let number = 1;
findTheMultiply(numbers, number);