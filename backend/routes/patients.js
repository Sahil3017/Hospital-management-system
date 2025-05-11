const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// Add new patient
router.post("/", async (req, res) => {
  console.log("📥 Request Body:", req.body); // Add this line for debugging
  try {
    const { name, age, gender, contact, disease, doctor } = req.body;
    const newPatient = new Patient({
      name,
      age,
      gender,
      contact,
      disease,
      doctor,
    });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all patients
router.get("/", async (req, res) => {
  try {
    const patients = await Patient.find().populate("doctor");
    res.json(patients);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get single patients
router.get("/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id).populate("doctor");
    if (!patient) return res.status(404).json({ message: "Patient not found" });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update patients
router.put("/:id", async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete patients
router.delete(":id", async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.json({ message: "Patient deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
