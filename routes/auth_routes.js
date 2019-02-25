const router = require("express").Router();
const passport = require('passport');

// Auth Login
router.get("/login",(req,res) => {
   console.log("/login");
   res.render('login');
});

//Use Google strategy to authenticate the user
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}));

router.get("/logout",(req,res) => {
    console.log("/logout");
    res.send("Logout");
});

module.exports =  router;
