const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserShort = require("./UserShort");
const Post = require("./Post");

// Create user Schema and model
const UserSchema = new Schema({
    user:   UserShort,
            required:[true,'userShort for user is required'],
    
    posts:  [Post],
    
    folllowing: [UserShort],

    folllowers: [UserShort],

    requestFollowMe: [UserShort],
    
    requestFollowOthers: {type: [Number]},
});

UserSchema.query.byName = function(name){
    
}
const User = mongoose.model('User',UserSchema);

module.exports = User;