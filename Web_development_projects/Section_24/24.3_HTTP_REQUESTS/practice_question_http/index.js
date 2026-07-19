import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    res.send("Hello World!");
})

app.get("/about", (req, res) => {
    res.send("This is the about page")
})

app.get("/contact", (req, res) => {
    res.send("This is contact page")
})

app.listen(port, ()=> {
    console.log(`The server is running on this port ${port}`)
})