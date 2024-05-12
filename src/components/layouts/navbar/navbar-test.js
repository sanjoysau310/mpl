import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useFirebase } from "../../../hooks/firebase/useFirebase";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import mplLogo from "../../../assets/images/logos/mpl.png";
import {
  collapseMenu,
  collapseUserMenu,
} from "../../../store/slices/menuSlice";
import { useState } from "react";

function NavbarTest() {
  let params = useParams();
  const firebase = useFirebase();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const collapsed = useSelector((state) => state.menu.collapsed);
  //const userMenuOpen = useSelector((state) => state.menu.userMenuOpen);
  const user = useSelector((state) => state.user.currentUser);
  const { uid, name, email, accessToken, accessType } = user;
  const [collapsed, setCollapsed] = useState(true);
  const handleToggle = (e) => {
    //dispatch(collapseMenu());
    setCollapsed(true);
  };

  const handleLogout = async () => {
    dispatch(removeUser());
    await firebase.logoutUser().then(() => {
      navigate("/login", { replace: true });
    });
  };
  console.log(collapsed);
  return (
    // <Navbar collapseOnSelect expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
    <Navbar
      collapseOnSelect={collapsed}
      expand="lg"
      className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#logo">
          <NavLink to="" className="scrollto">
            <img src={mplLogo} alt="MPL" title="MPL" width="75" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <NavLink
                to=""
                className="nav-link scrollto"
                onClick={handleToggle}>
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavLink
                to="/about"
                className="nav-link scrollto"
                onClick={handleToggle}>
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#user">
              <NavLink
                to="/user"
                className="nav-link scrollto"
                onClick={handleToggle}>
                User
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#Events">
              <NavLink
                to="/events"
                className="nav-link scrollto"
                onClick={handleToggle}>
                Events
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#Schedule">
              <NavLink
                to="/schedule"
                className="nav-link scrollto"
                onClick={handleToggle}>
                Schedule
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#Gallery">
              <NavLink
                to="/gallery"
                className="nav-link scrollto"
                onClick={handleToggle}>
                Gallery
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#Sponsors">
              <NavLink
                to="/sponsors"
                className="nav-link scrollto"
                onClick={handleToggle}>
                Sponsors
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#contact">
              <NavLink
                to="/contact"
                className="nav-link scrollto"
                onClick={handleToggle}>
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#users">
              <NavLink
                to="/users"
                className="nav-link scrollto"
                onClick={handleToggle}>
                Users
              </NavLink>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#auth">
              {!accessToken ? (
                <li>
                  <NavLink
                    to="/login"
                    className="nav-link scrollto"
                    onClick={handleToggle}>
                    <FontAwesomeIcon icon={faRightFromBracket} size="1x" />
                  </NavLink>
                </li>
              ) : (
                <NavDropdown
                  title={name}
                  id="collapsible-nav-dropdown"
                  onClick={() => setCollapsed(false)}>
                  {/* <NavDropdown.Item>
                    <NavLink
                      to={"/userAccount/" + params.id}
                      //className="login-button scrollto"
                      className="nav-link scrollto">
                      My Account
                    </NavLink>
                  </NavDropdown.Item> */}
                  {accessType === "admin" && (
                    <NavDropdown.Item>
                      <NavLink
                        to="/admin"
                        //className="login-button scrollto"
                        className="nav-link scrollto">
                        Admin Settings
                      </NavLink>
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavLink
                      to="/login"
                      //className="login-button scrollto"
                      className="nav-link scrollto"
                      onClick={handleLogout}>
                      Logout
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarTest;
