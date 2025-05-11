const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const patientRoutes = require("./routes/patients");
const doctorRoutes = require("./routes/doctors");

// Use routes
app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/hms", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// Server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
