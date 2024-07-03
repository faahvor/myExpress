import express from "express"
const app = express()

app.get("/", (req,res)=>{
    console.log("here");
    res.sendStatus('200')
})
app.listen(3000)