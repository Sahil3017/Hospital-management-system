import React from "react";
import PatientList from "./PatientList";
import AddPatientForm from "./components/AddPatientForm";
import AddDoctorForm from "./components/AddDoctorForm";
import UpdatePatientForm from "./components/UpdatePatientForm";
//import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Hospital Management System</h1>
      <PatientList />
      <AddPatientForm />
      <AddDoctorForm />
      <UpdatePatientForm />
    </div>
  );
}

export default App;
