import express from 'express';
import { verifyToken } from '../verifyToken.js';
import {
    addVideo,
    deleteVideo,
    getVideo,
    randomVideos,
    searchVideos,
    subscribedChannelVideos,
    videoTags,
    videoViews,
    trendVideos,
    updateVideo
} from '../controllers/videoController.js';

const router = express.Router();

// add video Route...
router.post("/", verifyToken, addVideo);

// update video Route...
router.put("/:id", verifyToken, updateVideo);

// delete video Route...
router.delete("/:id", verifyToken, deleteVideo);

// get video Route without verification as anyone can search and get videos without signed in...
router.get("/find/:id", getVideo);

// update video views number Route...
router.put("/views/:id", videoViews);

// get subscribed channel videos Route...
router.get("/sub", verifyToken, subscribedChannelVideos)

// get random videos Route...
router.get("/random", randomVideos)

// get video by tags...
router.get("/tags", videoTags)

// search videos by title...
router.get("/search", searchVideos)

// get trend videos Route...
router.get("/trend", trendVideos)



export default router;