import React from 'react'
import { useNavigate } from 'react-router-dom'
const FilteredDocter = ({doctors}) => {
      const Navigate = useNavigate();
  return doctors&& (
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
          {
            doctors.map((item,idx)=>(
              <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={"fth02"+idx}>
                  <img onClick={()=>{Navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='bg-blue-50 ' src={item.image} alt={item.name} />
                  <div className='p-4'>
                      <div className={`flex items-center text-sm gap-2 text-center ${item.available ? 'text-green-500':'text-red-500'} `}>
                          <p className={`w-2 h-2 bg-green-500 rounded-full ${item.available ? 'bg-green-500':'bg-red-500'}`}></p>
                          <p >Available</p>
                      </div>
                      <div>
                          <p className='text-gray-900 text-lg font-medium '>{item.name}</p>
                          <p className='text-gray-600 text-sm' >{item.speciality}</p>
                      </div>
                  </div>
              </div>
          ))}
        </div>
  )
}

export default FilteredDocter