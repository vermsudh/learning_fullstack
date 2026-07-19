import express from "express";
import morgan from "morgan";
import bodyparser from "body-parser";


const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// app.use(bodyparser(req, res, next) => {

// });


app.get("/", (req, res)=> {
  req.send()
});