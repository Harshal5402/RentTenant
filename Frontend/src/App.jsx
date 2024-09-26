import { useState } from 'react'
import Home from './Component/Home/Home'
import { Route, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer/>
    <Home />
    </>
  )
}

export default App
