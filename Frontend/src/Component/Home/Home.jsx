import React from "react";
import "./Home.css";
import RentTenant_logo from "../../assets/RentTenant_logo.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <img className="logo" src={RentTenant_logo} alt="" />

        <div className="btn">
          <button className="SignUp">Sign Up</button>
          <button className="SignIn">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Home;
