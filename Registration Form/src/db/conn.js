const mongoose =   require('mongoose'); 

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/registreationForm",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected to DataBase");
}).catch((err)=>{
    console.log(err);
});