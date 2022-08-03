import { createError } from '../error.js';
import User from '../models/User.js';
import Video from '../models/Video.js';


// add video function...
export const addVideo = async (req, res, next) => {
    const newVideo = new Video({ userId: req.user.id, ...req.body });
    try {
        const savedNewVideo = await newVideo.save();
        res.status(200).json(savedNewVideo);
    } catch (error) {
        next(error)
    }
};

// update video function...
export const updateVideo = async (req, res, next) => {
    try {
        const searchedVideo = await Video.findById(req.params.id);
        if (!searchedVideo) return next(createError(403, "Video not found"));
        if (req.user.id === searchedVideo.userId) {
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.status(200).json(updatedVideo);
        } else { return next(createError(403, " Warning!! you can't update other videos")) }
    } catch (error) {
        next(error)
    }
};

// delete video function...
export const deleteVideo = async (req, res, next) => {
    try {
        const searchedVideo = await Video.findById(req.params.id);
        if (!searchedVideo) return next(createError(403, "Video not found"));
        if (req.user.id === searchedVideo.userId) {
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("Video deleted successfully");
        } else { return next(createError(403, " Warning!! you can't update other videos")) }
    } catch (error) {
        next(error)
    }
};

// get video function...
export const getVideo = async (req, res, next) => {
    try {
        const targetVideo = await Video.findById(req.params.id);
        res.status(200).json(targetVideo);
    } catch (error) {
        next(error)
    }
};

// count video views function...
export const videoViews = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
        res.status(200).json("views incremented by 1");
    } catch (error) {
        next(error)
    }
};

// Get Subscribed Channel Videos function...
export const subscribedChannelVideos = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        const channels = user.subscribedChannels;

        const list = await Promise.all(channels.map((channelId) => { return Video.find({ userId: channelId }) }));
        res.status(200)
            .json(list
                .flat()
                .sort((a, b) => a.createdAt - b.createdAt)
            );
    } catch (error) {
        next(error)
    }
};

// Get Random Videos function...
export const randomVideos = async (req, res, next) => {
    try {
        const sampleVideos = await Video.aggregate([{ $sample: { size: 30 } }]);
        res.status(200).json(sampleVideos);
    } catch (error) {
        next(error)
    }
};

// Get Videos by it's Tags...
export const videoTags = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
};

// Get Videos by title...
export const searchVideos = async (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
};

// Get Trend Videos function...
export const trendVideos = async (req, res, next) => {
    try {
        const mostViewsVideos = await Video.find().sort({ views: -1 });
        res.status(200).json(mostViewsVideos);
    } catch (error) {
        next(error)
    }
};

