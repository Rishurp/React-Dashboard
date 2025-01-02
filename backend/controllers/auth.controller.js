const { userService, tokenService, authService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res) => {
  try {
    let response = await userService.createUser(req.body);
    let token = await tokenService.generateToken(response);
    return res.status(201).send({ response, token });
  } catch (error) {
    console.log(error)
    return res
      .status(400)
      .send({ message: "Something went wrong", error: error });
  } 
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  try {
    let response = await authService.loginWithEmailandPassword(email, password);
    let token = await tokenService.generateToken(response);
    return res.status(200).send({ response, token });
  } catch (error) {
    return res.status(400).send({ message: "Invalid Email or Password" });
  }
});

module.exports = {
  register,
  login,
};
