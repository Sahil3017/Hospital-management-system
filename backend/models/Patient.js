const mongoose = require("mongoose");

// Patient schema
const patientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contact: { type: String, required: true },
    disease: { type: String, required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }, // Reference to Doctor
  },
  { timestamps: true }
);

// Patient model
const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
