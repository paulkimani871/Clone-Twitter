import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { doc, setDoc } from "firebase/firestore";
import toast from 'react-hot-toast'
import { auth, db } from "../firebase";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] =useState(false);
  const navigate = useNavigate();

  
  async function handleSubmit(e){
    e.preventDefault()
    if(!name|| !email || !password) return;
    try {
      setisLoading(true)
      setError("")
      const userCredential = await createUserWithEmailAndPassword (auth,email,password)

      if(userCredential.user){
        const newUser ={
          name,
          email,
          userId:userCredential.user.uid,
          createdAt:userCredential.user.metadata.creationTime
          
        }
        const docRef=doc(db,"users",auth.currentUser.uid)
        await setDoc(docRef,newUser)
        toast.success("Account Created Successfully")
        navigate("/")
      }
    } catch (err) {
      setError(err.message)
      console.error(err);
      toast.error(err.message)
      
    }
    finally{
      setisLoading(false)
    }
  }
  return (

    <div className="w-full h-screen bg-black flex">
      <form onSubmit={handleSubmit} className="w-1/2 h-full flex flex-col justify-center items-center gap-5 ">
        {/* <img src="./twitter.png" alt="" /> */}
        <FaXTwitter
         className="text-5xl text-white "

        />
        <h1 className="text-4xl text-white text-center ">Create Account</h1>
        <input className="text-white border-2 border-[#6840d1] rounded-xl p-1.5 w-11/12 h-10 bg-transparent placeholder:text-white placeholder:pl-1.5" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" />
        <input className="text-white border-2 border-[#6840d1] rounded-xl p-1.5 w-11/12 h-10 bg-transparent placeholder:text-white placeholder:pl-1.5" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Your Email" />
        <input className="text-white border-2 border-[#6840d1] rounded-xl p-1.5 w-11/12 h-10 bg-transparent placeholder:text-white placeholder:pl-1.5" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Your Password" />
        <button className="text-black border-none rounded-xl p-1.5 w-11/12 h-10 bg-[#f6f7f8] m-[2%] text-xl hover:bg-[#0004ff] cursor-pointer hover:text-black hover:font-bold transition duration-500 ease-in-out" type="submit" disabled={isLoading}>{isLoading ? "Signing Up..." : "Sign Up"}</button>
        <Link className="text-white" to="/signin">Do have an account? Sign in</Link>
      </form>
      <img
        className="w-1/2 h-full rounded-[3%] mt-[1%] ml-[1%]"
        src="/horizontal-shot-beautiful-satisfied-female-teenager-focused-smartphone-device-chats-online-with-friends_273609-25671.avif"
        alt=""
      />
    </div>
  );
}

export default Signup;
