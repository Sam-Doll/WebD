import express from "express";
const app= express();
const port = 3000;

app.get("/",(req, res)=>{
   // console.log(req.rawHeaders);
    res.send("hello world heyyy");
});

app.get("/contact", (req, res)=>{
    res.send("<h2>so this one is contact us page</h2><p>hmmm</p>");
});

app.get("/about", (req, res)=>{
    res.send("<h2>so this one is about us page</h2>");
});

app.listen(port, ()=>{
    console.log(`server has started on port ${port}`);

});