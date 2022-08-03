import { createError } from "../error.js";
import User from "../models/User.js";


// update user function...
export const update = async (req, res, next) => {
    // check if user id that comes from verifyToken is equal to the requester id ...
    if (req.params.id === req.user.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },{ new: true})
            res.status(200).json(updatedUser);
        } catch (error) {
            next(error)
        }
    } else {
     return next(createError(403, "Warning!!! you can't update others account"))   
    }
};

// delete user function...
export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id,);
            res.status(200).json("User has been deleted");
        } catch (error) {
            next(error)
        }
        
    } else {
        return next(createError(403, "Warning!!! you can't delete others account"))
    }
};

// get user function...
export const getUser =async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...other } = user._doc
        res.status(200).json(other)
    } catch (error) {
        next(error)
    }
};

// subscribe to specific channel...
export const subscribe = async (req, res, next) => {
        try {
            await User.findByIdAndUpdate(req.user.id, {
                $push: { subscribedChannels: req.params.id },
            });
            await User.findByIdAndUpdate(req.params.id, {
                $inc: { subscribers: 1 },
            });
            res.status(200).json("subscription done")
        } catch (error) {
            next(error);
        }

};

// unsubscribe from specific channel...
export const unsubscribe = async (req, res, next) => {
    try {
        await User.findByIdAndUpdate(req.user.id, {
            $pull: { subscribedChannels: req.params.id },
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 },
        });
        res.status(200).json("unsubscription done")
    } catch (error) {
        next(error);
    }
};

// like a specific channel
export const like = async (req, res, next) => {

};

// dislike specific channel
export const dislike = async (req, res, next) => {
    
};
