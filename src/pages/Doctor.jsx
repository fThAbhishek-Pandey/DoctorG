import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import NoDoctoter from "../components/Doctors/NoDoctoter";
import Specialist from "../components/Doctors/specialist";
import FilteredDocter from "../components/Doctors/FilteredDocter";
const Doctor = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doctor) => doctor.speciality === speciality)
      );
      console.log(filterDoc);
    } else setFilterDoc(doctors);
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <>
      {filterDoc.length == 0 ? (
        <NoDoctoter />
      ) : (
        <div>
          <p className="text-gray-600">Browse through the doctors specialist.</p>
          <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
            <div>
              <Specialist specialist={speciality} />
            </div>
            <FilteredDocter doctors={filterDoc} />
          </div>
        </div>
      )}
    </>
  );
};

export default Doctor;
