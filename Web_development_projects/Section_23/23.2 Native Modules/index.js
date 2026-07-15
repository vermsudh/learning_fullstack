// const fs = require("fs")
// import { readFile } from 'node:fs';

// fs.writeFile("message2.txt", "Hello from NodeJS!", (err) =>{
//     if(err) throw err;
//     console.log("This file has been saves");
// });

// fs.readFile('./mess', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// }); copy



// import { readFile } from 'node:fs';

// // macOS, Linux, and Windows
// readFile('<directory>', (err, data) => {
//   // => [Error: EISDIR: illegal operation on a directory, read <directory>]
// });

// //  FreeBSD
// readFile('<directory>', (err, data) => {
//   // => null, <data>
// });


const fs =require("fs");

fs.readFile('./message2.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 
