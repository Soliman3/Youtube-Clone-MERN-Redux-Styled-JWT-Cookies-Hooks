import express from 'express';
import { signin, signup } from '../controllers/authenticationController.js';

const router = express.Router();


// Create User...
router.post('/signup', signup)

// Sign In...
router.post('/signin', signin)

// Google Authentication...
router.post('/google', )


export default router;