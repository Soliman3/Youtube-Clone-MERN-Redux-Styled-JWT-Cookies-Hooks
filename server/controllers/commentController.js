import { createError } from '../error.js';
// import Comment & Video Schema from models dir...
import Comment from '../models/Comment.js';
import Video from '../models/Video.js';


// Add Video Comment...
export const addVideoComment = async (req, res, next) => {
    // take a new Comment object from model and pass new params > then Caching it in Constant...
    const newComment = new Comment({ userId: req.user.id, ...req.body });
    try {
        // saving new comment in db > then Caching in constant...
        const savedNewComment = await newComment.save();
        // if success > send constant as response json...
        res.status(200).json(savedNewComment)
    } catch (error) {
        // if fails > send error...
        next(error)
    }
};

// Delete Video Comment...
export const deleteComment = async (req, res, next) => {
    try {
        // first, find Comments & video by requested id...
        const comment = await Comment.findById(req.params.id);
        const video = await Video.findById(req.params.id);
        // then, check if signed in user id equal comment id or Video creator...
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            // if true, find the Comment by requested id and delete...
            await Comment.findByIdAndDelete(req.params.id);

            // if success > send success messge as response json...
            res.status(200).json("Comment deleted")
        } else {
            // if condition false, return error Warning!! message...
            return next(createError(403, "Warning!! you can't delete other comments"))
        }
        
    } catch (error) {
         // if fails > send error...
        next(error)
    }
};

// Get all Video Comments...
export const getVideoComments = async (req, res, next) => {
    try {
        // Find all video comments by videoId through Comment Schema > then Cashing in constant...
        const targetComment = await Comment.find({ videoId: req.params.videoId });
        // if success > send constant as response json...
        res.status(200).json(targetComment);
    } catch (error) {
         // if fails > send error...
        next(error)
    }
};