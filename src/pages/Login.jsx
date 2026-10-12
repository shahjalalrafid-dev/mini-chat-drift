import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import RegistrationImage from '../assets/registration.png'
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { signInWithPopup } from "firebase/auth";
const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [popup, setPopup] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailError, setResetEmailError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let lowerCase = /^(?=.*[a-z])/
  let upperCase = /(?=.*[A-Z])/
  let min = /^[A-Za-z\d@$!%*?&#]{8,}$/;
  let special = /(?=.*[@$!%*?&#])/
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
          if (userCredential.user.emailVerified) {
            toast.success("Login Successfully");
            setTimeout(() => {
              navigate('/home');
            }, 1000);
          } else {
            toast.error("verify your email");
          }





          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid Credintials");
          } else if (errorCode.includes("auth/too-many-requests")) {
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
  const handleGoogleSignIn = () => {

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/home');

      }).catch((error) => {
        const erroCode = error.code;
        console.log(erroCode);

      });

  }
  const handleForgetPassword = () => {
    setPopup(!popup);
  }
  const handleSubmitReset = () => {
    
    if (!resetEmail) {
      setResetEmailError("Enter Your Email");
    } else if (!emailRegex.test(email)) {
      setResetEmailError("Enter Valid Email");
    }
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        toast.success('Check Your Email');
        setPopup(false);
      })
      .catch((error) => {

        console.log(error.code);

      });

  }






  return (
    <>
      <div className='container mx-auto px-7'>
        <ToastContainer />
        <div className='flex justify-center gap-17 lg:flex-row flex-col'>
          <div className='my-auto'>
            <h1 className='font-nunito font-bold text-4xl text-[#11175D] text-center lg:text-left'>Log in to Your Account</h1>
            <div>
              <button onClick={handleGoogleSignIn} className='border border-b-slate-600 px-7 py-5 rounded-xl my-7 cursor-pointer'> <FaGoogle className='inline-block mr-2' />Login with Google</button>
            </div>

            <div className='w-[90%] lg:w-[90%]'>
              <TextField onChange={handleEmail} className=' w-full' id="outlined-basic" label="Email Address" variant="outlined" />
              {
                emailError && <p className='bg-red-500 text-white py-2 px-1 rounded-sm'>{emailError}</p>

              }



            </div>

            <div className='w-[90%] lg:w-[90%]'>
              <TextField type='password' onChange={handlePassword} className=' mt-2! w-full' id="outlined-basic" label="Password" variant="outlined" />
              {
                passwordError && <p className='bg-red-500 text-white py-2 px-1 rounded-sm'>{passwordError}</p>

              }
            </div>

            <p onClick={handleForgetPassword} className='mt-6 font-bold text-lg cursor-pointer text-center'>Forget Password</p>
            {
              popup && (
                <div className='absolute h-screen top-0 left-0 z-10 w-full bg-black/50 backdrop-blur-xs flex justify-center items-center'>
                  <div className='w-[480px] bg-white rounded-2xl shadow-2xl p-8 flex flex-col'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-1'>Forget Password</h2>
                    <p className='text-sm text-gray-500 mb-6 font-bold'>Enter your email for reset password</p>

                    <TextField
                      type='email'
                      onChange={(e) => setResetEmail(e.target.value)}
                      className='w-full mb-8'
                      id="outlined-basic"
                      label="Enter your email"
                      variant="outlined"
                      required
                    />
                    {
                      resetEmailError && <p className='bg-red-500 text-white py-2 px-1 rounded-sm'>{resetEmailError}</p>

                    }

                    <div className='flex gap-4 mt-2'>
                      <Button
                        variant="outlined"
                        className='w-1/2 py-3 rounded-xl! capitalize font-medium border-gray-300 text-gray-700'
                        onClick={() => setPopup(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        className='w-1/2 py-3 rounded-xl! capitalize font-medium shadow-md'
                        onClick={handleSubmitReset}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </div>
              )
            }



            <Button variant="contained" className='w-[90%]! mt-8!  py-5! rounded-full!' onClick={handleSignUp}>Log in to Continue</Button>


            <p className='mt-10 text-center '>Don't have an account ? <Link to='/' ><span className='text-orange-400 font-bold cursor-pointer' >Sign Up</span> </Link> </p>
          </div>
          <div>
            <img className='w-full h-screen object-cover' src={RegistrationImage} alt="Registration Image" />
          </div>

        </div>


      </div>

    </>
  )
}

export default Login