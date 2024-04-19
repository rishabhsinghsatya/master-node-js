import http from "http";
// import gfName from "./features.js";
// import randomLovePercent from "./features.js";
import fs from "fs"; //File system module
import path from "path";

// console.log(gfName);
// console.log(randomLovePercent());

// const home = fs.readFile("./index.html", () => {
//   console.log("File read");
// });
// console.log(home); //undefined

//now use syncronously
const home = fs.readFileSync("./index.html");
// console.log(home); //give buffer data

console.log(path.extname("/home/file/random/home.js")); //give file extension
console.log(path.dirname("/home/file/random/home.js")); //give directory extension

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // res.end("<h1>This is Home page</h1>");

    // fs.readFile("./index.html", (err, home) => {
    //   res.end(home);
    // });

    res.end(home);
  } else if (req.url === "/about") {
    res.end("<h1>This is About page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact page</h1>");
  } else {
    res.end("404: Page Not Found");
  }
});

server.listen(5000, () => {
  console.log("Server is working");
});
