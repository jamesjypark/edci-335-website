import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <NavLink to="/edci-335-website/" activeClassName="">
          <img src={logo} />
        </NavLink>
        <div className="links">
          <NavLink to="/edci-335-website/code" className="link" activeClassName="active">
            programme
          </NavLink>
          <NavLink exact to="/edci-335-website" className="link" activeClassName="active">
            motivation
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
