const { getData, addOrUpdateUser } = require("../models/user.models");

const getAllUser = (req, res) => {
  let data = getData().data;
  let users = data.users;
  res.status(200).json({ message: "User List", users });
};
const getUser = (req, res) => {
  let userId = req.params.userId;
  let data = getData().data;
  let users = data.users;
  let foundIndex = users.findIndex((el) => el.id == userId);
  if (foundIndex == -1) {
    res.json({ message: "User Not Found" });
  } else {
    let filteredUsers = users.filter((user, id) => user.id == userId);
    res.status(200).json({ message: "User found", filteredUsers });
  }
};
const addUser = (req, res) => {
  let data = getData().data;
  let users = data.users;
  let id = users[users.lemgth - 1].id + 1;
  let userTobeUpdated = { ...req.body, id };
  users.push(userTobeUpdated);
  res.status(200).send({ message: "User Add Succesfully" });
};
const deleteUser = (req, res) => {
  let userId = req.params.userId;
  let data = getData().data;
  let users = data.users;
  let foundIndex = users.findIndex((el) => el.id == userId);
  if (foundIndex == -1) {
    res.json({ message: "User Not Found" });
  } else {
    let filteredUsers = users.filter((user, id) => user.id != userId);
    data.users = filteredUsers;
    addOrUpdateUser(data);
    res.status(200).json({ message: "User Deleted Succesfully" });
  }
};
module.exports = { getAllUser, getUser, deleteUser, addUser };
