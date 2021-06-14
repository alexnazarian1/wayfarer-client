// import React from 'react';

import LoginSignupModal from './LoginSignupModal';
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// class NavBar extends React.Component {
//   state = {
//     modalShow: false,
//   }

//   handleClose = () => {
//     this.setState({
//         modalShow: false,
//     });
//   }

//   handleShow = () => {
//       this.setState({
//           modalShow: true,
//       });
//   }

//   render() {
//     return (
//       <>
//       <Navbar bg="dark" variant="dark" className="mb-4">
//         <Container>
//           <Navbar.Brand>Wayfarer</Navbar.Brand>
//           <Nav className="ml-auto">
//             <NavLink className="nav-link" exact to="/">
//               Home
//             </NavLink>
  
//             <NavLink className="nav-link" to="/cities">
//               Cities
//             </NavLink>
  
//             <NavLink className="nav-link" to="/...">
//               Add City
//             </NavLink>
  
            // <Button className="nav-link" onClick={this.handleShow}>
            //   Login
            // </Button>
  
//             <NavLink className="nav-link" to="/...">
//               Signup
//             </NavLink>
//           </Nav>
//         </Container>
//       </Navbar>
//       <LoginSignupModal show={this.state.modalShow} handleClose={this.handleClose} />
//       </>
//     );
//   }
// }


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

          <Button className="nav-link" onClick={props.handleShow}>
              Login
          </Button>

          <NavLink className="nav-link" to="/...">
            Signup
          </NavLink>
        </Nav>
      </Container>
      <LoginSignupModal 
        show={props.loginModalShow} 
        handleClose={props.handleClose}
        handleLogin={props.handleLogin} />
    </Navbar>
  );
}

export default NavBar;