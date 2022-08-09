import React from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top mr-2"
              alt="Logo-picture"
            />
            App-Store
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
