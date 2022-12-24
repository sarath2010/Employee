// Task1: initiate app and run server at 3000
var Express =require("express");
var Bodyparser=require("body-parser");
var Mongoose = require("mongoose");
var Cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

var app = new Express();

const Employee=require("./model/Employee")

app.listen(3000,()=>{
    console.log("Server is listening at 3000");
})

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 

mongoose.connect('mongodb+srv://sarath:sarath123@cluster0.giuxtco.mongodb.net/EmpFiles?retryWrites=true&w=majority');

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below






//TODO: get data from db  using api '/api/employeelist'

app.get("/api/employeelist",async(req,res)=>{
    const employee=await Employee.find();
    res.send(employee);
})



//TODO: get single data from db  using api '/api/employeelist/:id'

app.get("/api/employeelist/:id",async(req,res)=>{
    const employee=await Employee.findOne();
    res.send(employee);
})


//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}

app.post("/api/employeelist",async(req,res)=>{
    var item = {
        name:req.body.name,
        location:req.body.location,
        position:req.body.position,
        salary:req.body.salary
    }
   var Data=Employee(item);
   Data.Save();
})




//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



