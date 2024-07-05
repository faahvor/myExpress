import express from "express";
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("here");
    res.render("index",{text: 'world'});
});

import userRouter from "./Routes/users.js"
app.use("/users",userRouter)
app.listen(3000);
