const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.send("API Running");
});

// Auth routes
const authRoutes = require("./modules/auth/auth.routes");
app.use("/api/auth", authRoutes);

module.exports = app;