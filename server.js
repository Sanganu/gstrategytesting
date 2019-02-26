const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');

//Connect to MongoDb using mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/gstralogin",{ useNewUrlParser: true },() => {
    console.log("Connected to MongoDB");
});

//API from .env and setup google strategy
require('dotenv').config();
const passportSetup = require('./config/passport_setup');


//View Engines
app.set("view engine","ejs");

//Routes setup
app.get("/",(req,res) => {
    console.log("The Home route");
    res.render("home");
});
app.use('/auth',require("./routes/auth_routes"));

// App listening on Port
app.listen(PORT,function(){
    console.log(`Passport GoogleStrategy app running on ${PORT}`);
});

