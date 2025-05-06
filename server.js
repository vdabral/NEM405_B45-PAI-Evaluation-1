const express = require("express");
const UserRouter = require("./routes/user.router");
const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.listen(3000, () => {
  console.log("Server Started");
});
