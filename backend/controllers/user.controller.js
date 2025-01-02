const { userService } = require("../services");
const catchAsync = require("../utils/catchAsync");

const getUser = catchAsync(async (req, res) => {
  try {
    let user = await userService.getUser(req.role, req.id);
    return res.status(200).send(user);
  } catch (error) {
    return res
      .status(400)
      .send({ message: "Something went wrong", error: error.message });
  }
});

module.exports = {
  getUser,
};
