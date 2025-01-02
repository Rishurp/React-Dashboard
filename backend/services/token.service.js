const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const generateToken = async (user) => {
  const secret = process.env.SECRET_KEY;
  const payload = {
    userId: user._id,
    role: user.role,
    time: new Date(),
  };
  const token = jwt.sign(payload, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

module.exports = {
  generateToken,
};
