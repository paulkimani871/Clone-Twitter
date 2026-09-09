import { FaXTwitter } from "react-icons/fa6";
import { Link} from "react-router-dom";
import { auth } from "../firebase";
import { SignOutDialog } from "./SignOutDialog";

function Sidebar() {
  
 // fontSize: "50px",
          // color: "#ffffff",
  return (
    <div className="w-3xs h-screen flex flex-col bg-black text-white px-5 py-7  border-r-2 border-white-400">
      {/* <h2>Home</h2> */}
      <FaXTwitter className="text-5xl text=white ml-4.5  "/>

      <ul className="list-none flex gap-9 flex-col p-6 rounded-2xl ">
        <li className="mt-7 hover:bg-[#1d9cf051] hover:rounded-2xl ">
          <Link to="">
            <i className="fa-solid fa-home"></i>
            <p className="text-xl">Home</p>
          </Link>
        </li>

        <li className="mt-7 hover:bg-[#1d9cf051] hover:rounded-2xl ">
          <Link  to="explore">
            <i className="fa-solid fa-search"></i>
            <p className="text-xl">Explore</p>
          </Link>
        </li>

        <li className="mt-7 hover:bg-[#1d9cf051] hover:rounded-2xl ">
          <Link to="notification">
            <i className="fa-solid fa-bell"></i>
            <p className="text-xl">Notifications</p>
          </Link>
        </li>

        <li className="mt-7 hover:bg-[#1d9cf051] hover:rounded-2xl ">
          <Link to="messages">
            <i className="fa-solid fa-envelope"></i>
            <p className="text-xl">Messages</p>
          </Link>
        </li>

        <li className="mt-7 hover:bg-[#1d9cf051] hover:rounded-2xl">
          <Link Link to={`${auth.currentUser.uid}`}>
            <i className="fa-solid fa-user"></i>
            <p className="text-xl">Profile</p>
          </Link>
        </li>
      </ul>

      <p id="username"></p>

      {/* <button className="bg-[#2563eb] text-xl border-none rounded-3xl  py-2 cursor-pointer text-white mt-7 hover:bg-white hover:text-black hover:font-bold transition duration-500 ease-in-out " onClick={handleSignOut} id="Logout">Log Out</button> */}
      <SignOutDialog/>
    </div>
  );
}




export default Sidebar;
