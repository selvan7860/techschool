const authService = require('../services/authServices');
const User = require('../models/user');

async function registerController(req, res, next){
    const {email, password, role} = req.body;
    try{
        const user = await authService.register(email, password, role);
        res.status(201).json({message: 'User Created Successfully', user});
    }catch(error){
        next(error);
    }
}

async function loginController(req, res, next){
    const {email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const accessToken = await authService.generateAccessToken(user);
        const refreshToken = await authService.generateRefreshToken(user);
        res.json({accessToken, refreshToken, user})
    } catch (error) {
        next(error);
    }
}

async function refreshAccessTokenController(req, res, next) {
    const { refreshToken } = req.body;
    try {
        const accessToken = await authService.refreshAccessToken(refreshToken);
        res.json({ accessToken });
    } catch (error) {
        next(error);
    }
}
module.exports = {registerController,loginController, refreshAccessTokenController};