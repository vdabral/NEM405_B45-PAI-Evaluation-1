const getIncomingUser = (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.json({ message: "Improper Request" });
  } else {
    next();
  }
};
module.exports = { getIncomingUser };
