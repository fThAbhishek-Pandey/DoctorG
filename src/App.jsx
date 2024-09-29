import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Contact from "./pages/Contact";
import MyApointment from "./pages/MyApointment";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/appointment";
import Navbar from "./components/navbar";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/doctos" element={<Doctor/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/my-appointment" element={<MyApointment/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/appointment/:docId" element={<Appointment/>}/>
      </Routes>
    </div>
  );
};

export default App;
