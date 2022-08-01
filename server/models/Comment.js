// intialize Comment Schema...

import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);

// export Comment model...
export default mongoose.model("Comment", CommentSchema);