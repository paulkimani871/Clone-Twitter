import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import toast from 'react-hot-toast';


function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setisLoading] =useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e){
    // console.log("submitted");
    
    e.preventDefault()
    if(!email || !password) return;
    try{
      setisLoading(true)
      setError("")
      await signInWithEmailAndPassword (auth,email,password)
      toast.success("signin successful")
      navigate("/")
       
        
      } catch (err) {
        toast.error(err.message)
        setError(err.message)
        console.error(err.message);
        
        
      }
      finally{
        setisLoading(false)
      }


    }
  return (
          <div className='w-full h-screen bg-black flex'>
        <img className='w-1/2 h-screen rounded-xs mt-0.5 ml-0.5 ' src="/horizontal-shot-beautiful-satisfied-female-teenager-focused-smartphone-device-chats-online-with-friends_273609-25671.avif" alt=""   />
<form onSubmit={handleSubmit} className="w-1/2 h-full flex flex-col justify-center items-center gap-5 ">
    {/* <img src="./twitter.png" alt="" /> */}
     <FaXTwitter
              className=' text-6xl  text-white'
            />
    <h1 className='text-white text-4xl items-center '>Log In</h1>
    <input className='text-white border-2 border-[#6840D1] rounded-xs p-1 w-11/12 h-10 bg-transparent placeholder:text-white placeholder:pl-1' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Your Email' />
    <input className='text-white border-2 border-[#6840D1] rounded-xs p-1 w-11/12 h-10 bg-transparent placeholder:text-white placeholder:pl-1' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Your Password' /> 
    <button className='text-black border-none rounded-xl p-1 w-[90%] h-10 bg-white m-0.5 text-xl hover:bg-[#0004ff] hover:cursor-pointer hover:text-black hover:font-bold transition duration-500 ease-in-out' type="submit" disabled={isLoading}>
      {isLoading ? "Signing In..." : "Sign In"}
    </button>
    <Link className='text-white' to="/signup"> Do you have an account? Sign up</Link>
    </form>
    </div>
  )
}

export default Signin