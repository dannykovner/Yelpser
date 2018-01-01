const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get the list of users from db
router.get('/users',function(req,res){
    res.send({type:'GET'});
});

// Add a new user to db
router.post('/users',function(req,res,next){
    // Save to db
    User.create(req.body).then(function(user){
        // send back as response the user itself
        res.send(user);
        console.log('user saved');
    }).catch(next);
});

// Update a user in db
router.put('/users/:id',function(req,res){
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        User.findOne({_id:req.params.id}).then(function(user){
            res.send(user);
        });
    });
});

// Delete user from db
router.delete('/users/:id',function(req,res,next){
    User.findByIdAndRemove({_id:req.params.id}).then(function(user){
        res.send(user);
        console.log('user id: '+ req.params.id +' has been deleted');
    });
});

module.exports = router;