var mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id:Number,
    username:String,
    password:String,
    email:String,
    role:String,
    token:String,
    favorites:[Number],

});

const user = mongoose.model("User", userSchema);

module.exports = mongoose.model('User');