import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand>Wayfarer</Navbar.Brand>
        <Nav className="ml-auto">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>

          <NavLink className="nav-link" to="/cities">
            Cities
          </NavLink>

          <NavLink className="nav-link" to="/...">
            Add City
          </NavLink>

          <NavLink className="nav-link" to="/...">
            Login
          </NavLink>

          <NavLink className="nav-link" to="/...">
            Signup
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;