
const router = express.Router();
import express from "express";
import authController from "./auth.controller.js";

router.post("/signup", authController.signup);

const {
    loginUser,
    refreshToken
  } = require("./auth.controller");
  
  router.post("/login", loginUser);
  router.post("/refresh-token", refreshToken);

  export default router;