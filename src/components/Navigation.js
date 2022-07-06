/* eslint-disable */

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav-container">
      <NavLink className="heading-text" to="/welcome">
        Math Magicians
      </NavLink>

      <ul className="nav-list">
        <li className="nav-item">
          <NavLink activeStyle={{ color: "red" }} to="/welcome">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={{ color: "red" }} to="/calculator">
            Calculator
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={{ color: "red" }} to="/quotes">
            Quote
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
