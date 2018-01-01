const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set express app  
const app = express();

// Connect to mongoDB
mongoose.connect('mongodb://localhost/yelp');
mongoose.Promise = global.Promise;
console.log("connected to mongoDB");

app.use(bodyParser.json());

// Initialize routes
app.use(require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err.message);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(4000,function(){
    console.log("now listening to requests");    
});