import express from 'express';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 5001;
const router = express.Router();
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});

app.get('/api/test',(req,res)=>{
    console.log("test successfull!");
    res.status(200).json("success");
  })
