import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegistrationImage from '../assets/registration.png'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Audio } from 'react-loader-spinner'

const Registration = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [nameError, setNameError] = useState("");
    const [loader, setLoader] = useState(false);
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
        if (!name) {
            setNameError("Enter Your Name")
        }
        if (email && name && password) {
            setLoader(true);
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    navigate('/login');
                    toast.success("registration successfully");
                    setLoader(false);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;

                    // ..
                    console.log(errorCode);
                    if (errorCode.includes("auth/email-already-in-use")) {
                        setEmailError("Email Already Used");
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
    const handleName = (e) => {
        setName(e.target.value)
        setNameError("");
    }



    return (
        <div className='container mx-auto px-7'>
            <ToastContainer />
            <div className='flex justify-center gap-17 lg:flex-row flex-col'>
                <div className='my-auto'>
                    <h1 className='font-nunito font-bold text-4xl text-[#11175D] text-center lg:text-left'>Get started with easily register</h1>
                    <h4 className='font-nunito font-normal text-xl text-[#000000] opacity-50 mt-4 mb-10 text-center lg:text-left'>Free register and you can enjoy it</h4>
                    <div className='w-[90%] lg:w-[90%]'>
                        <TextField onChange={handleEmail} className=' w-full' id="outlined-basic" label="Email Address" variant="outlined" />
                        {
                            emailError && <p className='bg-red-500 text-white py-2 px-1'>{emailError}</p>

                        }



                    </div>

                    <div className='w-[90%] lg:w-[90%]'>
                        <TextField onChange={handlePassword} className=' mt-2! w-full' id="outlined-basic" label="Password" variant="outlined" />
                        {
                            passwordError && <p className='bg-red-500 text-white py-2 px-1'>{passwordError}</p>

                        }
                    </div>
                    <div className='w-[90%] lg:w-[90%]'>
                        <TextField onChange={handleName} className=' w-full mt-2! ' id="outlined-basic" label="Full Name" variant="outlined" />
                        {
                            nameError && <p className='bg-red-500 text-white py-2 px-1'>{nameError}</p>

                        }
                    </div>
                    {
                        loader ? <Audio
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="audio-loading"
                        wrapperStyle={{}}
                        wrapperClass="wrapper-class"
                        visible={true}
                    /> : <Button variant="contained" className='w-[90%]! mt-8!  py-5! rounded-full!' onClick={handleSignUp}>Sign Up</Button>
                    }

                    
                    


                    <p className='mt-10 text-center '>Already have an account ? <Link to='/login' ><span className='text-orange-400 font-bold cursor-pointer' >Sign In</span></Link>  </p>
                </div>
                <div>
                    <img className='w-full h-screen object-cover' src={RegistrationImage} alt="Registration Image" />
                </div>

            </div>


        </div>
    )
}

export default Registration