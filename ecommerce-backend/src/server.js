require("dotenv").config();
 // Import the app.js
import app from "./app.js";

const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected!'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});