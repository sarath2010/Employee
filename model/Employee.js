const mongoose = require("mongoose");

const Schema=mongoose.Schema({
    name:String,
    location:String,
    position:String,
    salary:Number
})

const EmployeeFile=mongoose.model('empdata',Schema);
module.exports=EmployeeFile;