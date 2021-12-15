const express = require('express');
const User = require('../models/users');
const {uid}  = require('uid');
const Meeting = require('../models/meetings');
const router = express.Router();
const {validateAlphaNumbericInput, getMeetingDetails} = require('../controllers');

// Get all User details 

router.get('/all',async (request,response)=>{
    try{
        const userDetails = await User.find()
        const result = userDetails.map((item)=>{
            return{
                username:item.username,
                userId:item.userId
            }
        })
        response.json({data:result});
    }
    catch(e){
        return response.status(500).json({"message":"Internal Server Error"});
    }

});


// Register a new User

router.post('/new',async (request,response)=>{
    let username = request.body.username;
    username =validateAlphaNumbericInput(username);
    if(!username){
        return response.status(422).json({'message':'Username must be Alphanumeric'})
    }
    try{
        const checkIfUsernamePresent = await User.findOne({username:username});
        if(checkIfUsernamePresent===null){
            const payload  = {
                username:username,
                userId:uid(16)
            }
            try{    
                await User.create(payload);
                return response.json({uid:payload.userId});
            }
            catch(e){
                return response.status(500).json({"message":"Internal Server Error"});
            }

        }
        else{
            return response.status(400).json({"message":"Username already exists"});
        }
    }
    catch(e){
        return response.status(500).json({"message":"Internal Server Error"});
    }
})

// Get user details 

router.get('/:username',async (request,response)=>{
    let username = request.params.username;
    username = validateAlphaNumbericInput(username);
    if(!username){
        return response.status(422).json({"message":"Enter valid Username"});
    }
    try{
        const userDetail = await User.findOne({username:username});
        if(userDetail!==null){
            const result = {
                username:userDetail.username,
                userId:userDetail.userId
            }
            return response.json({data:result});
        }
        else{
            return response.status(404).json({"message":"Username does not exists"});
        }
    }
    catch(e){
        return response.status(500).json({"message":"Internal Server Error"});
    }
})

// Get user meetings

router.get('/:username/meetings',async (request,response)=>{
    let username = request.params.username;
    username = validateAlphaNumbericInput(username);
    if(!username){
        return response.status(422).json({"message":"Enter valid Username"});
    }
    try{
        const checkIsUserPresent = await User.findOne({username:username})
        if(!checkIsUserPresent)
            return response.status(404).json({"message":"Username does not exists"});

        let meetingsResult = await Meeting.find({$or:[{username1:username},{username2:username}]});
        meetingsResult = meetingsResult.map((item)=>(getMeetingDetails(item)));
        response.send({data:meetingsResult});
    }
    catch(e){
        return response.status(501).json({"message":"Internal Server Error"});
    }
})


module.exports = router;