const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");

router.post("/signup", authController.signup);

const {
    loginUser,
    refreshToken
  } = require("./auth.controller");
  
  router.post("/login", loginUser);
  router.post("/refresh-token", refreshToken);

module.exports = router;