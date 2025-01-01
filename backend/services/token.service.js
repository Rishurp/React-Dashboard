const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

dotenv.config();

const generateToken = async (user) => {
  const secretKey = process.env.secretKey;
  const payload = {
    userId: user._id,
    role : user.role,
    time: new Date(),
  };
  const token = jwt.sign(payload, secretKey, {
    expiresIn: process.env.expiresInMinutes,
  });
  return token;
};

module.exports = {
  generateToken,
};