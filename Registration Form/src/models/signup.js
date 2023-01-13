const mongoose = require('mongoose');

const userData =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:8,
        maxlength:24
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:15
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:16
    },
    repeatPassword:{
        type:String,
        required:true,
        minlength:8,
        maxlength:16
    }
});


// Create a collection


const UserInfo =new mongoose.model("UserInfo",userData);

module.exports=UserInfo;