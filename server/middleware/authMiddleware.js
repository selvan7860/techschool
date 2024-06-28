const verifyAccessToken = require('../services/authServices');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

const authorize = (...allowedRoles) => {
    return (req, res, next) => {
        const { role } = req.user;
        console.log('Authenticated user role:', role);
        console.log('Allowed roles:', allowedRoles);


        // Check if the user's role is included in the allowed roles
        if (allowedRoles.includes(role)) {
            next(); // User is authorized, proceed to next middleware or route handler
        } else {
            res.status(403).json({ error: 'Forbidden' });
        }
    };
};


module.exports = {authenticateToken, authorize};