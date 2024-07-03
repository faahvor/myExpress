import express from ("express")
const app = express()

app.get("/", (req,res)=>{
    console.log("here");
    res.download('index.js')
})
app.listen(3000)