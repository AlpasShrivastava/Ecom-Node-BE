import express from "express";

const app = express();

app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("API Running");
});

// Auth routes
import authRoutes from "./modules/auth/auth.routes.js";
app.use("/api/auth", authRoutes);

// Category routes
import categoryRoutes from "./modules/category/category.routes.js";
app.use("/api/categories", categoryRoutes);

// Product routes
import productRoutes from "./modules/product/product.routes.js";
app.use("/api/products", productRoutes);

export default app;