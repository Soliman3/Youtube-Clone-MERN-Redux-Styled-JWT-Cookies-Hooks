// intialize User Schema...

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
    },
    subscribers: {
        type: Number,
        default: 0,
    },
    subscribedChannels: {
        type: [Sting],
    },
},
    { timestamps: true }
);

// export User model...
export default mongoose.model("User", UserSchema)