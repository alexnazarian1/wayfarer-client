import LoginSignupModal from './LoginSignupModal';
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  const protectedLinks = (
    <>
      <NavLink className="nav-link" to="/cities">
        Cities
      </NavLink>
      <p className="nav-action nav-link" onClick={props.logout}>
        Logout
      </p>
    </>
  );
  const loginLinks = (
    <>
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
    </>
  );
    return (
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <NavLink className="nav-link" exact to="/">
            <Navbar.Brand> <img className="logo" src="https://static.vecteezy.com/system/resources/previews/001/209/180/original/horse-png.png" alt="logo" /> Wayfarer</Navbar.Brand></NavLink>
            <Nav className="ml-auto">
              { props.auth.user ? protectedLinks : loginLinks }
            </Nav>
        </Container>
      </Navbar>
    );
}

export default NavBar;