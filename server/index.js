import express from 'express';
// import Mongoose library to deal with mongoDB...
import mongoose from 'mongoose';
//import dotenv library for securety of my credentials...
import dotenv from 'dotenv';
//import Routes...
import userRoutes from './routes/usersRoute.js';
import commentRoutes from './routes/commentsRoute.js';
import videoRoutes from './routes/videosRoute.js';

const app = express() // caching express library in variable "app"...
dotenv.config()  // to configuring dotenv

// connecting to database...
const CONNECTION = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log("connected to database")
        }).catch((error) => { throw error })
};


// use Routes...
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/videos', videoRoutes);


// listening to server on PORT 5000 and connect to database with function CONNECTION...
app.listen(5000, () => {
    CONNECTION()
    console.log('connected to server port 5000') // all console logs will be removed in production stage...
})