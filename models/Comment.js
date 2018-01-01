const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserShort = require("./UserShort");

// Create Post Schema and model
const CommentSchema = new Schema({

    user:   {type: UserShort,
            required:[true,'UserShort for comment is required']},
    
    comment:  {type: String,
            required:[true,'comment string for comment is required']},
    
    date: {type: [Date],
            default:Date.now}
});

const Comment = mongoose.model('Comment',CommentSchema);

module.exports = Comment;