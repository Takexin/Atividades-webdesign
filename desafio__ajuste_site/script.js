var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');
var gemini = require("@google/generative-ai");
var ejs = require("ejs");


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
var data[{
    prompt: "value"
},];
// app.use("/static",express.static(path.join(__dirname, "public")));
app.get("/", (req, res)=>{
    console.log("just got a get request");
    res.render("pages/index");    
});
app.post("/prompt", (req, res)=>{
    console.log("apertou o botao para prompt");

    res.render("pages/prompt", {});
    res.test = "omaga";
    console.log(`res: ${req.body.prompt}`);
});

app.listen(3000, () =>{
    console.log("listening on port 3000");
})
