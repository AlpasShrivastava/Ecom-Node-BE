import express from "express";
import * as productController from "./product.controller.js";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);

export default router;