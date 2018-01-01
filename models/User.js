const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserShort = require("./UserShort");
const Post = require("./Post");

// Create user Schema and model
const UserSchema = new Schema({
    // first_name: {
    //     type: String,
    //     required:[true,'first name is required']
    // },
    // last_name:{
    //     type: String,
    //     required:[true,'last name is required']
    // }
    user:   {type: UserShort,
            required:[true,'userShort for user is required']},
    
    posts:  {type: [Post]},
    
    folllowing: {type: [UserShort]},

    folllowers: {type: [UserShort]},

    requestFollowMe: {type: [UserShort]},
    
    requestFollowOthers: {type: [Number]},
});

const User = mongoose.model('User',UserSchema);

module.exports = User;