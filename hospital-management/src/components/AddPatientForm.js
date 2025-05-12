// src/components/AddPatientForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    disease: "",
    doctor: "",
  });

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctors")
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/patients", formData);
      alert("Patient added successfully!");
      setFormData({
        name: "",
        age: "",
        gender: "",
        contact: "",
        disease: "",
        doctor: "",
      });
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("Failed to add patient.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <h3>Add New Patient</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <br />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        required
      />
      <br />
      <input
        type="text"
        name="disease"
        placeholder="Disease"
        value={formData.disease}
        onChange={handleChange}
        required
      />
      <br />
      <select
        name="doctor"
        value={formData.doctor}
        onChange={handleChange}
        required
      >
        <option value="">Assign Doctor</option>
        {doctors.map((doc) => (
          <option key={doc._id} value={doc._id}>
            {doc.name}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
