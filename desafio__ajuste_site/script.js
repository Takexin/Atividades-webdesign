var express = require('express');
var bodyParser = require('body-parser')
var app = express();
require("dotenv").config()
var path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
var ejs = require("ejs");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);


async function chat(prompt, res) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: res });
    const result = await model.generateContent(prompt);
    const message = await result.response.text();
    return message;
}
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use("/img", express.static("views/pages/img"));
app.use("/scripts", express.static("views/pages/scripts"))
app.get("/", (req, res)=>{
    console.log("just got a get request");
    res.render("pages/index");
});
app.post("/prompt", async(req, res)=>{
    var prompt = new String(req.body.prompt);
    sysIns = "Answer the prompt sent to you, but comunicate ONLY with HTML and CSS elements."
    message =  await chat(prompt.toString(), sysIns);
    await res.render("pages/index", {text: message});
    console.log(`res: ${req.body.prompt}`);
    console.log(message);
});
app.post("/form", async(req, res)=>{
    console.log("sent form");
    var question1 = req.body.q1;
    var question2 = req.body.q2;
    var question3 = req.body.q3;
    var question4 = req.body.q4;
    var questionArray = [question1, question2, question3, question4];
    console.log(req.body);
    sysIns = "Você irá receber 4 números inteiros, sendo eles respostas para as seguintes questões, de 1 a 5, 1 sendo discordo competamente e 5 concordo completamente:  Questão 1 'Avalie seu bem estar geral nesta semana', Questão 2 'Qual o seu grau de satisfação com o ambiente de trabalho?', Questão 3 'Você sente que seu trabalho possúi um impacto positivo nessa empresa?', Questão 4 'Você possúi as ferramentas e recursos necessários para realizar seu trabalho efetivamente?'. Faça uma análise de possíveis soluções para os problemas listados, comunique-se APENAS com elementos de lista HTML, seja breve e escreva apenas UMA frase por solução.";
    var message = await chat(questionArray.toString(), sysIns);
    await res.render("pages/index", {formRes: message});
});
app.get("/test", (req, res) =>{
    res.redirect("/"); 
});
app.listen(3000, () =>{
    console.log("listening on port 3000");
})
