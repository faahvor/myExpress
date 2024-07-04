import express from "express"
const router = express.Router()

app.get("/users",(req,res)=>{
    res.send("userslink")
    })
    app.get("/users/new",(req,res)=>{
        res.send("newlink")
        })