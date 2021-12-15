const express = require('express')
require('dotenv/config');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const meetingRoutes = require('./routes/meetingRoutes');

const app = express();
app.use(express.json());

app.use('/user',userRoutes);
app.use('/meetings',meetingRoutes);


const initializeAppAndDb = () =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then((res)=>{
        app.listen('3000',()=>{
            console.log('Server started and Database Connected!');
        })
    })
    .catch((e)=>{
        console.log(`Error: ${e}`);
    })
}

initializeAppAndDb();
