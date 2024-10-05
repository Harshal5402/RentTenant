import React, { useContext, useEffect, useState } from 'react'
import './SignIn.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { StoreContext } from '../../Context/StoreContext'

const SignIn = (props) => {

  // const url = 'http://localhost:3000'
  const {url} = useContext(StoreContext)
  
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData(data => ({...data, [name]:value}));
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = `${url}/api/user/login`

    try {
      const response = await axios.post(newUrl, data)
      if (response.data.success) {
        setToken(response.data.token)
        toast.success('User Login Successfull')
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch (error) {
      toast.error("Something went worng. Please try again!")  
    }
  }

  // useEffect(() => {
  //   console.log(data);
  // }, [data])


    
  return (props.trigger) ? (
    <div className="login">
      <form onSubmit={onLogin} className='login-container'>
        <div className="login-title">
          <h2>Login</h2>
          <img onClick={() => props.setTrigger(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
          <input type="email" name='email' placeholder="Email" value={data.email} onChange={onchangeHandler} required />
          <input type="password" name='password' placeholder="Password" value={data.password} onChange={onchangeHandler} required />
        </div>
        <button type="Submit">Login</button>
        <div className="login-conditon">
            <input type="checkbox" required/>
            <p>By Continuing, I Agree to the terms of use & privacy policy.</p>
        </div>
        <p>Create a new account? <span onClick={() => props.openSignUp()}>Click here</span></p>
      </form>
      {props.children}
    </div>
  ) : "";
}

export default SignIn
