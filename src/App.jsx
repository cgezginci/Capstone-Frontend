import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment";
import Report from "./Pages/Report/Report";
import Vaccine from "./Pages/Vaccine/Vaccine";
import Navbar from "./Components/Navbar";
import Customer from "./Pages/Customer/Customer";
import Animal from "./Pages/Animal/Animal";
import Doctor from "./Pages/Doctor/Doctor";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/report" element={<Report />} />
        <Route path="/vaccine" element={<Vaccine />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/animal" element={<Animal />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </>
  );
}

export default App;
