import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
const BookAppointments = async (user_token,backendURL, navigate,slotIndex, setSlotIndex,doctorSlot, setDoctorSlot,docId,slotTime,getAllDoctors) => {
  if (!user_token) {
    toast.warn("Plz login to book Appointment");
    return navigate("/login");
  }
  try {
       const date= doctorSlot[slotIndex][0].dateTime;
      //  console.log("i am date booking 01 : ",doctorSlot)
      //  console.log("i am date booking 02 : ",slotIndex)
      //  console.log("i am date booking 03 : ",date)
       let day = date.getDate();
       let month = date.getMonth()+1;
       let year = date.getFullYear();
      const slotDate = day+"_"+month+"_"+year;
      console.log("I am slot date : ",slotDate)
      const {data} = await axios.post(backendURL+'/api/appointment/booked', {docId, slotDate,slotTime},{headers:{user_token}})
      if(data.success){
        toast.success(data.message)
        getAllDoctors()
        navigate('/my-appointment')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};

export default BookAppointments;
