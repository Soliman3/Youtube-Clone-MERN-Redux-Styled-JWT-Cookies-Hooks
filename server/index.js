import express from 'express';
// import Mongoose library to deal with mongoDB...
import mongoose from 'mongoose';
//import dotenv library for securety of my credentials...
import dotenv from 'dotenv';
//import Routes...
import userRoutes from './routes/usersRoute.js';
import commentRoutes from './routes/commentsRoute.js';
import videoRoutes from './routes/videosRoute.js';
import authRoutes from './routes/authenticationRoute.js';
import cookieParser from 'cookie-parser';
import cors from "cors"; // for handling cross origin requests

const app = express() // caching express library in variable "app"...
dotenv.config()  // to configuring dotenv

// connecting to database...
const CONNECTION = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
            console.log("connected to database")
        }).catch((error) => { throw error })
};

app.use(cors());
// allowing receiving json data...
app.use(express.json());  

// using cookie parser...
app.use(cookieParser())
// use Routes...
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/auth', authRoutes);

   
// middleware for hanndling errors...
app.use((error, req, res, next)=> {
    const status = error.status || 500;
    const message = error.message || 'something wrong of the entry';
    return res.status(status).json({success: false , status: status, message: message})
})
// listening to server on PORT 5000 and connect to database with function CONNECTION...
app.listen(5000, () => {
    CONNECTION()
    console.log('connected to server port 5000') // all console logs will be removed in production stage...
})