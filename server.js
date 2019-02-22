const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

//View Engines
app.set("view engine","ejs");

//Routes setup

app.get("/",(req,res) => {
    console.log("The Home route");
    res.render("home");
});

// App listening on Port
app.listen(PORT,function(){
    console.log(`Passport GoogleStrategy app 🌎 on ${PORT}`);
});

