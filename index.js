import express from "express";
// import fs from "fs";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  //   res.send("Hi"); //return Hi in browser body
  //send status code
  //   res.sendStatus(404);
  //   res.sendStatus(400);
  //   res.sendStatus(500);
  //   res.status(400).send("your custom message");
  //send json
  //   res.json({
  //     success: true,
  //     products: [],
  //   });
  //send file with fs module
  //   const file = fs.readFileSync("./index.html");
  //   res.send(file); //not working, so i'll use path module
  //send file with path module
  //   const pathlocation = path.resolve();
  //   //   console.log(path.join(pathlocation, "./index.html"));
  //   res.sendFile(path.join(pathlocation, "./index.html"));
});

app.listen(5000, () => {
  console.log("Server run successfully");
});
