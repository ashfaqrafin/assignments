

// // counter
// let counter = 1;
// function increaseAndPrint() {
//     console.log(counter)
//     counter = counter + 1;
//
// }
// const id = setInterval(increaseAndPrint, 1000);
//
// setTimeout(() => clearInterval(id), 5000);



// counter without setInterval

// let counter = 1;
// function increaseAndPrint() {
//     console.log(counter)
//     counter = counter + 1;
//     if (counter == 5) return;
//     setTimeout(increaseAndPrint, 1000);
// }
// setTimeout(increaseAndPrint, 1000);
//


// read file from a file

// const fs = require('fs');
//
// const filePath = 'a.txt';
//
// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File content:', data);
//
//     // Perform the expensive operation after file read completes
// });
//
// function expensiveOperation() {
//     let sum = 0;
//     for (let i = 0; i < 1e8; i++) { // Simulating a very expensive operation
//         sum += i;
//     }
//     console.log('Expensive operation result:', sum);
// }
//
// expensiveOperation();


// writing to a file

// const fs = require('fs');
//
// const data = 'This is the content to write to the file.';
//
// function expensiveOperation() {
//     let sum = 0;
//     for (let i = 0; i < 1e8; i++) { // Simulating a very expensive operation
//         sum += i;
//     }
//     console.log('Expensive operation result:', sum);
// }
//
// fs.writeFile("a.txt", data, (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log(`Data written to a.txt`);
//
// });
//
// expensiveOperation();




