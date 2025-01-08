import express from "express";
import bodyParser from "body-parser"

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const name = "maja";
const today = new Date();
const day = today.toLocaleDateString();
const year = today.getFullYear;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{

    res.render("index.ejs");
});
app.get("/home", (req,res)=>{

    res.render("index.ejs");
});
app.get("/comment", (req,res)=>{

    res.render("home.ejs");
});
app.get("/cities", (req, res) => {
    res.render("cities.ejs");
});
app.get("/blog", (req,res) => {
    res.render("blog.ejs");
});  
  
app.get("/about", (req,res) => {
    res.render("about.ejs");
}); 
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/check", (req,res) => {
    
    res.render("blog.ejs", {
        name:req.body["firstname"],
        surname:req.body["lastname"],
        posts:req.body["subject"],
        date:day
    }

    );
    console.log(req.body);
  });
app.put("/user", (req, res) =>{
    res.send();
});
app.patch("/user", (req, res) =>{
    res.send();
    });
app.delete("/delete", (req, res) =>{
    res.render("blog.ejs", {
        name:req.body["firstname"],
        surname:req.body["lastname"],
        posts:"null",
        date:day});
    });

app.listen(port, ()=>{
    console.log(`active port at ${port}`);
});