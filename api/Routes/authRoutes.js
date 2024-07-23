const express = require("express");
const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../App/Controllers/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

module.exports = router;
