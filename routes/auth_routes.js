const router = require("express").Router();
const passport = require('passport');

// Auth Login
router.get("/login",(req,res) => {
   console.log("/login");
   res.render('login');
});

//Use Google strategy to authenticate the user
router.get('/google',passport.authenticate('google',{
    scope: ['profile'] // This tells passport what information we need from google the google login screen(list of google accounts availabel) comes up
})); // This uses passport and tells to use authenticate strategy

router.get("/logout",(req,res) => {
    console.log("/logout");
    res.send("Logout");
});

// With the redirect url, exchange token for profile info. here we don't get the google login screen
router.get("/google/redirect",passport.authenticate('google'),(req,res) => {
    // console.log("Redirect - Request",req.profile);
    // console.log("Redirect - Response",res);
   // res.json({"Authenticate":req.user}) // Now the req.user will have the details in the request.
    res.redirect("/loggedin/verifieduser")
});



module.exports =  router;
  