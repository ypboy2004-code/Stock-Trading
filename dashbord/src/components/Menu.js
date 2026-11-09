
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const profileRef = useRef(null);

  // Menu selection
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsProfileDropdownOpen(false);
  };

  // Toggle profile dropdown
  const handleProfileClick = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Logout function
const handleLogout = async () => {
  try {
    const response = await fetch(
      "https://stock-trading-backend-l2up.onrender.com/logout",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const result = await response.json();

    if (response.ok && result.success) {
      window.location.replace(
        "https://stock-trading-frontend-1.onrender.com"
      );
    }
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img
        src="logo.png"
        style={{ width: "50px" }}
        alt="Logo"
      />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* Profile Dropdown */}
        <div className="profile-container" ref={profileRef}>

          {/* Profile Button */}
          <button
            type="button"
            className="profile"
            onClick={handleProfileClick}
            aria-expanded={isProfileDropdownOpen}
            aria-haspopup="true"
          >
            <div className="avatar">ZU</div>

            <p className="username">USERID</p>

            <span className="dropdown-arrow">
              {isProfileDropdownOpen ? "▲" : "▼"}
            </span>
          </button>

          {/* Dropdown Menu */}
          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <button
                type="button"
                className="logout-btn"
                onClick={handleLogout}
              >
                <span>↪</span>
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Menu;
