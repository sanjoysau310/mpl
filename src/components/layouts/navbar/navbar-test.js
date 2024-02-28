import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useFirebase } from "../../../hooks/firebase/useFirebase";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import mplLogo from "../../../assets/images/logos/mpl.png";

function NavbarTest() {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const { uid, name, email, accessToken, accessType } = user;
  const handleLogout = async () => {
    dispatch(removeUser());
    await firebase.logoutUser().then(() => {
      navigate("/login", { replace: true });
    });
  };
  return (
    // <Navbar collapseOnSelect expand="lg" className="bg-body-dark" bg="dark" data-bs-theme="dark">
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
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
              <NavLink to="" className="nav-link scrollto">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavLink to="/about" className="nav-link scrollto">
                About
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavLink to="/events" className="nav-link scrollto">
                Events
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavLink to="/gallery" className="nav-link scrollto">
                Gallery
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavLink to="/sponsors" className="nav-link scrollto">
                Sponsors
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#about">
              <NavLink to="/contact" className="nav-link scrollto">
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#players">
              <NavLink to="/players" className="nav-link scrollto">
                Players
              </NavLink>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#auth">
              {!accessToken ? (
                <li>
                  <NavLink to="/login" className="nav-link scrollto">
                    <FontAwesomeIcon icon={faRightFromBracket} size="1x" />
                  </NavLink>
                </li>
              ) : (
                <NavDropdown title={name} id="collapsible-nav-dropdown">
                  <NavDropdown.Item>My Account Settings</NavDropdown.Item>
                  {accessType === "admin" && (
                    <NavDropdown.Item>Admin Settings</NavDropdown.Item>
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
