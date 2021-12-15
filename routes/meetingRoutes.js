const express = require('express');
const Meeting = require('../models/meetings');
const User = require('../models/users');
const {validateAlphaNumbericInput} = require('../controllers');
const router = express.Router();
const {uid} = require('uid');

// Create a new meeting

router.post('/new',async (request,response)=>{
    let {uid1,uid2,date} = request.body;
    uid1 = validateAlphaNumbericInput(uid1)
    uid2 = validateAlphaNumbericInput(uid2);
    if(!uid1&&!uid2){
        return response.status(422).json({'error':'Enter Valid uid'});
    }
    try{
        const uid1Details = await User.findOne({userId:uid1});
        const uid2Details = await User.findOne({userId:uid2});
        if(!uid1Details&&!uid2Details){
            return response.status(404).json({'error':'Uid does not exists'});
        }
        const payload = {
            userId1:uid1,
            username1:uid1Details.username,
            userId2:uid2,
            username2:uid2Details.username,
            meetingId:uid(20),
            date:date
        }
        await Meeting.create(payload)
        return response.json({'meetingId':payload.meetingId});
    }
    catch(e){
        return response.status(500).json({'error':"Internal Server Error"});
    }
})

// Get all meeting details

router.get('/all',async (request,response)=>{
    
    try{
        const responseFromDb = await Meeting.find().sort({createdAt:-1});
        const result = responseFromDb.map((item)=>{
            return{
                uid1:item.userId1,
                username1:item.username1,
                uid2:item.userId2,
                username2:item.username2,
                meetingId:item.meetingId,
                date:item.date
            }
        })
        return response.json(result);
    }
    catch(e){
        return response.status(500).json({'error':"Internal Server Error"});
    }
})

// Get meeting details

router.get('/:meetingId',async (request,response)=>{
    let meetingId = request.params.meetingId;
    meetingId = validateAlphaNumbericInput(meetingId);
    try{
        const responseFromDb = await Meeting.findOne({meetingId:meetingId});
        if(!responseFromDb){
            return response.status(404).send('Meeting Id does not exists');
        }
        const result = {
                uid1:responseFromDb.userId1,
                username1:responseFromDb.username1,
                uid2:responseFromDb.userId2,
                username2:responseFromDb.username2,
                meetingId:responseFromDb.meetingId,
                date:responseFromDb.date
            }
        return response.json(result);
    }
    catch(e){
        return response.status(500).json({'error':"Internal Server Error"});
    }
})

module.exports = router;