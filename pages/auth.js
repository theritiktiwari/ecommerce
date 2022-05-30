import React, { useState } from 'react'
import Head from 'next/head';

import Login from '../Components/Login'
import Signup from '../Components/Signup'

const Auth = (props) => {
  const [loginBtn, setLoginBtn] = useState(true);
  const [signupBtn, setSignupBtn] = useState(false);

  const login_signup = (e) => {
    e.preventDefault();
    if (e.target.value === 'Log In') {
      setLoginBtn(true);
      setSignupBtn(false);
    } else if(e.target.value === 'Sign Up') {
      setLoginBtn(false);
      setSignupBtn(true);
    }
  }

  return (
    <>
    <Head>
      <title>{loginBtn ? "Log In" : "Sign Up"} | {props.name}</title>
    </Head>
      <div className="flex justify-center w-56 m-auto pt-10">
        <input onClick={login_signup} type="submit" name="login" value="Log In" className={`rounded-l-full cursor-pointer ${loginBtn ? "text-white bg-black" : "text-black bg-white"} border-2 border-black py-2 px-6 focus:outline-none`} />
        <input onClick={login_signup} type="submit" name="signup" value="Sign Up" className={`rounded-r-full cursor-pointer ${signupBtn ? "text-white bg-black" : "text-black bg-white"} border-2 border-black py-2 px-6 focus:outline-none`} />
      </div>
      {loginBtn && <Login />}
      {signupBtn && <Signup />}
    </>
  )
}

export default Auth