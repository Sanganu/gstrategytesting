const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const coookieSession = require("cookie-session");
const keys = require('./config/keys.js');
const passport = require('passport');

//API from .env 
require('dotenv').config();

//Connect to MongoDb using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gstralogin",{ useNewUrlParser: true },() => {
    console.log("Connected to MongoDB");
});

//View Engines
app.set("view engine","ejs");



//Cookie
app.use(coookieSession({
    maxAge: 2*60*60*1000,
    keys: [keys.session.cookieKey ] // The array stores the keys
}));




//setup google strategy - passport.js 
const passportSetup = require('./config/passport_setup');

//Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

//Routes setup
app.get("/",(req,res) => {
    console.log("The Home route");
    res.render("home",{user:""});
});
app.use('/auth',require("./routes/auth_routes"));








// App listening on Port
app.listen(PORT,function(){
    console.log(`Passport GoogleStrategy app running on ${PORT}`);
});

