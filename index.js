import express from "express";
import path from "path";
import mongoose from "mongoose";

//connect database
mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "backend" })
  .then(() => {
    console.log("Database connected");
  })
  .catch((e) => {
    console.log(e);
  });
//create database schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});

//create model
const Message = mongoose.model("Message", messageSchema);

const app = express();

const users = [];

//middleware
app.use(express.static(path.join(path.resolve(), "public"))); //index file from public folder
// console.log(path.join(path.resolve(), "public"));
app.use(express.urlencoded({ extended: true }));

//make sure folder name is "views"
//you want do one thing, if set here or use extension on render
app.set("view engine", "ejs");

app.get("/add", async (req, res) => {
  await Message.create({ name: "Rishabh", email: "admin@gmail.com" });
  res.send("Nice");
});

app.get("/", (req, res) => {
  res.render("index", { name: "Rishabh" });
  //   res.render("index.ejs");
  //   res.sendFile("index"); //index file from public folder
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.post("/contact", async (req, res) => {
  const { name, email } = req.body;
  await Message.create({
    // name: name,
    // email: email,
    //or
    name,
    email,
    //or
    // name: req.body.name,
    // email: req.body.email,
  });
  console.log(messageData);
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
