const router = require("express").Router();


// Auth Login
router.get("/login",(req,res) => {
   console.log("/login");
   res.render('login');
});

router.get('/google',(req,res) => {
    // Use passport
    console.log("/google route");
    res.send("logging with google");
});

router.get("/logout",(req,res) => {
    console.log("/logout");
    res.send("Logout");
});

module.exports =  router;
