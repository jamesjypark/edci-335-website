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
            code
          </NavLink>
          <NavLink to="/design" className="link" activeClassName="active">
            design
          </NavLink>
          <NavLink exact to="/" className="link" activeClassName="active">
            about me
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Header;
