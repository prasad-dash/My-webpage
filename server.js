const express=require('express');
const path=require('path')
const app=express();
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '.')));

app.get('/home',(req,res)=>{
    res.render("index.html");
})
app.get('/blogs.html',(req,res)=>{
    res.render("blogs.html");
})
app.listen(3000,()=>{
    console.log("hello");
})