import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import {authguard} from '../store/ServerService'
class Header extends React.Component {
  logout() {
    localStorage.removeItem("token");
  }
  render() {
    return (
      <div className="app">
        <Navbar
          variant="dark"
          id="Navbar"
          style={{ background: "#262537", position: "fixed", top: 0 }}
          collapseOnSelect
          expand="lg"
        >
          <NavLink exact className="logo" activeClassName="active" to="/">
            Adesk
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
            <Nav.Link id="nav-link" className="mrgn">
                <NavLink id="Navlink" exact c to="/advertisements">
                  Advertisements
                </NavLink>
                </Nav.Link>
              <Nav.Link
                style={{
                  display: !localStorage.getItem("token") ? "block" : "none",
                }}
                id="nav-link"
              >
                <NavLink id="Navlink" exact c to="/login">
                  Login
                </NavLink>
              </Nav.Link>
              <Nav.Link
                style={{
                  display: !localStorage.getItem("token") ? "block" : "none",
                }}
                id="nav-link"
              >
                <NavLink exact id="Navlink" to="/signup">
                  Signup
                </NavLink>
              </Nav.Link>
              <Nav.Link
                style={{
                  display: localStorage.getItem("token") ? "block" : "none",
                }}
                id="nav-link"
              >
                <NavLink onClick={this.logout} exact id="Navlink" to="/">
                  Logout
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
