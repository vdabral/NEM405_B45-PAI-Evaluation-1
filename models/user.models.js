const fs = require("fs");
const path = require("path");
const filePath = (__dirname, "../db.json");
const getData = () => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let users = data.users;
  return { data, users };
};

const addOrUpdateUser = (data) => {
  fs.writeFileSync("../db.json", JSON.stringify(data));
};

module.exports = { getData, addOrUpdateUser };
