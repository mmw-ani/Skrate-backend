const express = require('express')
require('dotenv/config');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const meetingRoutes = require('./routes/meetingRoutes');

let PORT = process.env.PORT || 3001

const app = express();
app.use(express.json());

app.use('/user',userRoutes);
app.use('/meetings',meetingRoutes);


const initializeAppAndDb = () =>{
    mongoose.connect(process.env.MONGODB_URI)
    .then((res)=>{
        app.listen(PORT,()=>{
            console.log('Server started and Database Connected!');
        })
    })
    .catch((e)=>{
        console.log(`Error: ${e}`);
    })
}

initializeAppAndDb();
