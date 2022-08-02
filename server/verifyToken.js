import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    // if not found token...
    if (!token) return next(createError(401, "not authenticated"));
    // verify token is valid...
    jwt.verify(token, process.env.JWT, (error, user) => {
        if (error) return next(createError(403, "token not valid"));
        req.user = user;
        next()
    })
}