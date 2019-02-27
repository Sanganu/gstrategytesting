const router = require('express').Router();
const checkUser = (req,res,next) => {
    if(!req.user)
    {
        res.redirect("/auth/login");
    }
    else{
        next();
    }
}
router.get("/verifieduser",checkUser,(req,res) => {
   res.send("Verified USer",req.user);
});

module.exports = router;

