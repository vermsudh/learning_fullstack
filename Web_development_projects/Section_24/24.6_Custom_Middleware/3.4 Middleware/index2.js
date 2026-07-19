import express from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";

const app = express();
const port = 3000;

// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
