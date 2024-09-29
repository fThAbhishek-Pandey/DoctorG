import React ,{useContext}from 'react'
import { AppContext } from '../context/AppContext'
import FilteredDocter from '../components/Doctors/FilteredDocter';
import Specialist from '../components/Doctors/specialist';
const AllDoctors = () => {
  const {doctors} = useContext(AppContext);
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <div>
         <Specialist specialist={"-1"} />
        </div>
        <FilteredDocter doctors={doctors} />
      </div>
    </div>)
    
  }
  


export default AllDoctors