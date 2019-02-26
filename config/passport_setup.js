const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
var userAccount = require('../models/userAccount');

   //options - CLIENT ID AND CLIENT SECRET for google strategy
   //When our app hits the google we get back token in the query URL
   // We need to exchange the token to get the info
passport.use(new GoogleStrategy({
 
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect"
},(accessToken,refreshToken,profile,done)=>{
   // Callback function after we get response from google
     console.log("Access Token -",accessToken);
     console.log("RefreshToken --",refreshToken);
     console.log("Profile Information --",profile);
     userAccount.findOne({googleId:profile.id})
     .then((currentUser) => {
         if(currentUser)
         {
             console.log("User Info already exist")
         }
         else{
            new userAccount({
                userName: profile.displayName ,
                googleId: profile.id
            }).save().then((newUser)=>{
               console.log("User Details saved to mongoose",newUser);
               return done(null,profile);
            }) ;
       
         }
     })
  
    
}));
