import express from 'express';
import { testComment } from '../controllers/commentController.js';

const router = express.Router();


router.get('/comment', testComment);




export default router;