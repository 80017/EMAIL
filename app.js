var http=require('http');
var express=require('express');
var nodemailer = require("nodemailer");
var bodyParser = require('body-parser')
var app=express();
var port = Number(process.env.PORT || 5000);
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));
// Home page
app.get('/',function(req,res){
    res.sendfile('index.html');
});
 
// sending mail function
app.post('/send', function(req, res){
if(req.body.email == "" || req.body.subject == "") {
  res.send("Error: Email & Subject should not blank");
  return false;
}
// Sending Email Without SMTP
nodemailer.mail({
    from: req.body.email1, // sender address
    to: req.body.email2, // list of receivers
    subject: req.body.subject+" ✔", // Subject line
    //text: "Hello world ✔", // plaintext body
    html: "<b>"+req.body.description+"</b>" // html body
});
res.send("Email has been sent successfully");
 
  
});
 
// Starting server
var server = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});

var server2 = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});

var server3 = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});

var server4 = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});

var server5 = http.createServer(app).listen(port, function() {
console.log("Listening on " + port);
});
