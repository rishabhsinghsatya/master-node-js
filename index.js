import http from "http";
// import gfName from "./features.js";
import randomLovePercent from "./features.js";

// console.log(gfName);
console.log(randomLovePercent());

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>This is Home page</h1>");
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
