const mongoose = require("mongoose");

// Doctor schema
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    contact: { type: String, required: true },
    experience: { type: Number, required: true },
  },
  { timestamps: true }
);

// Doctor model
const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
