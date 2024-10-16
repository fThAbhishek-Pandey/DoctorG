import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Alldoctors from "./pages/AllDoctors";
import Contact from "./pages/Contact";
import MyApointment from "./pages/MyApointment";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./context/AppContext";
const App = () => {
  const { user_token } = useContext(AppContext);
 return (<div>
   {
      !user_token ? (
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Login />
        <Footer />
      </div>
    ) : (
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Alldoctors />} />
          <Route path="/doctors/:speciality" element={<Doctor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-appointment" element={<MyApointment />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    )
  }
  </div>)
};
export default App;
