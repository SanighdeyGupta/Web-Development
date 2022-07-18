const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/index.html");
})
app.listen(3000,function() {
  console.log("Server is running 3000");
})

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is: " + result);
})


app.get("/bmiCalculator", function(req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res) {
  var val1 = Number(req.body.val1);
  var val2 = Number(req.body.val2);
  var result = val2/(val1*val1);
  result = result.toFixed(3);
  res.send("The result of the BMI calculation is: " + result);
})
