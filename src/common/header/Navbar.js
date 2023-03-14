import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  const [MobileMenu, setMobileMenu] = useState(false);

  const handleClick = () => {
    setMobileMenu(!MobileMenu);
  };

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span className="fa fa-th"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navLink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
            >
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/user">user account</Link>
              </li>
              <li>
                <Link to="/vendor">vendor account</Link>
              </li>
              <li>
                <Link to="/track">track my order</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
            <button onClick={handleClick} className="toggle">
              {MobileMenu ? (
                <i className="fa fa-times close home-bth"></i>
              ) : (
                <i class="fa fa-solid fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
