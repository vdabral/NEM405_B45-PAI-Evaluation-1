const express = require("express");
const {
  getAllUser,
  getUser,
  addUser,
  deleteUser,
} = require("../controllers/users.controllers");
const { getIncomingUser } = require("../middleware/user.middleware");
const UserRouter = express.Router();

UserRouter.get("/", getAllUser);
UserRouter.get("/:userId", getUser);
UserRouter.post("/add", getIncomingUser, addUser);
UserRouter.delete("/delete-user/:userId", deleteUser);

module.exports = UserRouter;
