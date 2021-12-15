const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userModel = new schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    userId:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamps:{createdAt:true,updatedAt:false}});

module.exports = mongoose.model('User',userModel);