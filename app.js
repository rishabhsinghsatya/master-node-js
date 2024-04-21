import express from "express";
import mongoose from "mongoose";

const app = express();

//using middlewares
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017", { dbName: "backendapi" })
  .then(() => {
    console.log("Database connected Successfully");
  })
  .catch((e) => {
    console.log(e);
  });
//create schema
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//create model
const User = mongoose.model("User", schema);

app.get("/", (req, res) => {
  res.send("Hello node");
});

app.get("/users/all", async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    // users: users,
    //if key-value pair same
    users,
  });
});

app.post("/users/new", async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    // name: "admin",
    // email: "admin@gmail.com",
    // password: "admin",
    name,
    email,
    password,
  });
  res.status(201).json({
    success: true,
    message: "Registered Successfully",
  });
});

//dynamic routing
app.get("/userid/:id", async (req, res) => {
  //   const { id } = req.body;
  //   const { id } = req.query;
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({
    success: true,
    user,
  });
});

app.listen(5000, () => {
  console.log("server is Working");
});
