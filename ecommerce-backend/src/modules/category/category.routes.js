import express from "express";
import Category from "./category.model.js";

const router = express.Router();

// Create category (TEMP simple API)
router.post("/", async (req, res) => {
  const category = await Category.create(req.body);
  res.json(category);
});

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

export default router;