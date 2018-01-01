const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create userShort Schema and model
const UserShortSchema = new Schema({

    id:   {type: Number,
            required:[true,'id is required']},
    
    username: { 
        type: String,
        required:[true,'username is required']},
    
    profilePicture: {type: String},

    rate: {type: Number},

    gender: {type: String},
    
    birthDate: {type: Number},
});

const UserShort = mongoose.model('UserShort',UserShortSchema);

module.exports = UserShort;