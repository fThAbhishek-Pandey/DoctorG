import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext';
import FilteredDocter from '../Doctors/FilteredDocter';

const TopDoctor = () => {
    const Navigate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900'>
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm '>Simply browse through our extensive list of trusted doctors</p>
        <FilteredDocter  doctors = {doctors.slice(0,10)} />
       <button onClick={()=>{Navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10' >more</button>
    </div>
  )
}

export default TopDoctor