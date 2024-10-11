import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Abouts from "../components/Appointment/abouts";
import Sloting from "../components/Appointment/Sloting";
import RelatedDocters from '../components/Appointment/RelatedDocters'
const Appointment = () => {
  console.log("i am appointment : ");
  const { docId } = useParams();
  
  const [doctorInfo, setDoctorInfo] = useState(null);
  const { doctors,currencySymbol } = useContext(AppContext);
  console.log("my doctors : ",doctors);
  const myDoctor = async () => {
    const myDocInfo = doctors.find((doctor) => doctor._id === docId);
    setDoctorInfo(myDocInfo);
  };
  useEffect(() => {
    myDoctor();
  }, [docId, doctors]);
  console.log("doctorInfo : ", doctorInfo);
  return (
    doctorInfo && (
      <div>
         {/* -------- Doctors Details ------------- */}
         <Abouts doctorInfo={doctorInfo} currencySymbol={currencySymbol} />
         <Sloting />
         <RelatedDocters docId={docId} speciality={doctorInfo.speciality} />
         </div>
    )
  );
};

export default Appointment;
