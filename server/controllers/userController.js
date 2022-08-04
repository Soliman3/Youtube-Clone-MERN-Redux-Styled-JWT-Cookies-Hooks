import { createError } from "../error.js";
// import User Schema from models...
import User from "../models/User.js";
import Video from "../models/Video.js";



// update user function...
export const update = async (req, res, next) => {
    // check if user id that comes from verifyToken is equal to the requester id ...
    if (req.params.id === req.user.id) {
        try {
            // find user by id and set new value in request body and show the updated user...
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });

            // if success send json response by the updatedUser...
            res.status(200).json(updatedUser);
        } catch (error) {
            // if fails send error...
            next(error)
        }
    } else {
        // if verification failed send message with error number 403...
     return next(createError(403, "Warning!!! you can't update others account"))   
    }
};

// delete user function...
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            // find user by id and delete it...
            await User.findByIdAndDelete(req.params.id,);

            // if success send json response with success message...
            res.status(200).json("User has been deleted");
        } catch (error) {
            // if fails send error...
            next(error)
        }
        
    } else {
        // if verification failed send message with error number 403...
        return next(createError(403, "Warning!!! you can't delete others account"))
    }
};

// get user function...
export const getUser =async (req, res, next) => {
    try {
        // get user by id...
        const user = await User.findById(req.params.id)
        // exclude password in json return...
        const { password, ...other } = user._doc;
        res.status(200).json(other)
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// subscribe to specific channel...
export const subscribe = async (req, res, next) => {
    try {
            // find (signed in) user by id and then add (push) channel id in it's User Schema in subscribedChaneels array...
            await User.findByIdAndUpdate(req.user.id, {
                $push: { subscribedChannels: req.params.id },
            });
            // then find channel by it's id and then increment it's subscribers by 1...
            await User.findByIdAndUpdate(req.params.id, {
                $inc: { subscribers: 1 },
            });

            // and if success send json response with success message...
            res.status(200).json("subscription done")
    } catch (error) {
            // if fails send error...
            next(error);
        }

};

// unsubscribe from specific channel...
export const unsubscribe = async (req, res, next) => {
    try {
        // find user by id and then remove (pull) channel id from it's User Schema in subscribedChaneels array...
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedChannels: req.params.id },
        });
        // then find channel by it's id and decrement it's subscribers by 1...
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 },
        });
        // and if success send json response with success message...
        res.status(200).json("unsubscription done")
    } catch (error) {
        // if fails send error...
        next(error);
    }
};

// like a specific channel
export const like = async (req, res, next) => {
    // caching signed in user id to store in likes array in the Video Schema...
    const likeUserId = req.user.id;
    // caching videoId that comes from requested params...
    const videoId = req.params.videoId;
    try {
        // find video by video id > then add signed in userId in the like array only onetime > then remove userId from dislikes array...
        await Video.findByIdAndUpdate(videoId, { $addToSet: { likes: likeUserId }, $pull: { dislikes: likeUserId } });
        // and if success send json response with success message...
        res.status(200).json("video has been liked")
    } catch (error) {
        // if fails send error...

        next(error)
    }
};

// dislike specific channel
export const dislike = async (req, res, next) => {
    // caching signed in user id to store in dislikes array in the Video Schema...
    const dislikeUserId = req.user.id;
    // caching videoId that comes from requested params...
    const videoId = req.params.videoId;
    try {
        // find video by video id > then add signed in userId in the dislike array only onetime > then remove userId from likes array...
        await Video.findByIdAndUpdate(videoId, { $addToSet: { dislikes: dislikeUserId }, $pull: { likes: dislikeUserId } });
        // and if success send json response with success message...
        res.status(200).json("video has been disliked")
    } catch (error) {
        // if fails send error...
        next(error)
    }
};
