const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true, min:6}, 
    dob: {type: String, required: true},
    city: {type: String, required: true}, 
    country: {type: String, required: true}, 
    gender: {type: String, required: true} 
});


let UserModel= mongoose.model('User', UserSchema);

module.exports = UserModel;