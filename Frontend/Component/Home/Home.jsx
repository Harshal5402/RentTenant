import React from 'react'
import "./Home.css" 
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='Home'>
        <button className='SignUp'>Sign Up</button>
        <button className='SignIn'>Sign In</button>
    </div>
    </>
  )
}

export default Home
