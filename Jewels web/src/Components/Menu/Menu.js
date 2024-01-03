import React from "react";
import { NavLink } from "react-router-dom";
import "../Menu/Menu.css";
import { Nav, Navbar, NavItem, Row } from "reactstrap";

function Menu(props) {
  return (
    <React.Fragment>
      <div
        style={{ width: "100%", backgroundColor: "#b5e4f2", height: "50px" }}
      >
        <Row className="menu">
          <Navbar className="navbar-menu">
            <Nav className="nav-menu">
              <NavItem className="nav-item">
                <NavLink className="navlink" to="/home">
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="/">
                  PRODUCT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="/">
                  MY SHOPEE
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="/">
                  CONTACT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navlink" href="/">
                  ABOUT
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Row>
      </div>
    </React.Fragment>
  );
}

export default Menu;
