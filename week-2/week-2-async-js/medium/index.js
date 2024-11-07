

// File Clearner

// const fs = require('fs').promises;
//
//
//
// async function fileClearner(filename) {
//
//     try {
//
//         // const content = await fs.readFile(file);
//         // const cleaned = content.replace(/\s+/g, ' ').trim();
//         // await fs.writeFile(file, cleaned);
//         const content = await fs.readFile(filename, 'utf8');
//
//         const cleanedContent = content.replace(/\s+/g, ' ').trim();
//
//         await fs.writeFile(filename, cleanedContent);
//
//         console.log('File cleaned');
//
//     } catch (err) {
//         console.log(err)
//     }
//
// }
// // const filename = 'a.txt';
// fileClearner('a.txt')



// Clock





function currentTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    console.log(strTime);

}


setInterval(currentTime, 1000);

