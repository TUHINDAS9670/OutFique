import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login.webp";
import{useDispatch, useSelector}from "react-redux"

import { loginUser } from "../redux/slices/authSlice";
import { mergeCart } from "../redux/slices/cartSlice";
import { useEffect } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const location=useLocation();
  const{user,guestId}=useSelector((state)=>state.auth)
  const {cart}=useSelector((state)=>state.cart);
  // get redirect parameter and check if it's checkout or something
  const redirect=new URLSearchParams(location.search).get("redirect")||"/";
  const isCheckoutRedirect=redirect.includes("checkout")
  useEffect(()=>{
    if(user){
      if(cart?.products.length>0 && guestId){
        dispatch(mergeCart({guestId,user})).then(()=>{
          navigate(isCheckoutRedirect ? "/checkout" :"/");
        });
      }else{
        navigate(isCheckoutRedirect ? "/checkout":"/");
      }
    }
  },[user,guestId,cart,navigate,isCheckoutRedirect,dispatch])
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(loginUser({email,password}))

  }
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex  flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-md">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium"> OutFique</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there!👋</h2>
          <p className="text-center mb-6">
            Enter your email and password to login
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full p-2 border rounded "
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Doesn't have an account{" "}
            <Link to={`/register?redirect=${encodeURIComponent(redirect)}`} className="text-red-500 underline">
              Register here
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={login} alt="login image" className="h-[750px] w-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default Login;
