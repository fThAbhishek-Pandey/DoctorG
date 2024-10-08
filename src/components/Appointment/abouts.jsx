import React from 'react'
import { assets } from '../../assets/assets'
const Abouts = ({doctorInfo,currencySymbol}) => {
  return (
       <div className="flex flex-col sm:flex-row gap-4">
       <div>
         <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={doctorInfo.image} alt={doctorInfo} />
       </div>
     <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[]">
       {/*---- doctor information Name Degree , Experionce -------*/}
       <p className="flex items-center gap-2 text-2xl flex- font-medium text-gray-900">
         {doctorInfo.name}
         <img className= "w-5"src={assets.verified_icon} alt={doctorInfo.alt} />
       </p>
       <div className="flex items-center gap-2 text-sm mt-1 text-gray-600 ">
           <div>
             <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
             <button className="py-0.5 px-2 border text-xs rounded-full">{doctorInfo.experience}</button>
           </div>
          
       </div>
        {/* Doctor About */}
        <div>
             <p  className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="info_icon" /></p>
             <p className="text-sm text-gray-500 max-w-[700px] mt-1">{doctorInfo.about}</p>
           </div>
           <p className="text-gray-500 font-medium mt-4 ">
             Appointment fee :  <span className="text-gray.600">{currencySymbol}{" "}{doctorInfo.fees}</span>
           </p>
     </div>
   </div>
  )
}

export default Abouts