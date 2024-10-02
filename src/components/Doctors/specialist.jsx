import React, {useContext, useState} from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom';
const Specialist = ({specialist}) => {
    const [showFilter, setShowFilter] = useState(false);
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();
    // console.log(doctors);
    const DocSpecilistSet = new  Set(doctors.map ((item)=>{
            console.log(item.speciality);
            return item.speciality;
    }));
   const  DocSpecilist = Array.from(DocSpecilistSet)
    // console.log(DocSpecilist);
  return (
    <div >
      <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter? 'bg-primary text-white ': ''}`} onClick={()=>setShowFilter(prev =>!prev)}>filter</button>
      <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ?'flex':'hidden sm:flex'}`}>{
       DocSpecilist.map((item,index)=>{
            console.log(item)
              return ( <p onClick={()=> navigate(`/doctors/${item}`)} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${item=== specialist ?"bg-indigo-100 text-black":""}`} key={"fth01"+index}>{item}</p>)
            })
       }
       </div>
    </div>
  )
}

export default Specialist