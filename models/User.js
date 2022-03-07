const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
	userId:{type:String,required:true},
    firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	profileType:{type:String,required:true,default:"Manual"}
});

const User = mongoose.model('Users', UserSchema,'users');
module.exports = User;