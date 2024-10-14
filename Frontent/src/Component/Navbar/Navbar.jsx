import React, { useContext, useState } from "react";
import "./Navbar.css"
import { assets } from "../../assets/assets";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = () => {
  const [signUpPopup, setSignUpPopup] = useState(false);
  const [signInPopup, setSignInPopup] = useState(false);
  const {token, setToken} = useContext(StoreContext)

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  }

  const openSignUp = () => {
    setSignUpPopup(true);
    setSignInPopup(false);
  };

  const openSignIn = () => {
    setSignInPopup(true);
    setSignUpPopup(false);
  };

  return (
      <div className="navbar">
        <img
          className="nav-logo"
          src={assets.RentTenant_logo}
          alt="Rent Tenant Logo"
        />
        
        

        {!token ? 

        <div className="nav-btn">
          <button onClick={openSignUp} className="SignUp">
            Sign Up
          </button>
          <button onClick={openSignIn} className="SignIn">
            Sign In
          </button>
          {signUpPopup && (
            <SignUp
              trigger={signUpPopup}
              setTrigger={setSignUpPopup}
              openSignIn={openSignIn}
            />
          )}
          {signInPopup && (
            <SignIn
              trigger={signInPopup}
              setTrigger={setSignInPopup}
              openSignUp={openSignUp}
            />
          )}
        </div>
        :
        <div className="nav-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={logout}>
              <img src={assets.logout_icon} alt="" />
              <p>Logout</p>
            </li>
          </ul>
        </div>
        }
      </div>
  );
};

export default Navbar;
