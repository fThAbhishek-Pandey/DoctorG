import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import BookAppointments from "./bookAppointment";
import { AppContext } from "../../context/AppContext";

import GetAvailableSlot from "./Dating";
const Sloting = () => {
  const { doctors, backendURL, user_token, getAllDoctors } =
    useContext(AppContext);
  const { docId } = useParams();
  const navigate = useNavigate();
  const [docInfo, setDoctorInfo] = useState(null);
  const [doctorSlot, setDoctorSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const DaysOfWeek = ["SUN", "MON", "TUS", "WEB","THU", "FRI", "SAT"];

  const fetchDocInfo = () => {
    const mydocInfo = doctors.find((doc) => doc._id === docId);
    setDoctorInfo(mydocInfo);
  };
  
  useEffect(fetchDocInfo , [doctors, docId]);

  useEffect( () => {
    console.log("docinfo 01",docInfo )
    if (docInfo)
     GetAvailableSlot(setDoctorSlot, docInfo);
     console.log("useffect : ",typeof doctorSlot, docInfo)
  },[docInfo]);

  const onAppointmentHandler = async () => {
    // console.log("i am  onAppointmentHandler");
    await BookAppointments(user_token, backendURL, navigate,slotIndex,  docInfo,doctorSlot, setDoctorSlot,docId,slotTime,getAllDoctors)
    //  .then(GetAvailableSlot(setDoctorSlot, docInfo));

  };

  return (
    <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
      <p>Booking Slots</p>
      <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4 ">
        {doctorSlot.length &&
          doctorSlot.map((item, idx) => (
            <div
              onClick={() => setSlotIndex(idx)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                slotIndex === idx
                  ? "bg-primary text-white"
                  : "border border-gray-200"
              }`}
              key={idx}
            >
              <p>{item[0] && DaysOfWeek[item[0].dateTime.getDay()]}</p>
              <p>{item[0] && item[0].dateTime.getDate()}</p>
            </div>
          ))}
      </div>
      <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
        {doctorSlot.length &&
          doctorSlot[slotIndex].map((item, idx) => (
            <p
              onClick={() => setSlotTime(item.time)}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                item.time === slotTime
                  ? "bg-primary text-white"
                  : "text-gray-400 border border-gray-300"
              }`}
              key={idx}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
      </div>

      <button
        onClick={onAppointmentHandler}
        className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6"
      >
        Book an Appointment
      </button>
    </div>
  );
};

export default Sloting;
