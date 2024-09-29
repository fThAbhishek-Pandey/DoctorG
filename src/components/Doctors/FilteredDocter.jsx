import React from 'react'

const FilteredDocter = ({doctors}) => {
  return (
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0' >
          {
            doctors.map((item,idx)=>(
              <div className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={"fth02"+idx}>
                  <img onClick={()=>(Navigate(`/appointment/${item._id}`))} className='bg-blue-50' src={item.image} alt={item.name} />
                  <div className='p-4'>
                      <div className='flex items-center text-sm gap-2 text-center text-green-500'>
                          <p className='w-2 h-2 bg-green-500 rounded-full'></p>
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