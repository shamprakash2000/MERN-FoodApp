import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {logoutRedux} from '../redux/userSlice'
import toast from "react-hot-toast"


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state)=>state.user)
  const dispatch=useDispatch()
  console.log(userData);
  const handleShowMenu=()=>{
    setShowMenu(oldState=>!oldState)
  }
  const closeShowMenu=()=>{
    setShowMenu(false)
  }

  const handleLogout=()=>{
    dispatch(logoutRedux())
    toast("Logout Successfully")
    

  }
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white" >
      {/* desktop */}

      <div className="flex items-center h-full justify-between" >
        <Link to={""}>
          <div className="h-16">
            <img src={logo} className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-6 text-base md:text-lg"  onClick={closeShowMenu}>
           
            <Link to={""}>Home</Link>
            <Link to={"Menu"}>Menu</Link>
            <Link to={"About"}>About</Link>
            <Link to={"Contact"}>Contact</Link>

           
            
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer  w-8 h-8 rounded-full overflow-hidden drop-shadow-md" >
              
              {userData.image? <img src={userData.image}/>:
                <HiOutlineUserCircle />
              }
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col">
                <Link to={"NewProduct"} className="whitespace-nowrap cursor-pointer px-2">New Product</Link>
               {
                userData.image? <p className="cursor-pointer px-2 bg-red-300 text-white" onClick={handleLogout}>Logout</p>:<Link to={"Login"} className="whitespace-nowrap cursor-pointer px-2">Login</Link>
               }
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
