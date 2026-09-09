import"./App.css"
import React from 'react'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Explore from "./pages/Explore"
import Notification from "./pages/Notification"
import Messages from "./pages/Messages"
import Profile from "./pages/Profile"
import ProtectedLayoute from "./pages/ProtectedLayoute"
import Comments from "./pages/Comments"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='signin' element={<Signin/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='/' element={<ProtectedLayoute/>}>
      <Route path='' element={<Dashboard/>}>
      <Route index element={<Home/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='notification' element={<Notification/>}/>
      <Route path='messages' element={<Messages/>}/>
      <Route path=':userid' element={<Profile/>}/>
      <Route path='comments/:postid' element={<Comments/>}/>
      </Route>
      </Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App