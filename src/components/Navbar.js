import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar(props) {
  
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.about}
                </a>
              </li>
            </ul>
            {/* <Form className="d-flex" role="search">
              <input
                className="htmlForm-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              
            </Form> */}

            <div className="form-check form-switch">
              <input
                onClick={props.modeClick}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label  className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault" >
                Enable {props.mode==="dark"?"light":"dark"} mode
              </label>
            </div>
{/* 
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                onClick={props.modeClick}
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autocomplete="off"
                
              />
              <label className="btn btn-outline-primary" htmlFor="btnradio1">
                Blue Mode
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autocomplete="off"
              />
              <label className="btn btn-outline-danger" htmlFor="btnradio2">
                Red Mode
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio3"
                autocomplete="off"
              />
              <label className="btn btn-outline-success" htmlFor="btnradio3">
                Green Mode
              </label>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Fuck You",
  about: "Fuck You Again",
};
