const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = (req, res, next) => {
  let token = req.headers.authorization;
  try {
    const response = jwt.verify(token.split(" ")[1], process.env.secretkey);
    req.role = response.role;
    req.id = response.userId
  
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = auth;