const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserShort = require("./UserShort");
const Comment = require("./Comment");
const Rate = require("./Rate");

// Create Post Schema and model
const PostSchema = new Schema({

    user:   {type: UserShort,
            required:[true,'userShort for post is required']},
    
    image:  {type: String,
            required:[true,'image string for post is required']},
    
    comments: {type: [Comment]},

    rates: {type: [Rate]},

    date: {type: [Date],
            default:Date.now},
    
    requestFollowOthers: {type: [Number]},
});

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;