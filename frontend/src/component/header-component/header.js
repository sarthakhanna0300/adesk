import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
// import {authguard} from '../store/ServerService'
class Header extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     checkstorage:Boolean,
  //     present:false
  //   };
  // }

  logout = () => {
    localStorage.removeItem("token");
    this.props.changeLoader();
    // console.log("djfv")
  };
  render() {
    console.log(this.props.ctr);
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
            <Nav.Link
                style={{
                  display: this.props.ctr ? "block" : "none",
                }}
                id="nav-link"
              >
                <NavLink id="Navlink" exact c to="/create">
                  {/* {{token}} */} Create 
                </NavLink>
              </Nav.Link>
              <Nav.Link id="nav-link" className="mrgn">
                <NavLink id="Navlink" exact c to="/">
                  Advertisements
                </NavLink>
              </Nav.Link>
              <Nav.Link
                style={{
                  display: !this.props.ctr ? "block" : "none",
                }}
                id="nav-link"
              >
                <NavLink id="Navlink" exact c to="/login">
                  {/* {{token}} */} Login
                </NavLink>
              </Nav.Link>
              <Nav.Link
                style={{
                  display: !this.props.ctr ? "block" : "none",
                }}
                id="nav-link"
              >
                <NavLink exact id="Navlink" to="/signup">
                  Signup
                </NavLink>
              </Nav.Link>
              <Nav.Link
                style={{
                  display: this.props.ctr ? "block" : "none",
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
const mapStateToProps = (state) => {
  return {
    ctr: state.present,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeLoader: () => dispatch({ type: "SetToken" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
