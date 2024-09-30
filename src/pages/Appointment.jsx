import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Abouts from "../components/Appointment/abouts";
import Dating from "../components/Appointment/Sloting";
import RelatedDocters from '../components/Appointment/RelatedDocters'
const Appointment = () => {
  const { docId } = useParams();
  const { doctors,currencySymbol } = useContext(AppContext);
  const [doctorInfo, setDoctorInfo] = useState(null);
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
         <Dating />
         <RelatedDocters docId={docId} speciality={doctorInfo.speciality} />
         </div>
    )
  );
};

export default Appointment;
