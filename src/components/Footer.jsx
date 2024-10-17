import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from "react-router-dom";
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
                    <li><NavLink to=''></NavLink></li>
                    <li><NavLink to='/about'></NavLink>About us</li>
                    <li><NavLink to='/contact'></NavLink>Contact us</li>
                </ul>
            </div>
            {/* right section */}
            <div>
                <p className='text-xl font-medium mb-5'>Get In touch</p>
                <ul className='flex- flex-col gap-2 text-gray-600'>
                    <li><a className='hover:text-cyan-500' href="https://www.linkedin.com/in/abhishek-pandey2005" target='_blank'>Linkedin</a></li>
                    <li><a className='hover:text-cyan-500' href="https://github.com/fThAbhishek-Pandey" target='_blank'>Github</a></li>
                    <li><a className='hover:text-cyan-500' href="mailto:abhishek830564@gmail.com">abhishek830564@gmail.com</a></li>
                </ul>
            </div>

        </div>
        <div className='py-5 text-sm text-center'>Copyright © {date.getFullYear()} Dedicated to my Love - All Right Reserved.</div>
    </div>
  )
}

export default Footer