import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from '../controllers/userController.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

// update user
router.put("/:id", verifyToken, update);
// delete user
router.delete("/:id", verifyToken, deleteUser);
// get user
router.get("/find/:id", getUser);
// subscribe user
router.put("/sub/:id", subscribe);
// unsubscribe user
router.put("/unsub/:id", unsubscribe);
// like video
router.put("/like/:videoId", like);
// dislike video
router.put("/dislike/:videoId", dislike);

export default router;