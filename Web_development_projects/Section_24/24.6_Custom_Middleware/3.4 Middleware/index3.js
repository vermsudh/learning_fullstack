import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req, res, next){
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);

  // console.log(req.body);
  // console.log(bodyParser.urlencoded({extended: true}));
  next();
}

app.use(logger);

app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
