import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegistrationImage from '../assets/registration.png'

const Registration = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex justify-center'>
            <div>
                <h1 className='font-nunito font-bold text-4xl text-[#11175D]'>Get started with easily register</h1>
                <h4 className='font-nunito font-normal text-xl text-[#000000] opacity-50 mt-4 mb-10'>Free register and you can enjoy it</h4>
                <TextField className='block! mb-8!' id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className='block! mb-8!' id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField className='block! mb-8!' id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant="contained">Sign Up</Button>
                <p>Already have an account ? <span>Sign In</span> </p>
            </div>
            <div>
                <img className='w-full h-screen object-cover' src= {RegistrationImage} alt="Registration Image" />
            </div>

        </div>


    </div>
  )
}

export default Registration