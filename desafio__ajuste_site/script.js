var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var path = require('path');


app.listen(3000, () =>{
    console.log("listening on port 3000");
})
app.use(bodyParser.urlencoded({extended: true}));
app.use("/static",express.static(path.join(__dirname, "public")));
app.get("/", (req, res)=>{
    console.log("just got a get request")
    res.send("test");
});
app.post("/static/index.html", (res, req)=>{
    console.log("apertou o botao para prompt");
    console.log(`res: ${res.body.prompt}`);
});

