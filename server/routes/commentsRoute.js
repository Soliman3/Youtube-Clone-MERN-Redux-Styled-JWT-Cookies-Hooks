import express from 'express';
import { addVideoComment, deleteComment, getVideoComments } from '../controllers/commentController.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// add Video Comment...
router.post('/', verifyToken, addVideoComment);

// delete video comment...
router.delete('/:id', verifyToken, deleteComment);

// get video comments...
router.get('/:videoId', getVideoComments);



export default router;