import express from 'express';
import { testUser, testUserName } from '../controllers/userController.js';

const router = express.Router();



router.get('/user', testUser);
router.get('/username', testUserName);


export default router;