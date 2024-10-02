import React, { useEffect, useState } from 'react'
import { doctors } from '../../assets/assets';
import { useParams } from 'react-router-dom';
const Dating = () => {
    
     const { docId } = useParams();
    const [docInfo, setDoctorInfo] = useState(null);
    const [doctorSlot, setDoctorSlot] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime , setSlotTime] = useState('');
    const DaysOfWeek =['SUN','MON','TUS','WEB','FRI','SAT'];


    const fetchDocInfo = async ()=>{
        const docInfo = doctors.find((doc)=>( doc._id=== docId));
     }   
    const getAvailableSlot = async()=>{ 
        let today = new Date();
        for(let i=0;i<7;i++){
          // getting date with index
          let currDate = new Date(today);
          currDate.setDate(today.getDate()+i);
          //  seting end of the time 
          let endTime = new Date ();
          endTime.setDate(today.getDate()+i);
          endTime.setHours(21,0,0,0);
          //  settings hourse 
          if (today.getDate()=== currDate.getDate()) {
              currDate.setHours(currDate.getHours()>10? currDate.getHours()+1: 10);
              currDate.setMinutes(currDate.getMinutes()>30 ? 30 :0)
          }
          else {
            currDate.setHours(10);
            currDate.setMinutes(0);
          }
          let timeSlot =[];
          while (currDate<endTime){
               let formatedTime = currDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
                timeSlot.push({
                  dateTime : new Date(currDate),
                  time : formatedTime
                })
                // Increment the time slot by 30 min
                currDate.setMinutes(currDate.getMinutes()+30);
              }
              setDoctorSlot(prev => ([...prev,timeSlot]));

        }
        
    }

    useEffect (()=>{
        fetchDocInfo();

    }, [doctors,docId]);
    useEffect(()=>{
        getAvailableSlot()
    },[docInfo])
    useEffect(()=>{
          console.log(doctorSlot);
    },[doctorSlot]);
  return (
    <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
          <p>Booking Slots</p>
          <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 '>
            {
              doctorSlot.length && doctorSlot.map((item,idx)=>(
                <div onClick={()=>(setSlotIndex(idx))} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === idx? 'bg-primary text-white': 'border border-gray-200'}`} key={idx}>
                      <p>{item[0] && DaysOfWeek[item[0].dateTime.getDay()]}</p>
                      <p>{item[0]&& item[0].dateTime.getDate()}</p>
                </div>
              ))
            }
          </div>
              <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                 {
                   doctorSlot.length && doctorSlot[slotIndex].map((item,idx)=>(
                        <p onClick={()=>(setSlotTime(item.time))} className= {`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime? 'bg-primary text-white': 'text-gray-400 border border-gray-300'}`} key={idx}>{
                            item.time.toLowerCase()
                          }</p>
                   ))
                 }
                 
              </div>
              
         <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an Appointment</button>
      
    </div>
  )
}

export default Dating