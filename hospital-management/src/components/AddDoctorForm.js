import React, { useState } from "react";
import axios from "axios";

const AddDoctorForm = () => {
  const [doctor, setDoctor] = useState({
    name: "",
    specialty: "",
    contact: "",
    experience: "",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/doctors", doctor);
      alert("Doctor added successfully!");
      setDoctor({ name: "", specialty: "", contact: "", experience: "" });
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Failed to add doctor");
    }
  };

  return (
    <div>
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={doctor.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="text"
          name="specialty"
          value={doctor.specialty}
          onChange={handleChange}
          placeholder="Specialty"
          required
        />
        <br />
        <input
          type="text"
          name="contact"
          value={doctor.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
        />
        <br />
        <input
          type="number"
          name="experience"
          value={doctor.experience}
          onChange={handleChange}
          placeholder="Experience (in years)"
          required
        />
        <br />
        <button type="submit">Add Doctor</button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
