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
let notes=[];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{

    res.render("home.ejs");
});
app.get("/home", (req,res)=>{

    res.render("home.ejs");
});
app.get("/comment", (req,res)=>{

    res.render("inputForm.ejs");
});
app.get("/cities", (req, res) => {
    res.render("cities.ejs");
});
app.get("/blog", (req,res) => {
    res.render("notes.ejs",{notes});
    //res.redirect("/comment");
});  
  
app.get("/about", (req,res) => {
    res.render("about.ejs");
}); 


app.post("/check", (req, res) => {
    const note = {
        id: Date.now().toString(), // Simple unique ID based on timestamp
        name: req.body["firstname"],
        surname: req.body["lastname"],
        country: req.body["country"],
        posts:req.body["subject"],
        date: new Date().toLocaleDateString() // Adding date for simplicity
    }
    notes.push(note);
    res.render("notes.ejs",{notes}); 
    
});

app.get("/notes", (req, res) => {
    res.render("notes.ejs", { notes: notes });});



app.get("/update/:id", (req, res) => {
    const noteId = req.params.id;
    console.log(noteId);
    const noteToUpdate = notes.find(note => note.id === noteId);
        
    if (noteToUpdate) {
       res.render("updateNote.ejs", { note: noteToUpdate }); // Render the update form with the note data
     } else {
            res.status(404).send('Note not found');
        }
    });

app.post('/update/:id', (req, res) => {
        const noteId = req.params.id;
        const updatedSubject = req.body.subject;
    
        // Find the note by ID and update its text
        notes = notes.map(note => {
            if (note.id === noteId) {
                return {
                    ...note,
                    posts: updatedSubject // Update the subject with new value
                };
            }
            return note; // Return unchanged note
        });
    
        // Redirect back to the notes page
        //res.render("notes.ejs",{notes});
    });

app.post('/delete/:id', (req, res) => {
        const noteId = req.params.id;
        // Remove the note from the array based on the ID
        notes = notes.filter(note => note.id !== noteId);
        res.redirect("/blog"); // Redirect back to the notes page
    });
app.listen(port, ()=>{
    console.log(`active port at ${port}`);
});