import express from 'express';
import { testVideo } from '../controllers/videoController.js';

const router = express.Router();


router.get("/video", testVideo);




export default router;