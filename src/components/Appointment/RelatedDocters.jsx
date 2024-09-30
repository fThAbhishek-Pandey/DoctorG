import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import FilteredDocter from '../Doctors/FilteredDocter';
import { useNavigate } from 'react-router-dom';
const RelatedDocters = ({docId, speciality}) => {
       const {doctors} = useContext(AppContext);
       console.log("All doctors : ",doctors);
       const navigate = useNavigate();
       const [RelatedDocters , setRelatedDoctos]= useState([]);
       useEffect(()=>{
            if(doctors.length>0&& speciality){
                    const doctorsData= doctors.filter((doc)=> doc.speciality=== speciality && doc._id != docId);
                    console.log("doctorsData : ",doctorsData)
                    setRelatedDoctos(doctorsData);
                }    
       },[doctors,speciality,docId]);
       console.log("RelatedDocters : ",RelatedDocters);
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900' >
        <h1 className='text-3xl font-medium'>Related Doctors</h1>
        <FilteredDocter doctors ={RelatedDocters} />
    </div>
  )
}

export default RelatedDocters