import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import logo from "../../assets/zomato-text-logo.avif";
import "./header.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user
      console.log("User logged out successfully");
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="max-width header">
      <div className="logo">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="zomatoLogo" />
      </div>
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name absolute-center">
              <i className="fi fi-sr-marker absolute-center location-icon"></i>
              <div>Bengaluru</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="locatiom-search-seperator"> </div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              type="text"
              placeholder="Search for restaurant, cuisine, or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper" onClick={toggleDropdown}>
          <img
            className="header-profile-image"
            src="https://b.zmtcdn.com/data/user_profile_pictures/97a/e76ef4019ea11dfa22b5146815db997a.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
          />
          <span className="header-username">Govardhan</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-option-icon"></i>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <ul>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
