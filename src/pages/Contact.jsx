import React from 'react'
import {assets} from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-cols justify-center md:flex-row gap-10 mb-28 text-sm '>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="contact img" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 HaldiGhati <br/>F4 350, Shastri Nagar, BHARAT</p>
          <p className='text-gray-500'>Tel: 8467____5427 <br /> Email: admin@doctorg.com</p>
          <p className='font-semibold text-lg text-gray-600' >Careers at DOCTORG</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-primary  hover:text-white transition-all duration-500'>Explore Job</button>
        </div>
      </div>

    </div>
  )
}

export default Contact