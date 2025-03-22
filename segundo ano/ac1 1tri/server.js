const express = require("express");
const path = require("path")

const app = express();
const port = 3000;

const page = path.join(__dirname, "public/index.html");

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req,res) =>{
  res.sendFile(page);
});

app.listen(port);
