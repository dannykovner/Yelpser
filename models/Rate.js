const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserShort = require("./UserShort");

// Create Post Schema and model
const RateSchema = new Schema({

    userId: {type:Number},
    rate:{type:Number}
});

const Rate = mongoose.model('Rate',RateSchema);

module.exports = Rate;