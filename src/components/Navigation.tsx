import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import plus from "../assets/icons/plus.svg";

const Navigation: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="container">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <Link className="navbar-brand py-0" to="/">
              <img
                src={logo}
                alt="Logo"
                width="189"
                height="44"
                className="d-inline-block align-top"
              />
            </Link>
            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    LOG IN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="btn btn-primary d-flex align-items-center text-uppercase gap-1"
                    to="/add-listing">
                    <img
                      src={plus}
                      alt="Plus"
                      width="18"
                      height="18"
                      className="d-inline-block align-top"
                    />
                    <span>Add Listing</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
