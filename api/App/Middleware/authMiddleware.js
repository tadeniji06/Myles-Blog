const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req
      .header("Authorization")
      .replace("Bearer ", "");
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Please authenticate first" });
  }
};

module.exports = authMiddleware;
