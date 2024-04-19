import express from "express";
import path from "path";

const app = express();

const users = [];

//middleware
app.use(express.static(path.join(path.resolve(), "public"))); //index file from public folder
// console.log(path.join(path.resolve(), "public"));
app.use(express.urlencoded({ extended: true }));

//make sure folder name is "views"
//you want do one thing, if set here or use extension on render
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Rishabh" });
  //   res.render("index.ejs");
  //   res.sendFile("index"); //index file from public folder
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", (req, res) => {
  //   console.log(req.body);
  //   console.log(req.body.name);
  //   console.log(req.body.email);
  users.push({ username: req.body.name, email: req.body.email });
  //   res.render("success");
  res.redirect("/success");
});

app.get("/users", (req, res) => {
  res.json({
    users,
  });
});

app.listen(5000, () => {
  console.log("Server run successfully");
});
