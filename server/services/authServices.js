const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const RefreshToken = require("../models/refreshToken");

async function register(email, password, role) {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, role });
    return await newUser.save();
  } catch (error) {
    throw new Error("Error while registration user, Try Again");
  }
}

async function login(email, password) {
  console.log({ email, password });
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    throw new Error("User Not Found");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid Password");
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return { accessToken, refreshToken, user };
}

function generateAccessToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
}

async function generateRefreshToken(user) {
    let refreshToken = await RefreshToken.findOne({userId: user._id})
    if(!refreshToken){
        console.log("hello")
        const newToken = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.REFRESH_TOKEN_SECRET
          );
        refreshToken =  await new RefreshToken({ token: newToken, userId: user._id }).save();
        return newToken;
    }
  return refreshToken.token;
}

function verifyAccessToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}

function verifyRefreshToken(token) {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
}

async function refreshAccessToken(refreshToken) {
  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  const existingToken = await RefreshToken.findOne({ token: refreshToken });
  if (!existingToken) {
    throw new Error("Refresh token not found");
  }
  const user = await User.findById(decoded.id);
  if (!user) {
    throw new Error("User not found");
  }
  return generateAccessToken(user);
}

module.exports = {
  register,
  login,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  refreshAccessToken,
};
