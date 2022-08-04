import { createError } from '../error.js';
// import Comment & Video Schema from models dir...
import User from '../models/User.js';
import Video from '../models/Video.js';


// add video function...
export const addVideo = async (req, res, next) => {
    // take a new Video object from model and pass new params > then Caching it in Constant...
    const newVideo = new Video({ userId: req.user.id, ...req.body });
    try {
        // then save the newVideo and then caching it in constant...
        const savedNewVideo = await newVideo.save();
        // if success > send constant as json response...
        res.status(200).json(savedNewVideo);
    } catch (error) {
        // if fails send error...
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

            // And send constant as json response...
            res.status(200).json(updatedVideo);
        } else { return next(createError(403, " Warning!! you can't update other videos")) }
    } catch (error) {
        // if fails send error...
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
            // and send json response with success message...
            res.status(200).json("Video deleted successfully");
        } else { return next(createError(403, " Warning!! you can't update other videos")) }
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// get video function...
export const getVideo = async (req, res, next) => {
    try {
        // find video by requested params id then caching in constant...
        const targetVideo = await Video.findById(req.params.id);
        // if success send constant as json response...
        res.status(200).json(targetVideo);
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// count video views function...
export const videoViews = async (req, res, next) => {
    try {
        // find video by requested id then update views by incrementing it by 1...
        await Video.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } });
        // and if success send json response with success message...
        res.status(200).json("views incremented by 1");
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// Get Subscribed Channel Videos function...
export const subscribedChannelVideos = async (req, res, next) => {
    try {
        // find signed in user id and then caching in constant...
        const user = await User.findById(req.user.id);
        // find subscribedChannels in the constant user as its a list...
        const channels = user.subscribedChannels;
        // loop throw subscirbed channels and return channels throw search inside their videos userId  that contain channelId...
        const list = await Promise.all(channels.map((channelId) => { return Video.find({ userId: channelId }) }));
        // if success send constant as response json with js flat & sort fuctions to handle response...
        res.status(200)
            .json(list
                // to handle response syntax of array
                .flat()
                // to sort response alphabetical order...
                .sort((a, b) => a.createdAt - b.createdAt)
            );
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// Get Random Videos function...
export const randomVideos = async (req, res, next) => {
    try {
        // random get 30 videos from db by using sample method > then caching in constatn...
        const sampleVideos = await Video.aggregate([{ $sample: { size: 30 } }]);
        // if success send constant as json response...
        res.status(200).json(sampleVideos);
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// Get Videos by it's Tags...
export const videoTags = async (req, res, next) => {
    const tags = req.query.tags
    .split(",")
    try {
        const videos = await Video.find({ tags: { $in: tags } }).limit(15);
        // if success send constant as json response...
        res.status(200).json(videos)
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// Get Videos by title...
export const searchVideos = async (req, res, next) => {
    const search = req.query.q 

    try {
        const videos = await Video.find({ title: { $regex: search, $options: 'i' } }).limit(35);
        // if success send constant as json response...
        res.status(200).json(videos)    
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

// Get Trend Videos function...
export const trendVideos = async (req, res, next) => {
    try {
        const mostViewsVideos = await Video.find().sort({ views: -1 });
        // if success send constant as json response...
        res.status(200).json(mostViewsVideos);
    } catch (error) {
        // if fails send error...
        next(error)
    }
};

