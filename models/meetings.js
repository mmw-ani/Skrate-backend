const mongoose = require('mongoose');

const schema = mongoose.Schema;

const meetingSchema = new schema({
    userId1:{
        type:String,
        required:true,
    },
    username1:{
        type:String,
        required:true,
    },
    userId2:{
        type:String,
        required:true,
    },
    username2:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    meetingId:{
        type:String,
        required:true,
    }
},{timestamps:{createdAt:true,updatedAt:false}});

module.exports = mongoose.model('Meeting',meetingSchema);