const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getUser = catchAsync(async (req, res) => {
  let user = await userService.getUser(req.role,req.id);
  return res.status(200).send(user);
});


module.exports = {
  getUser
};