module.exports = {
    session: {
        cookieKey: "googlestrategycookiesetup"
    }
}

// CookieKey : 

// Cookie session is used to control the user cookie session
// The passport serialize stores the userid in cookie and sends to
//browser, the cookieKey is the pharse phrase to encrypt the user id and send it to browser
// the deserialize receives the id from browser in encrypted form, it
// converts to encrypted user id useing parse phrase and 
//matches to the user information and retrieves the user data/

