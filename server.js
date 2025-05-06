const express = require("express");
const fs = require("fs");
const path = require("path");
const colour = require("colour");
const morgan = require("morgan");

const UserRouter = require("./routes/user.router");
// const SystemRouter = require("./routes/system.router");
const app = express();
app.use(express.json());
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "logs.txt"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
app.use("/users", UserRouter);
// app.use("/system", SystemRouter);

app.listen(3000, () => {
  console.log("Server Started".rainbow);
});
