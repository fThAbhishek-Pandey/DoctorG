import React, {useContext} from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
const Specialist = ({specialist}) => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();
    console.log(doctors);
  return (
    <div className='flex flex-col gap-4 text-sm text-gray-600'>{
           doctors.map((item,index)=>{
            console.log(item)
              return ( <p onClick={()=> navigate(`/doctors/${item.speciality}`)} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${item.speciality=== specialist ?"bg-indigo-100 text-black":""}`} key={"fth01"+index}>{item.speciality}</p>)
            })
       }
    </div>
  )
}

export default Specialist