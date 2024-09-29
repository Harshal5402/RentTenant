import { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
    </>
  );
}

export default App;
