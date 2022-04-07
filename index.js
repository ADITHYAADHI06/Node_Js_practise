const fs = require("fs");

// //  To Create new file
// fs.writeFileSync("read.txt", "one");

// //  if once same name file is want to create
// fs.writeFileSync("read.txt", "two");

// //  To Add some text into file
// fs.appendFileSync("read.txt", " I am fine");

// //  To read the data from the file
// const buf_Data = fs.readFileSync("read.txt");

// console.log(buf_Data);

// // To Tackel Buf_data use ToString() method

// org_Data = buf_Data.toString();

// console.log(org_Data);

// fs.renameSync("read.txt", "read&write.txt");

// fs.mkdir("OS", (err) => {
//   console.log("dir created");
// });

// fs.mkdir("Path_modules", (err) => {
//   console.log("dir created");
// });

// fs.mkdir("ImportExport", (err) => {
//   console.log("dir created");
// });

// fs.mkdir("NpmMod", (err) => {
//   console.log("dir created");
// });

fs.mkdir("httpSever", (err) => {
  console.log("dir created");
});
