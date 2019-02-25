const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');


passport.use(new GoogleStrategy({
    //options - CLIENT ID AND CLIENT SECRET for google strategy
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callback: "/auth/google/redirect"
},()=>{
   // Callback function after we get response from google
   
}));
