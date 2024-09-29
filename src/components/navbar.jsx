import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const Navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token,setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img className='w-44 cursor-pointer' src={assets.logo} alt="logo" />
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>All Doctor</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to='about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'  />
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className="w-8 rounded-full " src={assets.profile_pic} alt="" />
                     <img src= {assets.dropdown_icon} alt="" />
                     <div className='absolute top-0 right-0 pt-14 font-medium text-gray-600 hidden group-hover:block '>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                            <p onClick={()=>Navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                            <p onClick={()=>Navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                            <p onClick={()=>{
                                setToken(false)
                            }} className='hover:text-black cursor-pointer'>Logout</p>
                        </div>
                     </div>
                </div> : <button onClick={()=>{
                    Navigate('/login')
                }} className=' bg-primary text-white px-8 py-3 rounded-full font-lignt hidden md:block '>Create Accout</button>
            }
            
        </div>
    </div>
  )
}

export default Navbar