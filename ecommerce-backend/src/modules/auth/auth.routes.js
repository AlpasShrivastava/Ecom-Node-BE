import express from "express";
import { signup, loginUser, refreshToken } from "./auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", loginUser);
router.post("/refresh-token", refreshToken);

export default router;