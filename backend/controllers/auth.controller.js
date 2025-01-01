const { userService, tokenService, authService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res) => {
   
  let response = await userService.createUser(req.body);
  let token = await tokenService.generateToken(response);
  return res.status(201).send({ response, token });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  let response = await authService.loginWithEmailandPassword(email, password);
  let token = await tokenService.generateToken(response);

  return res.status(200).send({ response, token });
});

module.exports = {
  register,
  login,
};