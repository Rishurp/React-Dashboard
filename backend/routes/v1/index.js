const express = require("express");
const authRoutes = require("./auth.route");
const userRoutes = require("./user.route")

const mainRouter = express.Router();

mainRouter.use("/auth",authRoutes);
mainRouter.use("/users",userRoutes)
module.exports = mainRouter;