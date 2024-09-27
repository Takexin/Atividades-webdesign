var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
var ejs = require("ejs");

const genAI = new GoogleGenerativeAI("AIzaSyBnlotxyzPa4MuJFfYg7UNIavqQcAGKzgE");


async function chat(prompt, res) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const message = await result.response.text();
    return message;
}
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

//app.use(express.static("views/pages"));
app.get("/", (req, res)=>{
    console.log("just got a get request");
    res.render("pages/index");    
});
app.post("/prompt", async(req, res)=>{
    console.log("apertou o botao para prompt");
    var prompt = new String(req.body.prompt);
    message =  await chat(prompt.toString());
    res.send(message);
    console.log(`res: ${req.body.prompt}`);
    console.log(message);


});

app.listen(3000, () =>{
    console.log("listening on port 3000");
})
