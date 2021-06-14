import LoginSignupModal from './LoginSignupModal';
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  if (props.auth.user) {
    return (
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <NavLink className="nav-link" exact to="/"><Navbar.Brand>Wayfarer</Navbar.Brand></NavLink>
            <Nav className="ml-auto">
              <NavLink className="nav-link" to="/cities">
                Cities
              </NavLink>
              <NavLink className="nav-link" to="/...">
                Add City
              </NavLink>
              <p className="nav-action nav-link" onClick={props.logout}>
                Logout
              </p>
            </Nav>
        </Container>
      </Navbar>
    )} else {
        return (
          <Navbar bg="dark" variant="dark" className="mb-4">
            <Container>
              <NavLink className="nav-link" exact to="/"><Navbar.Brand>Wayfarer</Navbar.Brand></NavLink>
                <Nav className="ml-auto">
                  <p className="nav-action nav-link" onClick={props.handleShow}>
                      Login
                  </p>
                  <p className="nav-action nav-link" onClick={props.handleShow}>
                    Sign Up
                  </p>
                  <LoginSignupModal 
                    show={props.loginModalShow} 
                    handleClose={props.handleClose}
                    handleLogin={props.handleLogin}
                    storeLogin={props.storeLogin} />
                </Nav>
            </Container>
          </Navbar>
        )}
}

export default NavBar;