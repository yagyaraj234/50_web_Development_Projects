const express = require('express');
const hbs= require('hbs');
const path = require('path');
const UserInfo = require('./models/signup');

require ("./db/conn.js");
const signup = require("./models/signup");

const port =process.env.PORT || 3000;

const app =express();

const htmlPath = path.join(__dirname,"../");
const staticPath =path.join(__dirname,"../public");
const templatePath =path.join(__dirname,"../template/views");
const partialsPath =path.join(__dirname,"../template/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);
app.get('/',(req,res)=>{
    res.render("index");
});


app.get('/signup',(req,res)=>{
    res.render("signup");
});

app.post("/signup",async(req,res)=>{
    try {
        const password =req.body.password;
        const rPassword =req.body.repeatPassword;

        if(password === rPassword){
            const newData = new UserInfo({
            name:req.body.name,
            email:req.body.email,
            password:password,
            repeatPassword:rPassword
            })
            const newUser = await newData.save();
            res.status(201).render("index");
        }
        else{
            res.send("password are not matching");
        }
    }
    catch (error) {
        res.status(400).send();
        
    }
});

app.get('/signin',(req,res)=>{
    res.render("signin");
});

app.listen(port,()=>{
    console.log(`Server Connected to ${port}`);
});