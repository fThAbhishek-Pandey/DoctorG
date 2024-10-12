import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import CancelAppointment from "../components/Appointment/CancelAppointment";
import { useNavigate } from "react-router-dom";
import Razorpay from "../components/PaymentGateway/razorpay";
import getUserAppointments from "../components/Appointment/getuserAppointment";
const MyApointment = () => {
  const { backendURL, user_token ,getAllDoctors} = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const slotDataFormate = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + Months[Number(dateArray[1] - 1)] + " " + dateArray[2]
    );
  };
  
  useEffect(() => {
    if (user_token) {
      // console.log("i am my appoint api colling every refresh", backendURL, user_token)
      getUserAppointments(backendURL,user_token,setAppointments);
    }
  }, [user_token]);
  // console.log("my----", doctors)
  const onCancelHandler = async (appointmentId) => {
    const isCancel = await CancelAppointment(
      appointmentId,
      backendURL,
      user_token
    );
    if (isCancel){
      getUserAppointments();
      getAllDoctors();
    } 
  };
const onPaymenthandler = async(appointmentId)=>{
      await Razorpay(appointmentId,backendURL,user_token,setAppointments,navigate)
}
  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointment
      </p>
      <div>
        {appointments &&
          appointments.map((item, index) => (
            <div
              className="grid grid-cols-[1fr_3fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={item.docData.image}
                  alt="docter image"
                />
              </div>
              <div className="flex-1 text-sm  text-zinc-600">
                <p className="text-neutral-800 font-semibold">
                  {item.docData.name}
                </p>
                <p>{item.docData.speciality}</p>
                <p className="text-zinc-700 font-medium mt-1">Address : </p>
                {/* <p className='text-xs '>{item.docData.address.street }</p> */}
                {/* <p className='text-xs'> {item.docData.address}</p> */}
                <p className="text-xs mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date And time
                  </span>{" "}
                  {slotDataFormate(item.slotDate)} | {item.slotTime}
                </p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end ">
                {item.cancelled ? (
                  <button
                    onClick={() => navigate(`/appointment/${item.docData._id}`)}
                    className="text-sm text-stone-800 bg-slate-300 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Book Again
                  </button>
                ) : (
                  <div> {
                    item.payOnine ? (
                      <p className="text-sm  text-center sm:min-w-48 py-2 border rounded-full bg-green-500 text-white transition-all duration-300">
                        Payment Complete
                      </p>
                    ) : (
                      <div className="flex flex-col gap-2 justify-end">
                        <button onClick={()=>onPaymenthandler(item._id)} className="text-sm text-stone-800 bg-slate-300 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                          Pay Online
                        </button>
                        <button
                          onClick={() => onCancelHandler(item._id)}
                          className="text-sm text-stone-800 bg-slate-300 text-center sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                          Cancel Appointment
                        </button>
                      </div>
                    )
                  } </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MyApointment;
