var express = require('express');
var bodyParser = require('body-parser')
var app = express();
require("dotenv").config()
var path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
var ejs = require("ejs");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


async function chat(prompt, res) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const message = await result.response.text();
    return message;
}
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/img", express.static("views/pages/img"));
app.use("/scripts", express.static("views/pages/scripts"))
app.get("/", (req, res)=>{
    console.log(process.env.API_KEY);
    console.log("just got a get request");
    res.render("pages/index");    
});
app.post("/prompt", async(req, res)=>{
    var prompt = new String(req.body.prompt);
    message =  await chat(prompt.toString());
    await res.render("pages/index", {text: message});
    console.log(`res: ${req.body.prompt}`);
    console.log(message);
});
app.post("/form", async(req, res)=>{
    console.log("sent form");
    var form = req.body.q1
    res.render("pages/index", {formRes: form});
    console.log(form);
});

app.listen(3000, () =>{
    console.log("listening on port 3000");
})
