import React, { useState } from "react";
import profileIcon from "../assets/user.png";
import { BiShow, BiHide } from "react-icons/bi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {loginRedux} from '../redux/userSlice'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: ""
  });
const navigate =useNavigate()
const userData = useSelector(state=>state.user)


const dispatch = useDispatch()
const handleShowPassword = () => {
    setShowPassword((oldVslue) => !oldVslue);
  };

  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const {email, password} = data;
    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resData = await fetchData.json();
      console.log(resData);
      
      toast(resData.data.firstName+" "+resData.message)
      if(resData.alert){
        dispatch(loginRedux(resData))
        setTimeout(()=>{
          navigate("/")
        },1000)
      }
      console.log("line 64",userData);

    } else {
      alert("enter required field");
    }
  };
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        <div className="w-10 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={profileIcon} className="w-full" />
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline outline-2 focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="max-w-[120px] w-full m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p>
          Don't have account?{" "}
          <Link to={"/Signup"} className="text-red-500 underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
