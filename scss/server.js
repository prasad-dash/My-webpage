const express=require('express');
const app=express();
app.get('/home',(req,res)=>{
    res.send("HI");
})
app.listen(3000,()=>{
    console.log("hello");
})