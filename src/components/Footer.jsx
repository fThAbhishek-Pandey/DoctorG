import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    const date = new Date();
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr,1fr,1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section */}
            <div >
                <img className='mb-5 w-40' src={assets.logo} alt="logo" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* center */}
            <div>
                <p className='text-xl font-medium mb-5'>Quick Link</p>
                <ul className='flex- flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5'>Get In touch</p>
                <ul className='flex- flex-col gap-2 text-gray-600'>
                    <li>Linkedin</li>
                    <li>Github</li>
                    <li>+91 8467865427</li>
                </ul>
            </div>

        </div>
        <div className='py-5 text-sm text-center'>Copyright © {date.getFullYear()} Dedicated to my Love - All Right Reserved.</div>
    </div>
  )
}

export default Footer