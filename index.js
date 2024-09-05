const fs = require("fs");
const { sum, multiply } = require("./math");
// const math = require("./math");

// console.log("this is fs", fs);
// fs.writeFile("this.txt", "this file is not empty", (err) => {
//   if (err) {
//     console.log("this file is not created");
//   }
//   console.log("this file has been created");
// })
// console.log(math);
console.log(sum, "this is sum");
console.log(sum(4, 5));
console.log(multiply(4, 5), "this is multiply");
