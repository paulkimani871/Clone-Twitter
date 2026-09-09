import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <div className="w-full h-screen flex bg-black">
      <Sidebar/>
      <div className="w-[85%] flex text-white overflow-auto ">
<Outlet/>

      </div>
    </div>
  );
}

export default Dashboard;