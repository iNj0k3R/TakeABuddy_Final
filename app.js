const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/takeabuddyDB",{useNewUrlParser: true,useUnifiedTopology: true});


const buddySchema = {
    name: String,
    phoneNo: String,
    email: String,
    password: String,
    city: String,
    lat: String,
    lon: String
}
var loggedIn = 0;
var curBuddy = 0;
const Buddy = mongoose.model("Buddy", buddySchema);

app.get("/",function(req,res){
    res.render('index',{loggedIn:loggedIn,name:curBuddy.name});
});

app.get('/logsign',function(req,res){
    res.render('login_page');
})
// app.get('/take',function(req,res){
//     Buddy.find({city:curBuddy.city},function(err,buddyList){
//         buddyList.forEach(buddy => {
//             console.log(buddy.name);
//         });
//     });
// })
app.post('/login',function(req,res){
    const emailSearch = req.body.uname;
    const passwordSearch = req.body.pwd;
    Buddy.findOne({email:emailSearch},function(err,foundBuddy){
        if(err)
            console.log(err);
        else
        {    if(passwordSearch === foundBuddy.password)
            {
                console.log("logged in successfully");
                curBuddy = foundBuddy;
                loggedIn = 1;
                res.redirect("/");
            }
            else
            {
                console.log("Incorrect password");
                res.redirect("/");
            }
        }
    })  
})

app.post("/signup",function(req,res){
    const buddy = new Buddy({
        name: req.body.fname,
        phoneNo: req.body.phno,
        email: req.body.emailid,
        password: req.body.pwd,
        city: req.body.addr
    });
    buddy.save();

    res.redirect('/')
})

app.get('/takebuddy',function(req,res){
    Buddy.find({city:curBuddy.city},function(err,buddyList){
        res.render('takeabuddy', {buds:buddyList,loggedIn:loggedIn,name:curBuddy.name,curBuddy:curBuddy});
     });
})
app.listen(3000,function(){
    console.log('server listing at port 3000');
})