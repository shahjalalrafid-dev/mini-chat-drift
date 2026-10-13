import React from 'react'
import { IoHome } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    return (
        <>
            <div className='w-[70%] mx-auto h-[93vh] bg-blue-600 rounded-2xl mt-5 flex flex-col items-center justify-between py-6'>
                {/* Top group (Avatar + Navigation items) */}
                <div className='flex flex-col items-center space-y-10'>
                    <div className='w-20 h-20 rounded-full bg-red-300'></div>
                    <Link to='/dashboard/home'  ><IoHome className='text-4xl text-white cursor-pointer' /></Link>
                    <Link to='/dashboard/message' ><AiFillMessage className='text-4xl text-white cursor-pointer' /></Link>
                    <Link to='/dashboard/notification' ><FaRegBell className='text-4xl text-white cursor-pointer' /></Link>
                    <Link to='/dashboard/settings' ><IoSettingsOutline className='text-4xl text-white cursor-pointer' /></Link>



                </div>

                {/* Bottom group (Logout button) */}
                <div>
                    <FiLogOut className='text-4xl text-white cursor-pointer' />
                </div>
            </div>
        </>
    )
}

export default Sidebar