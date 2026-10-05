import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegistrationImage from '../assets/registration.png'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let lowerCase = /^(?=.*[a-z])/
  let upperCase = /(?=.*[A-Z])/
  let min = /^[A-Za-z\d@$!%*?&#]{8,}$/;
  let special = /(?=.*[@$!%*?&])/
  let digit = /(?=.*\d)/
  const handleSignUp = () => {
    if (!email) {
      setEmailError("Enter Your Email");
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter Valid Email");
    }

    if (!password) {
      setPasswordError("Enter Your Password")
    } else if (!lowerCase.test(password)) {
      setPasswordError("Ensure Lower Case");
    }
    else if (!upperCase.test(password)) {
      setPasswordError("Ensure Upper Case");
    }
    else if (!min.test(password)) {
      setPasswordError("Ensure At least 8 Letter");
    }
    else if (!special.test(password)) {
      setPasswordError("Ensure special character");
    }
    else if (!digit.test(password)) {
      setPasswordError("Ensure at least one digit");
    }

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          setTimeout(() => {
            navigate('/home');
          }, 1000);
          toast.success("Login Successfully");
          

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if(errorCode.includes("auth/invalid-credential")){
            toast.error("Invalid Credintials");
          }else if (errorCode.includes("auth/too-many-requests")){
            toast.error("try after 2 minutes");
          }
        });
    }
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");

  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("")
  }







  return (
    <div className='container mx-auto px-7'>
       <ToastContainer />
      <div className='flex justify-center gap-17 lg:flex-row flex-col'>
        <div className='my-auto'>
          <h1 className='font-nunito font-bold text-4xl text-[#11175D] text-center lg:text-left'>Log in to Your Account</h1>
          <button className='border border-b-slate-600 px-7 py-5 rounded-xl my-7 cursor-pointer'> <FaGoogle className='inline-block mr-2' />Login with Google</button>
          <div className='w-[90%] lg:w-[90%]'>
            <TextField onChange={handleEmail} className=' w-full' id="outlined-basic" label="Email Address" variant="outlined" />
            {
              emailError && <p className='bg-red-500 text-white py-2 px-1 rounded-sm'>{emailError}</p>

            }



          </div>

          <div className='w-[90%] lg:w-[90%]'>
            <TextField onChange={handlePassword} className=' mt-2! w-full' id="outlined-basic" label="Password" variant="outlined" />
            {
              passwordError && <p className='bg-red-500 text-white py-2 px-1 rounded-sm'>{passwordError}</p>

            }
          </div>


          <Button variant="contained" className='w-[90%]! mt-8!  py-5! rounded-full!' onClick={handleSignUp}>Log in to Continue</Button>


          <p className='mt-10 text-center '>Don't have an account ? <Link to='/' ><span className='text-orange-400 font-bold cursor-pointer' >Sign Up</span> </Link> </p>
        </div>
        <div>
          <img className='w-full h-screen object-cover' src={RegistrationImage} alt="Registration Image" />
        </div>

      </div>


    </div>
  )
}

export default Login