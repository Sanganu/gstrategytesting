const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    googleId:String
}
// ,{
//     collection: 'UserInfo'
// }
);

const userAccount= mongoose.model('userAccount',userSchema);

module.exports = userAccount;
