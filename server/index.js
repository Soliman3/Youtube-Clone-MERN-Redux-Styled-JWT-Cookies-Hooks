import express from 'express';
// impoet Mongoose library to deal with mongoDB...
import mongoose from 'mongoose';
//import dotenv library for securety of my credentials...
import dotenv from 'dotenv';


const app = express() // caching express library in variable "app"...
dotenv.config()  // to configuring dotenv

// connecting to database...
const CONNECTION = () => {
    mongoose.connect(process.env.MONGO)
        .then(() => {
        console.log("connected to database")
    }).catch((error)=>{throw error})
}

// listening to server on PORT 5000 and connect to database with function CONNECTION...
app.listen(5000, () => {
    CONNECTION()
    console.log('connected to server port 5000') // all console logs will be removed in production stage...
})