// Task1: initiate app and run server at 3000
var Express =require("express");
var Bodyparser=require("body-parser");
var Mongoose = require("mongoose");
var Cors = require("cors");

var app = new Express();

const TestData=require("./model/Employee")

app.listen(3000,()=>{
    console.log("Server is listening at 3000");
})

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

app.get("/",(req,res)=>{
    res.send("Welcome");
})




//TODO: get data from db  using api '/api/employeelist'

app.get("/api/employeelist",(req,res)=>{
    res.send("Welcome");
})



//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



