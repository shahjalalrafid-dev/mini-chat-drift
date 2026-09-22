import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegistrationImage from '../assets/registration.png'

const Registration = () => {
  return (
    <div className='container mx-auto px-7'>
        <div className='flex justify-center gap-17 lg:flex-row flex-col'>
            <div className='my-auto'>
                <h1 className='font-nunito font-bold text-4xl text-[#11175D] text-center lg:text-left'>Get started with easily register</h1>
                <h4 className='font-nunito font-normal text-xl text-[#000000] opacity-50 mt-4 mb-10 text-center lg:text-left'>Free register and you can enjoy it</h4>
                <div className='w-[90%] lg:w-[90%]'>
                    <TextField className=' mb-8! w-full' id="outlined-basic" label="Email Address" variant="outlined" />
                </div>

                <div className='w-[90%] lg:w-[90%]'>
                <TextField className=' mb-8! w-full' id="outlined-basic" label="Password" variant="outlined" />
                </div>
                <div className='w-[90%] lg:w-[90%]'>
                <TextField className=' w-full mb-8!' id="outlined-basic" label="Full Name" variant="outlined" />
                </div>
                
                <Button variant="contained" className='w-[90%]! py-5! rounded-full!'>Sign Up</Button>
                
                
                <p className='mt-10 text-center '>Already have an account ? <span className='text-orange-400 font-bold cursor-pointer' >Sign In</span> </p>
            </div>
            <div>
                <img className='w-full h-screen object-cover' src= {RegistrationImage} alt="Registration Image" />
            </div>

        </div>


    </div>
  )
}

export default Registration