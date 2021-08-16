const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const connectToDatabase=async ()=>{
    await mongoose.connect('mongodb+srv://Prasad:Prasad@personalwebsite.h0nt2.mongodb.net/Portfolio?retryWrites=true&w=majority', {useNewUrlParser: true}).then(()=>{
        console.log("Connected to database");
    }).catch((err)=>{
        console.log(err);
    })
}
const app=express();
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '.')));
const blogSchema= new mongoose.Schema({
    title: String,
    content: String,
    date: Date,
    displayPicture: String,
    headline: String
});
const projectSchema= new mongoose.Schema({
    title: String,
    descrption: String,
    github: String,
    displayPicture: String,
    headline: String
});
const projectModel=new mongoose.model('Project',projectSchema,'Projects');
const blogModel=new mongoose.model('Blog',blogSchema,'Blogs');
const getBlogs= async ()=>{
    return await blogModel.find({}); 
}
const getProjects=async ()=>{
    return await projectModel.find({});
}
const getBlogsById=async (id)=>{
    return await blogModel.findById(id);
}
const getProjectsById=async (id)=>{
    return await projectModel.findById(id);
}
connectToDatabase();
app.get('/',(req,res)=>{
    res.render("index.html");
})
app.get('/home',(req,res)=>{
    res.render("index.html");
})
app.get('/blogs',async (req,res)=>{
    const blogList=await getBlogs();
    console.log(blogList);
    res.render("blogs.html",{blogList});
})
app.get('/blogById',async (req,res)=>{
        const blogEntry=await getBlogsById(req.query.id);
        console.log(blogEntry);
        res.send(blogEntry);
})
app.get('/projectById',async (req,res)=>{
        const blogEntry=await getBlogsById(req.query.id);
        console.log(blogEntry);
        res.send(blogEntry);
})
app.get('/projects',async (req,res)=>{
    const projectList=await getProjects();
    console.log(projectList);
    res.render("projects.html",{projectList});
})
app.listen(3000,()=>{
    console.log(`Server Started at ${Date.now()}`);
})

// 
