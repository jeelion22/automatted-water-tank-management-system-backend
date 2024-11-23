const express = require("express");
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

const userRouter = express.Router();

userRouter.post("/create", userController.register);
userRouter.post("/login", userController.login);

userRouter.get("/me", auth.isAuth, userController.me);

module.exports = userRouter;
