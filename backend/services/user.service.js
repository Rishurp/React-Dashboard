const { User } = require("../models");
const bcrypt = require("bcryptjs");


const getUser = async (role,id) => {

    if(role === "admin")
    {
        return await User.find()
    }
    else {
        const user = await User.findById(id);
        return user;
    } 
};

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const createUser = async (userInfo) => {
  const { username, email, password, role } = userInfo;

  if (await User.findOne({ email })) {
    throw new ApiError(200, "Email is already taken.");
  }

  const hashPassword = await encryptPassword(password);
  const userObj = {
    username: username,
    email: email,
    password: hashPassword,
    role : role
  };

  return await User.create(userObj);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  getUser,
  createUser,
  getUserByEmail,
};