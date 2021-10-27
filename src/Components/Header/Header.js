import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <NavLink to="/" activeClassName="">
          <img src={logo} />
        </NavLink>
        <div className="links">
          <NavLink to="/code" className="link" activeClassName="active">
            programme
          </NavLink>
          <NavLink exact to="/" className="link" activeClassName="active">
            motivation
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
