import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user list");
});
router.get("/new", (req, res) => {
    res.send("user New Form");
  });
  router.get("/new", (req, res) => {
    res.send("user New Form");
  });
router.post("/",(req,res)=>{
    res.send('create user')
})
router.get('/:id',(req,res)=>{
    res.send(`Get user With ID ${req.params.id}`)
})
router.get('/:id',(req,res)=>{
    res.send(`Get user With ID ${req.params.id}`)
})
router.get('/:id',(req,res)=>{
    res.send(`Get user With ID ${req.params.id}`)
})


export default router