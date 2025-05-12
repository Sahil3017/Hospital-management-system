import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdatePatientForm = ({ patientId }) => {
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    disease: "",
    doctor: "",
  });

  // Fetch patient data on component mount
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/patients/${patientId}`
        );
        setPatient(response.data);
      } catch (error) {
        console.error("Error fetching patient:", error);
      }
    };

    fetchPatient();
  }, [patientId]);

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/api/patients/${patientId}`,
        patient
      );
      alert("Patient updated successfully!");
    } catch (error) {
      console.error("Error updating patient:", error);
      alert("Failed to update patient.");
    }
  };

  return (
    <div>
      <h2>Update Patient</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={patient.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <br />
        <input
          type="number"
          name="age"
          value={patient.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <br />
        <input
          type="text"
          name="gender"
          value={patient.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        <br />
        <input
          type="text"
          name="contact"
          value={patient.contact}
          onChange={handleChange}
          placeholder="Contact"
          required
        />
        <br />
        <input
          type="text"
          name="disease"
          value={patient.disease}
          onChange={handleChange}
          placeholder="Disease"
          required
        />
        <br />
        <input
          type="text"
          name="doctor"
          value={patient.doctor}
          onChange={handleChange}
          placeholder="Doctor"
          required
        />
        <br />
        <button type="submit">Update Patient</button>
      </form>
    </div>
  );
};

export default UpdatePatientForm;
